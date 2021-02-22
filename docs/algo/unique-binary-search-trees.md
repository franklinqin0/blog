---
title: Unique Binary Search Trees
diff: medium
tags:
  - DP
  - Tree
  - Catalan Number
related:
  - valid-parenthesis
---

<img class="medium-zoom" src="/algo/unique-binary-search-trees.png" alt="https://leetcode.com/problems/unique-binary-search-trees">

Read more about Catalan_number on [Wikipedia](https://en.wikipedia.org/wiki/Catalan_number) and [this great Chinese post](http://lanqi.org/interests/10939).

## Solution

$C_n$ means the `n`th Catalna number.

The first Catalan numbers for $n = 0, 1, 2, \cdots$ are: $1, 1, 2, 5, 14, 42, 132$ ...

The number of structurally unique BST's that store values $1 \cdots n$ is $C_n$.

### Catalan Number

All following solutions use some formula to calculate `n`th Catalan number.

#### Recursive Formula 1

$$C_{n}=\sum_{i=1}^n C_{i-1} C_{n-i}$$

::: theorem Complexity
time: $O(n^2)$  
space: $O(n)$
:::

```py
def numTrees(self, n: int) -> int:
    C = [0 for _ in range(n+1)]
    C[0] = C[1] = 1
    for i in range(2,n+1):
        for j in range(1,i+1):
            C[i] += C[j-1]*C[i-j]
    return C[n]
```

#### Recursive Formula 2

$$C_{n}=\frac{2(2n-1)}{n+1} C_{n-1}$$

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def numTrees(self, n: int) -> int:
    C = 1
    for i in range(1, n+1):
        C = C * 2*(2*i-1)//(i+1)
    return C
```

#### Binomial Coefficients

$$C_{n}=\frac{1}{n+1} \binom{2n}{n}=\frac{(2n)!}{(n+1)! n!}=\prod_{k=2}^{n} \frac{n+k}{k}$$

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def numTrees(self, n: int) -> int:
    C = 1
    for k in range(2,n+1):
        C = C*(n+k)/k
    return round(C)
```
