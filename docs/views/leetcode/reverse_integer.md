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
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [$−2^{31}$,  $2^{31} − 1$]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

:::tip

- [problem](https://leetcode.com/problems/reverse-integer/)
- [article](https://leetcode.com/articles/reverse-integer/)
:::

<!-- more -->

## Solution

### Convert to String & Reverse & Convert back to Int

Since `ri` is positive, only need to check if $< 2^{31}$.

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

## Overflow

Basically, Python doesn't need to worry about integer overflow.

Following are from [*EPI in Python*](https://www.amazon.com/Elements-Programming-Interviews-Python-Insiders/dp/1537713949).

Integers:

> Integers in Python3 are **unbounded**-the *maximum integer* representable is *a function of the available memory*. The constant `sys.maxsize` can be used to find the word-size; specifically, it's the maximum value integer that can be stored in the word, e.g., $2**63 - L$ on a `64`-bit machine. Bounds on floats are specified in `sys.float-info`.

Float:

> Unlike integers, floats are not infinite precision, and it's convenient to refer to infinity as `float('inf ')` and `float('-inf ')`. These values are comparable to integers, and can be used to create pseudo max-int and pseudo min-int.
