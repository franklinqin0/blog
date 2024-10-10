---
title: Power of Three
diff: easy
tags:
  - Math
related:
  - power-of-two
---

<img class="medium-zoom" src="/algo/power-of-three.png" alt="https://leetcode.com/problems/power-of-three">

## Solution

### Vanilla Iteration

Could also do in recursion instead of while loop but omitted.

We could either increase or decrease w/ $O(\log n)$ time and constant space.

#### Increase

We could increase `acc` till it's equal to or larger than `n`.

```py
def isPowerOfThree(self, n: int) -> bool:
    if n < 1:
        return False
    elif n == 1:
        return True
    acc = 1
    while acc < n:
        acc *= 3
        if acc == n:
            return True
    return False
```

#### Decrease

We could decrease `n` till it's equal to or smaller than `1`.

```py
def isPowerOfThree(self, n: int) -> bool:
    if n < 1: return False
    while n > 1:
        n /= 3
    return n == 1
```

## Follow Up

::: theorem
Could you solve it without loops/recursion?
:::

### Modular Arithmatic

In `__init__` method calculate `self.maxPowerOfThree` to be 1162261467, the largest power of 3 smaller than $2^{31} - 1$.

This solution of using `maxPowerOfThree % n` only works for prime `n`'s. Here is the proof.

There exist a $maxPower=p^c q^c$, and a non-prime $n = p^a q^b$, where $a\neq b$. $n$ satisfies condition $maxPower \mod n = 0$ but is not a power of $pq$.

```py
class Solution:
    def __init__(self):
        max_int = 2**31 - 1
        self.maxPowerOfThree = 3
        while self.maxPowerOfThree < max_int/3:
            self.maxPowerOfThree *= 3

    def isPowerOfThree(self, n: int) -> bool:
        return n > 0 and self.maxPowerOfThree % n == 0
```

Or, could calculate `self.maxPowerOfThree` in this way:
$3^{\lceil \log_3 2^{31}-1 \rceil}$

```py
class Solution(object):
    def __init__(self):
        max_int = 2**31 - 1
        from math import log, floor
        self.maxPowerOf3 = int(3**(floor(log(max_int, 3))))
        
    def isPowerOfThree(self, n):
        """
        :type n: int
        :rtype: bool
        """
        if n < 1:
            return False
        return self.maxPowerOf3 % n == 0
```

### Integer Limitation

In `__init__` method calculate all powers of 3 smaller than $2^{31} - 1$.

```py
class Solution:
    def __init__(self):
        max_int = 2**31 - 1
        self.powerOfThree = [1,3]
        while self.powerOfThree[-1] < max_int/3:
            self.powerOfThree.append(self.powerOfThree[-1]*3)

    def isPowerOfThree(self, n: int) -> bool:
        return n>0 and n in self.powerOfThree
```
