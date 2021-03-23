---
title: Hamming Distance
diff: easy
tags:
  - Bit Manipulation
related:
  - number-of-1-bits
---

<img class="medium-zoom" src="/algo/counting-bits.png" alt="https://leetcode.com/problems/counting-bits">

## Solution

The problem solution consists of 2 parts:

1. calculate the `xor` of `x` and `y`
2. count the number of $1$ bits in the `xor`

The space to store `int` is constant.

::: theorem Complexity
time: $O(1)$  
space: $O(1)$
:::

### 1-liner Cheating

```py
def hammingDistance(self, x: int, y: int) -> int:
    return bin(x ^ y).count('1')
```

### Least Significant Bit

```py
def hammingDistance(self, x: int, y: int) -> int:
    xor = x ^ y
    res = 0
    while xor:
        if xor & 1 > 0:
            res += 1
        xor >>= 1

    return res
```

### Brian Kernighan algorithm

This solution is faster than [lsb](#least-significant-bit) in counting $1$ bits.

```py
def hammingDistance(self, x: int, y: int) -> int:
    xor = x ^ y
    res = 0
    while xor:
        res += 1
        xor = xor&(xor-1)

    return res
```
