---
title: Number of 1 Bits
diff: easy
tags:
  - Math
related:
  - power-of-two
  - power-of-three
---

<img class="medium-zoom" src="/algo/number-of-1-bits.png" alt="https://leetcode.com/problems/number-of-1-bits">

## Solution

`lsb` means least significant bit.

### 1-liner Cheating

Python's built-in `bin` function converts `n` into a binary string. For instance, `bin(12)` would be `'0b1100'` and we can then `count` # of `1`'s in `bin(n)[2:]`.

Complexity:

- time: $O(\log n)$
- space: $O(\log n)$

```py
def hammingWeight(self, n: int) -> int:
    return bin(n)[2:].count('1')
```

### Right Shift

In the while loop, get the `lsb` and increment `cnt` if equal to `1`. Then right shift `n`.

Complexity:

- time: $O(\log n)$
- space: $O(1)$

```py
def hammingWeight(self, n: int) -> int:
    cnt = 0
    while n>0:
        lsb = n&1
        if lsb==1:
            cnt += 1
        n = n >> 1
    return cnt
```

### Bit Mask

```py
def hammingWeight(self, n: int) -> int:
    mask = 1
    cnt = 0
    for _ in range(32):
        if mask&n: cnt += 1
        mask <<= 1
    return cnt
```

### Eliminate Rightmost 1-bit

Eliminate rightmost 1-bit in `n` by `n = n & (n-1)` and count the number of times we do this operation.

Complexity:

- time: $O(\log n)$
- space: $O(1)$

```py
def hammingWeight(self, n: int) -> int:
    cnt = 0
    while n>0:
        cnt += 1
        n &= n-1
    return cnt
```
