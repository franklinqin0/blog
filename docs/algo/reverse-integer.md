---
title: Reverse Integer
diff: easy
tags:
  - Math
related:
  - reverse-bits
  - palindrome-number
---

<img class="medium-zoom" src="/algo/reverse-integer.png" alt="https://leetcode.com/problems/reverse-integer">

## Solution

Although Python's int is unbounded and has infinite precision, result should be `0` if outside 32-bit signed integer range.

### Brute Force

Convert to a `str`, reverse the string, and finally convert back to `int`.

Since `ri` is positive, only need to check if $< 2^{31}$.

Complexity:

- time: $O(\log n)$
- space: $O(\log n)$

```py
def reverse(self, x: int) -> int:
    is_pos = 1 if x>0 else -1
    ri = int(str(x*is_pos)[::-1])
    return ri*is_pos*(ri<2**31)
```

### Reverse an Int

Following is a standard way to reverse an int and should be remembered.

Complexity:

- time: $O(\log n)$
- space: $O(1)$

```py
def reverse(self, x: int) -> int:
    ri = 0
    is_pos = 1 if x>0 else -1
    x *= is_pos
    while (x!=0):
        ri = ri*10 + x%10
        x //= 10
    return ri*is_pos*(ri<2**31)
```
