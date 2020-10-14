---
title: Unique Binary Search Trees
source: LeetCode
diff: medium
tags:
  - DP
  - Tree
  - Catalan Number
#  - Hash Table
related:
  - valid-parenthesis ???
---

<img class="medium-zoom" src="/algo/unique-binary-search-trees.png" alt="https://leetcode.com/problems/unique-binary-search-trees">

Read more about Catalan_number on [Wikipedia](https://en.wikipedia.org/wiki/Catalan_number) and [this great Chinese post](http://lanqi.org/interests/10939).

## Solution

$C_n$ means the `n`th Catalna number.

The first Catalan numbers for $n = 0, 1, 2, ...$ are: $1, 1, 2, 5, 14, 42, 132$ ...

The number of structurally unique BST's that store values $1$ ... $n$ is $C_n$.

### Catalan Number

All following solutions use some formula to calculate `n`th Catalan number.

#### Recursive Formula 1 (squared time)

$C_{n}=\sum_{i=1}^n C_{i-1} C_{n-i}$

```py
def numTrees(self, n: int) -> int:
    C = [0]*(n+1)
    C[0] = C[1] = 1
    for i in range(2,n+1):
        for j in range(1,i+1):
            C[i] += C[j-1]*C[i-j]
    return C[n]
```

#### Recursive Formula 2 (linear time)

$C_{n}=\frac{2(2n-1)}{n+1} C_{n-1}$

```py
def numTrees(self, n: int) -> int:
    C = 1
    for i in range(1, n+1):
        C = C * 2*(2*i-1)//(i+1)
    return C
```

#### Binomial Coefficients (linear time)

$C_{n}=\frac{1}{n+1} \binom{2n}{n}=\frac{(2n)!}{(n+1)! n!}=\prod_{k=2}^{n} \frac{n+k}{k}$

```py
def numTrees(self, n: int) -> int:
    C = 1
    for k in range(2,n+1):
        C = C*(n+k)/k
    return round(C)
```
