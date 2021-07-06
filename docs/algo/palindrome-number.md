---
title: Palindrome Number
diff: easy
tags:
  - Math
related:
  - reverse-integer
---

<img class="medium-zoom" src="/algo/palindrome-number.png" alt="https://leetcode.com/problems/palindrome-number">

## Solution

Let $n$ be `x`. So there are $O(\log n)$ digits in total.

### Convert to String & Compare Chars

::: theorem Complexity
time: $O(\log n)$ ($O(1)$ per digit)  
space: $O(\log n)$ (int `x` is converted to string `s`)
:::

```py
def isPalindrome(self, x: int) -> bool:
    if x < 0 or (x > 10 and x % 10 == 0):
        return False
    # convert int to str
    s = str(x)
    l = 0
    r = len(s) - 1
    while l < r:
        # compare left and right digits
        if s[l] != s[r]:
            return False
        else:
            l += 1
            r -= 1
    return True
```

### 1-line Solution

Rather than doing the char comparison in a while loop, use `::-1` in Python to do string reversion and compare w/ `==` operator.

::: theorem Complexity
time: $O(\log n)$  
space: $O(\log n)$
:::

```py
def isPalindrome(self, x: int) -> bool:
    return str(x) == str(x)[::-1]
```

## Follow Up

::: theorem
Could you solve it without converting the integer to a string?
:::

Let's first do vanilla int comparison.

### Revert an Integer & Compare Ints

`ri` means reversed int.

If `x` is $12321$, at the end of the while loop we get `x` = 12, `ri` = 123. `ri//10` = 12, equal to `x`, so returns `True`.

If `x` is $1221$, at the end of the while loop we get `x` = 12, `ri` = 12, equal to `x`, so returns `True`.

::: theorem Complexity
time: $O(\log n)$ ($O(1)$ per digit)  
space: $O(1)$ (no string initialized)
:::

```py
def isPalindrome(self, x: int) -> bool:
    if x < 0 or (x != 0 and x % 10 == 0): return False
    ri = 0
    while ri < x:
        ri = ri*10 + x%10
        x //= 10
    # since the middle digit doesn't matter in an odd palidrome(it will always equal to itself)
    # we can simply get rid of it by ri//10
    return ri == x or ri // 10 == x
```
