---
title: NLP IN2361
date: 2023-04-01
categories:
  - study
tags:
  - tech
publish: false
---

Notes on NLP IN2361 course at TUM.

<!-- more -->

## Regular Expression

Pattern matching

Basic operations:

- concatenation of symbols
- disjunction of symbols (`[]`, `|`, and `.`)
- counter (`*`, `+`, and `{n, m}`)
- anchor (`^`, `$`)
- precedence (`()`)

## Text Normalization:

1. tokenizing(segmenting) words
2. normalizing word formats
3. segmenting sentences

### Tokenization

BPE!!!
white-space / single-character based segmentation

### Lemmatization OR NORMALIZATION???

represent all words as their lemma (shared root)
am, are, is $\rightarrow$ be
car, cars, car's, cars' $\rightarrow$ car

He is reading detective stories
$\rightarrow$ He be read detective story

#### Morphological Parsing

Morpheme: single unit of meaning

- stems: the core meaning-bearing units
- affixes: parts that adhere to stems, often with grammatical functions

Morphological Parser:

- parse _cats_ into two morphemes _cat_ and _s_

### Stemming

reduce terms to stems, chopping off affixes crudely

- increase in recall at the expense of precision
- find more words that we are looking for, but find some words we are not looking for

#### Porter Stemmer

based on a series of rewrite rules run in series

- a cascade, in which output of each pass fed to next pass

sample rules:

- ATIONAL $\rightarrow$ ATE $\quad$ (e.g., relational $\rightarrow$ relate)
- ING $\rightarrow$ $\epsilon$ $\quad$ if stem contains vowel (e.g., motoring $\rightarrow$ motor)
- SSES $\rightarrow$ SS $\quad$ (e.g., grasses $\rightarrow$ grass)

### Sentence Segmentation

`!` and `?` mostly unambiguous but **period** `.` is very ambiguous

- Sentence boundary
- Abbreviations like Inc. or Dr.
- Numbers like .02% or 4.3

Common algorithm: Tokenize first: use rules or ML to classify a period as either (a) part of the word or (b) a sentence-boundary.

- An abbreviation dictionary can help

Sentence segmentation can then often be done by rules based on this tokenization.

## Minimum Edit Distance

How similar are two strings?

- spell correction
- align two sequences of nucleotides
- also used for machine translation, information extraction, speech recognition

Given two sequences, an alignment is a correspondence between substrings of the two sequences. Operators to transform from initial state to goal state:

- insertion
- deletion
- substitution

**_Levenshtein distance_** (path cost) between two sequences: each of the three operations has a cost of 1, or substitions cost 2.

### Definition and Computation of Minimum Edit Distance

$D[i, j]$ is the edit distance between $X[1..i]$ and $Y[1..j]$.

Weighted min edit distance:

$$
D[i, j]=\min \left\{\begin{array}{l}
D[i-1, j]+\operatorname{del-cost}(\text {source}[i]) \\
D[i, j-1]+\operatorname{ins-cost}(\text { target }[j]) \\
D[i-1, j-1]+\operatorname{sub-cost}(\operatorname{source}[i], \operatorname{target}[j])
\end{array}\right.
$$

Computed by dynamic programming:

```py
def minDistance(self, source: str, target: str) -> int:
    n = len(source)
    m = len(target)

    # initialize D
    D = [[0 for _ in range(m+1)] for _ in range(n+1)]
    for i in range(1, n+1):
        D[i][0] = i
    for j in range(1, m+1):
        D[0][j] = j

    # recurrence relation
    for i in range(1, n+1):
        for j in range(1, m+1):
            if source[i-1] == target[j-1]:
                D[i][j] = D[i-1][j-1]
            else:
                D[i][j] = 1 + min(D[i-1][j], D[i][j-1], D[i-1][j-1])

    return D[n][m]
```

Can store the pointers and compute the backtrace to output an alignment.

## Language Model (LM)

Assign a probability to sequences of words

Chain rule to words:

$$
\begin{aligned}
P\left(w_{1: n}\right) & =P\left(w_1\right) P\left(w_2 \mid w_1\right) P\left(w_3 \mid w_{1: 2}\right) \ldots P\left(w_n \mid w_{1: n-1}\right) \\
& =\prod_{k=1}^n P\left(w_k \mid w_{1: k-1}\right)
\end{aligned}
$$

_Markov assumption_: the probability of a word depends only on the previous word.

Generalize the bigram (which looks one word into the past) to the trigram (which looks two words into the past) and thus to the n-gram (which looks n−1 words into the past).

Unigram:

$$
P\left(w_{1:n}\right) \approx \prod_i^n P(w_i)
$$

Bigram:

$$
P\left(w_{1:n}\right) \approx \prod_{k=1}^n P\left(w_k \mid w_{k-1} \right)
$$

N-gram:

$$
P\left(w_n \mid w_{1: n-1}\right) \approx P\left(w_n \mid w_{n-N+1: n-1}\right)
$$

### Estimating n-gram Probabilities

MLE: dividing the observed frequency of a _particular sequence_ by the observed frequency of a _prefix_

$$
P\left(w_n \mid w_{n-1}\right) = \frac{C\left(w_{n-1} w_n\right)}{\sum_w C\left(w_{n-1} w\right)} = \frac{C\left(w_{n-1} w_n\right)}{C\left(w_{n-1}\right)}
$$

practical issue: to avoid numerical underflow, take the exp of log prob:

$$
p_1 \times p_2 \times p_3 \times p_4=\exp \left(\log p_1+\log p_2+\log p_3+\log p_4\right)
$$

## Evaluation: How good is our model?

**_Intrinsic_** evaluation: train parameters of model on a **training set**. Test model performance on **test data** (unseen). Evaluation metric: how well model does on test set.

**_Extrinsic_** evaluation: embed it in an application and measure how much the application improves

### Perplexity (PPL)

LM evaluation Metric: perplexity instead of raw probability.

PPL: inverse probability of the test set, normalized by the number of words.

$$
\begin{aligned}
\operatorname{perplexity}(W) & = P\left(w_1 w_2 \ldots w_N\right)^{-\frac{1}{N}} \\
& = \sqrt[N]{\frac{1}{P\left(w_1 w_2 \ldots w_N\right)}} \\
& = \sqrt[N]{\prod_{i=1}^N \frac{1}{P\left(w_i \mid w_1 \ldots w_{i-1}\right)}}
\end{aligned}
$$

Thus, the higher the conditional probability of the word sequence, the lower the perplexity.

Unigram perplexity:

$$
\operatorname{perplexity}(W) = \sqrt[N]{\prod_{i=1}^N \frac{1}{P\left(w_i\right)}}
$$

Bigram perplexity:

$$
\operatorname{perplexity}(W) = \sqrt[N]{\prod_{i=1}^N \frac{1}{P\left(w_i \mid w_{i-1} \right)}}
$$

Perplexity: the **weighted average branching factor** of a language.

continue: https://live.rbg.tum.de/w/NLP/20413
