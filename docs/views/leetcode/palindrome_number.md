---
title: Palindrome Number
date: 2020-02-16
categories:
 - study
tags:
 - leetcode
---

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

*Follow up:*

Could you solve it without converting the integer to a string?

:::tip

- [problem](https://leetcode.com/problems/palindrome-number/)
- [article](https://leetcode.com/articles/palindrome-number/)
:::

<!-- more -->

## Solution

### Convert to String & Compare Chars

We perform $O(1)$ per digit and there are $O(\log n)$ digits in total.

We use a string to store $O(\log n)$ digits so space is $O(\log n)$.

Complexity:

- Time: $O(\log n)$
- Space: $O(\log n)$

```python
def isPalindrome(self, x: int) -> bool:
    if x<0 or (x>10 and x%10==0): return False
    # convert int to str
    s = str(x)
    l = 0
    r = len(s)-1
    while l<r:
        # compare 1st and last digit
        if s[l]!=s[r]:
            return False
        else:
            l += 1
            r -= 1
    return True
```

### 1-line Solution

Why should I do the char comparison in a while loop myself? Leave it to `::` in Python!

Complexity:

- Time: $O(\log n)$
- Space: $O(\log n)$

```python
def isPalindrome(self, x: int) -> bool:
    return str(x) == str(x)[::-1]
```

---

The [*follow up:*](#follow-up) says:

> Could you solve it without converting the integer to a string?

Let's just do vanilla int comparison then.

### Revert an Integer & Compare Ints

We perform $O(1)$ per digit and there are $O(\log n)$ digits in total.

There is no string initialized so space is constant.

Complexity:

- Time: $O(\log n)$
- Space: $O(1)$

```python
def isPalindrome(self, x: int) -> bool:
    if x<0 or (x!=0 and x%10==0): return False
    ri = 0
    while ri<x:
        ri = ri*10 + x%10
        x //= 10
    # When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
    # For example, when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
    # since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
    return ri==x or ri//10==x
```
