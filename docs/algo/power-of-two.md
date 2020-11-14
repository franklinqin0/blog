---
title: Power of Two
diff: easy
tags:
  - Math
  - Bit Manipulation
related:
  - power-of-three
  - power-of-four
  - number-of-1-bits
---

<img class="medium-zoom" src="/algo/power-of-two.png" alt="https://leetcode.com/problems/power-of-two">

## Solution

### Vanilla Iteration

Could also do in recursion instead of while loop but omitted.

We could either increase or decrease w/ $O(\log n)$ time and constant space.

#### Increase

We could increase `acc` till it's equal to or larger than `n`.

```py
def isPowerOfTwo(self, n: int) -> bool:
    if n<1: return False
    elif n==1: return True
    acc = 1
    while acc < n:
        acc *= 2
        if acc==n:
            return True
    return False
```

#### Decrease

We could decrease `n` till it's equal to or smaller than `1`.

```py
def isPowerOfTwo(self, n: int) -> bool:
    if n<1: return False
    while n>1:
        n /= 2
    return n==1
```

### Bit Manipulation

Both solutions take constant time and constant space.

#### Two's Complement

In two's complement notation, `-n = ~n + 1`. This `-` operation on `n` would revert all bits except the rightmost 1-bit. Now `n & (-n)` would just keep that rightmost 1-bit. If `n` is a power of 2, it has just one 1-bit and `n & (-n) == n` would return `0`.

```py
def isPowerOfTwo(self, n: int) -> bool:
    if n==0: return False
    return n & (-n) == n
```

#### Get Rid of Rightmost 1-bit

If `n` is a power of 2, it has just one 1-bit. If subtract `n` by 1, all the lower bits would become `1`'s and `n & (n-1) == 0`.

```py
def isPowerOfTwo(self, n: int) -> bool:
    if n==0: return False
    return n & (n-1) == 0
```
