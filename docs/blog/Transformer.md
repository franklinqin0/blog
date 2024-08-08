---
title: Tranformer
date: 2024-05-04
sidebar: "auto"
categories:
  - study
tags:
  - tech
  - research
  - thesis
publish: false
---

This post explains my understanding of Transformer, the most important neural network architecture to date. I believe this understanding would help me prevail through many future difficulties, as when spending enough time, I could achieve anything!

## Self-Attention (SA)

### Basic Intuition

A sequence-to-sequence operation:

- input vectors: $x_1, x_2, \cdots, x_t$, each of dim $k$
- output vectors: $y_1, y_2, \cdots, y_t$, each of dim $k$

self attention: a weighted average over all the input vectors:

$$y_i = \sum_j w_{ij} x_j$$

where $j$ iterates over the whole sequence and the weights sum to $1$ over $j$. The weight $w_{ij}$ is not a parameter, but derived from a dot product over $x_i$ and $x_j$:

$$
w_{ij}' = x_i^T x_j
$$

The sum of weights over a sequence should sum up to $1$, so apply softmax to $w_{ij}'$:

$$
w_{ij} = \frac{\exp w_{ij}'}{\sum_j \exp w_{ij}'}
$$

Two things to note:

1. There are no parameters yet. Upstream may include an embedding layer to drive self-attention.
2. Input is a set, not a sequence. If input permutes, output also does, i.e., permutation equivariant.

### Query, Key, Value

**query**: compared to every other vector to establish the weights for its own output $y_i$.  
**key**: compared to every other vector to establish the weights for the output of the j-th vector $y_j$.  
**value**: used as part of the weighted sum to compute each output vector once the weights have been established.

$$
\begin{aligned}
q_i &= W_q x_i &
k_i &= W_k x_i &
v_i &= W_v x_i
\end{aligned}
$$

