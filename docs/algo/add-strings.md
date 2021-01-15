---
title: Add Strings
diff: easy
tags:
  - Math
  - String
related:
  - add-two-numbers
  - add-two-numbers-ii
---

<img class="medium-zoom" src="/algo/add-strings.png" alt="https://leetcode.com/problems/add-strings">

## Solution

Let $m$ be the length of `num1`, and $n$ be the length of `num2`.

### Math

Could also have `res` as a list of integers instead.

::: theorem Complexity
time: $O(\max (m, n))$  
space: $O(\max (m, n))$
:::

```py
def addStrings(self, num1: str, num2: str) -> str:

    i, j = len(num1)-1, len(num2)-1
    res = ''
    carry = 0

    while i >= 0 or j >= 0:
        a = ord(num1[i]) - ord('0') if i >= 0 else 0
        b = ord(num2[j]) - ord('0') if j >= 0 else 0
        carry, sum = divmod(a + b + carry, 10)
        res += str(sum)
        i -= 1
        j -= 1

    if carry:
        res += str(carry)

    return res[::-1]
```
