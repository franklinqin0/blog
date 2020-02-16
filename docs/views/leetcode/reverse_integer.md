---
title: Reverse Integer
date: 2020-02-16
categories:
 - study
tags:
 - leetcode
---

Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [$−2^31$,  $2^31 − 1$]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

### Convert to String & Reverse & Convert back to Int

Since `ri` is positive, only need to check if $< 2^31$.

```python
def reverse(self, x: int) -> int:
    is_pos = 1 if x>0 else -1
    ri = int(str(x*is_pos)[::-1])
    return ri*is_pos*(ri<2**31)
```

### Reverse an Int

Following is a standard way to reverse an int and should be remembered.

```python
def reverse(self, x: int) -> int:
    ri = 0
    is_pos = 1 if x>0 else -1
    x *= is_pos
    while (x!=0):
        ri = ri*10 + x%10
        x //= 10
    return ri*is_pos*(ri<2**31)
```