$$
\begin{aligned}
w'_{ij} &= {q_i}^T k_j \\
w_{ij} &= \text{softmax}(w'_{ij}) \\
y_i &= \sum_j w_{ij} v_j \\
\end{aligned}
$$

### Scaled Dot Product

Softmax function can be sensitive to large input values, which kill the gradient and slow down learning. The Euclidean length of a vector with all $c$ in $\mathbb{R}^k$ is $\sqrt{k}c$, so divide the amount by which the the length of average vectors is increased:

$$
w'_{ij} = \frac{q_i^T k_j}{\sqrt{k}}
$$

With the input consisting of queries and keys of dimension $d_k$, and values of dimension $d_v$, the matrix form is:

\operatorname{Attention}(Q, K, V)=\operatorname{softmax}\left(\frac{Q K^T}{\sqrt{d_k}}\right) V

### Multiple Heads

Multi-head attention allows the model to jointly attend to information from different representation subspaces at different positions. With a single attention head, averaging inhibits this.

$$
\begin{aligned}
& \operatorname{MultiHead}(Q, K, V)=\operatorname{Concat}\left(\text { head }_1, \ldots, \text { head }_{\mathrm{h}}\right) W^O \\
& \text { where head }_{\mathrm{i}}=\operatorname{Attention}\left(Q W_i^Q, K W_i^K, V W_i^V\right) \\
\end{aligned}
$$

### PyTorch Implementation

```py
class SelfAttention(nn.Module):
    def __init__(self, k, head=4, mask=False):
        super().__init__()
        # embedding dim needs to be divisible by # of heads
        assert k % heads == 0
        self.k, self.heads = k, heads
    
        # init linear transformations to provide reasonable initialization
        self.tokeys = nn.Linear(k, k, bias=False)
        self.toqueries = nn.Linear(k, k, bias=False)
        self.tovalues = nn.Linear(k, k, bias=False)
        
        # apply after multi-head self-attention
        self.unifyheads = nn.Linear(k, k)
        
    def forward(self, x):
        b, t, k = x.size()
        h = self.heads
        
        queries = self.toqueries(x)
        keys = self.tokeys(x)
        values = self.tovalues(x)
        
        # cut full embedding of dim k into h chunks
        s = k // h
        keys = keys.view(b, t, h, s)
        queries = queries.view(b, t, h, s)
        values = values.view(b, t, h, s)
        
        # fold heads into batch dim

        keys = keys.transpose(1, 2).contiguous().view(b * h , t, s) # explicitly copies tensor
        queries = queries.transpose(1, 2).contiguous().view(b * h, t, s)
        values = values.transpose(1, 2).contiguous().view(b * h, t, s)
        
        # dot products
        dot = torch.bmm(queries, keys.transpose(1, 2)) # raw weights of size (b*h, t, t)
        dot = dot / (s ** (1/2)) # scale
        dot = F.softmax(dot, dim=2) # normalize
        
        
        # apply self attention to values
        out = torch.bmm(dot, values).view(b, h, t, s)
        
        # swap h, t back & unify heads
        out = out.transpose(1, 2).contiguous().view(b, t, s * h)
        
        return self.unifyheads(out)
```

### Cross Attention (CA)

#### Intuition

Decoder generates word by word autoregressively, based both on the latent vector and the words it has already generated.  
CA benefit: latent vector captures semantics; decoder handles syntax/grammar.  
Outcome: Different sentences with same meaning from same latent vector.

decoder-only transformer (for an autoregressive model) or an encoder-only transformer (for a model without masking).

#### Applications of Attention

- In "encoder-decoder attention" layers, the queries come from the previous decoder layer, and the memory keys and values come from the output of the encoder. This allows every position in the decoder to attend over all positions in the input sequence.
- The encoder contains self-attention layers. In a self-attention layer all of the keys, values and queries come from the same place, in this case, the output of the previous layer in the encoder. Each position in the encoder can attend to all positions in the previous layer of the encoder.
- Similarly, self-attention layers in the decoder (**CA**) allow each position in the decoder to attend to all positions in the decoder up to and including that position. We need to prevent leftward information flow in the decoder to preserve the auto-regressive property. We implement this inside of scaled dot-product attention by masking out (setting to $−\infty$) all values in the input of the softmax which correspond to illegal connections.

## Position-wise Feed-Forward Networks

In addition to attention sub-layers, each of the layers in our encoder and decoder contains a fully connected feed-forward network, which is applied to each position separately and identically. This consists of two linear transformations with a ReLU activation in between.

$$
\operatorname{FFN}(x)=\max \left(0, x W_1+b_1\right) W_2+b_2
$$

Another way of describing this is as two convolutions with kernel size 1. The dimension of hidden layer is usually 4 times as big as the input and output dimension.

## Transformer Block

The block applies, in sequence: a self attention layer, layer normalization, a feed forward layer (a single MLP applied independently to each vector), and another layer normalization. *Residual connections* are added around both, before the *layer normalization*.

<img class="medium-zoom" src="/thesis/transformer_overview.png" width=60% alt="The Transformer model architecture">

### PyTorch Implementation

```py
class TransformerBlock(nn.Module):
    def __init__(self, k, heads):
        super().__init__()
        
        self.attention = SelfAttention(k, heads=heads)
        
        self.norm1 = nn.LayerNorm(k)
        self.norm2 = nn.LayerNorm(k)
        
        self.ff = nn.Sequential(
            nn.Linear(k, 4 * k), # dim of hidden layer should be larger than input/output layers
            nn.ReLU(),
            nn.Linear(4 * k, k)
        )
    
    def forward(self, x):
        attended = self.attention(x)
        x = self.norm1(attended + x)
        
        fedforward = self.ff(x)
        return self.norm2(fedforward + x)
```

### Layer Normalization vs Batch Normalization

Batch normalization normalizes the input of each mini-batch by scaling and shifting.

Layer normalization is applied over the embedding dimension only

### Why is Transformer better than RNN and CNN

Recurrent connection requires $O(n)$ sequential operation. In a convolution layer, only pixels in kernel can interact with each other, but could stack many convolutions. Self-attention layer connects all positions with a constant number of sequentially executed operations; it uses positional encodings so could model dependencies over the whole range of the input sequence.

### Label Smoothing

For a classification of three categories, $y$ is the true label $\begin{bmatrix} 1 & 0 & 0 \end{bmatrix}$.

$$
y_{\text{smooth}} = (1 - \alpha) \cdot y + \frac{\alpha}{K}
$$

### Masking

To use self-attention as an autoregressive model, one needs to ensure that elements can only attend to input elements that precede them in the sequence. We do this by applying a mask to the matrix of dot products, before the softmax is applied. This mask disables all elements above the diagonal of the matrix.

```py
dot = torch.bmm(queries, keys.transpose(1, 2))

indices = torch.triu_indices(t, t, offset=1)
dot[:, indices[0], indices[1]] = float('-inf') # softmax of negative infinity is 0

dot = F.softmax(dot, dim=2)
```

## References

- [tutorial](https://peterbloem.nl/blog/transformers)
- [video explanation](https://www.bilibili.com/video/BV1pu411o7BE/?share_source=copy_web&vd_source=6db376d703f2e75ae9802d02c2a8ee2b)
