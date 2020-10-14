---
title: Reverse Bits
source: LeetCode
diff: easy
tags:
  - Bit Manipulation
  - D&C
related:
  - reverse-integer
  - number-of-1-bits
---

<img class="medium-zoom" src="/algo/reverse-bits.png" alt="https://leetcode.com/problems/reverse-bits">

## Solution

There are a myriad of solutions for this problem. Complexity is too obvious to note down.

### 1-liner Cheating

Can use the built-in `int`, `bin`, `zfill`, and string reverse `[::-1]` to achieve a 1-liner solution.

```py
def reverseBits(self, n):
    return int(bin(n)[2:].zfill(32)[::-1], 2)
```

### Bit Mask

Mask bits from right to left.

```py
def reverseBits(self, n: int) -> int:
    res = 0
    mask = 1
    for _ in range(32):
        res <<= 1
        if mask&n:
            res |= 1
        mask <<= 1
    return res
```

Mask bits from left to right.

```py
def reverseBits(self, n: int) -> int:
    res = 0
    mask = 1<<31
    for _ in range(32):
        if n&1:
            res |= mask
        mask >>= 1
        n >>= 1
    return res
```

### Bit Shift

Shift bit by bit in a for loop.

```py
def reverseBits(self, n: int) -> int:
    res = 0
    for _ in range(32):
        res = (res<<1) + (n&1)
        n>>=1
    return res
```

Shift bit by bit in a while loop w/ `power`.

```py
def reverseBits(self, n):
    res, power = 0, 31
    while n:
        res += (n & 1) << power
        n = n >> 1
        power -= 1
    return res
```

### Shift out Rightmost 1

Every time only shift out rightmost 1. This saves time when `n` has many 0 bits.

```py
def reverseBits(self, n: int) -> int:
    res = (n%2)<<31
    power = 31

    while power>0:
        tmp = n&-n
        shift = int(math.log(tmp, 2)) if tmp>1 else 1
        power -= shift
        n >>= shift
        res += (n&1)<<power
    return res
```

## Follow Up

> If this function is called many times, how would you optimize it?

### Pseudocode

We should come up with a lookup table to store mappings. The following code derives from EPI in Python, page 28, which reverses bits for a _64-bit_ integer.

```py
def reverseBits(x):
    MASK_SIZE = 16
    BIT_MASK = 0xFFFF
    return (PRECOMPUTED_REVERSE[x & BIT_MASK] << (3 * MASK_SIZE)
            | PRECOMPUTED_REVERSE[(x >> MASK_SIZE) & BIT_MASK] << (2 * MASK_SIZE)
            | PRECOMPUTED_REVERSE[(x >> (2 * MASK_SIZE) & BIT_MASK] << MASK_SIZE
            | PRECOMPUTED_REVERSE[(x >> (3 * MASK_SIZE) & BIT_MASK])
```

### Divide & Conquer

At each of following steps, intermediate result is merged and input to next step:

- break the 32-bit integer into 2 blocks of 16-bits and swap
- break the 16-bit integer into 2 blocks of 8-bits and swap
- break the 8-bit integer into 2 blocks of 4-bits and swap
- break the 4-bit integer into 2 blocks of 2-bits and swap
- break the 2-bit integer into 2 blocks of 1-bit and swap

```py
def reverseBits(self, n):
    n = (n >> 16) | (n << 16)
    n = ((n & 0xff00ff00) >> 8) | ((n & 0x00ff00ff) << 8)
    n = ((n & 0xf0f0f0f0) >> 4) | ((n & 0x0f0f0f0f) << 4)
    n = ((n & 0xcccccccc) >> 2) | ((n & 0x33333333) << 2)
    n = ((n & 0xaaaaaaaa) >> 1) | ((n & 0x55555555) << 1)
    return n
```
