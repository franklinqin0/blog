---
title: Hamming Distance
diff: easy
tags:
  - Bit
related:
  - number-of-1-bits
---

<img class="medium-zoom" src="/algo/hamming-distance.png" alt="https://leetcode.com/problems/hamming-distance">

## Solution

As quoted from the problem statement:

::: tip
The [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) between two integers is the number of positions at which the corresponding bits are different.
:::

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

Counting the **lowest set bit** is faster than counting the [least significant set bits](#least-significant-bit).

```py
def hammingDistance(self, x: int, y: int) -> int:
    xor = x ^ y
    res = 0

    while xor:
        res += 1
        xor = xor & (xor-1)

    return res
```
