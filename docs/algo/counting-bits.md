---
title: Counting Bits
diff: medium
tags:
  - Bit
  - DP
related:
  - number-of-1-bits
---

<img class="medium-zoom" src="/algo/counting-bits.png" alt="https://leetcode.com/problems/counting-bits">

## Solution

The space to store `int` is constant.

### Brute Force

Let $k$ be the number of bits for an `int`.

::: theorem Complexity
time: $O(k \cdot num)$  
space: $O(1)$
:::

```py
def countBits(self, num: int) -> List[int]:
    def countOnes(x: int) -> int:
        ones = 0
        while x > 0:
            x &= (x - 1)
            ones += 1
        return ones

    res = [countOnes(i) for i in range(num + 1)]
    return res
```

### DP

::: theorem Complexity
time: $O(num)$  
space: $O(1)$
:::

#### Most Significant Bit

For every positive integer $x$, there exists $y$: a largest power of $2$ and $y \le x$, i.e., **msb**. Let $z = x-y$, so $0 \le z<x$ and $res[x]=res[z]+1$.

During looping, check power of 2: $y \&(y-1)=0$ and update: $res[x]=res[z]+1$.

```py
def countBits(self, num: int) -> List[int]:
    res = [0 for _ in range(num+1)]

    for i in range(1, num+1):
        # i is a power of 2
        if i & (i-1) == 0:
            msb = i
        res[i] = res[i-msb] + 1

    return res
```

#### Least Significant Bit

For a positive integer $x$, $\lfloor \frac{x}{2} \rfloor =$ `x>>1`.

```py
def countBits(self, num: int) -> List[int]:
    res = [0 for _ in range(num+1)]

    for i in range(1, num+1):
        lsb = i & 1
        res[i] = res[i>>1] + lsb

    return res
```

#### Lowest Set Bit

Let $y=x \&(x-1)$, so $0 \le y < x$ and $res[x]=res[x \&(x-1)]+1$。

```py
def countBits(self, num: int) -> List[int]:
    res = [0 for _ in range(num+1)]

    for i in range(1, num+1):
        res[i] = res[i & (i-1)] + 1

    return res
```
