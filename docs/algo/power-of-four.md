---
title: Power of Four
diff: easy
tags:
  - Math
  - Bit
related:
  - power-of-two
  - power-of-three
  - number-of-1-bits
---

<img class="medium-zoom" src="/algo/power-of-four.png" alt="https://leetcode.com/problems/power-of-four">

## Solution

### Vanilla Iteration

Could also do in recursion instead of while loop but omitted.

We could either increase or decrease w/ $O(\log n)$ time and constant space.

#### Increase

We could increase `acc` till it's equal to or larger than `n`.

```py
def isPowerOfFour(self, n: int) -> bool:
    if n < 1:
        return False
    elif n == 1:
        return True
    acc = 1
    while acc < n:
        acc *= 4
        if acc == n:
            return True
    return False
```

#### Decrease

We could decrease `n` till it's equal to or smaller than `1`.

```py
def isPowerOfFour(self, n: int) -> bool:
    if n < 1:
        return False
    while n>1:
        n /= 2
    return n == 1
```

## Follow Up

::: theorem
Could you solve it without loops/recursion?
:::

### Math

If `n` is a power of 4: $n = 4^x$, then $x = \log_4 n = \frac{1}{2}\log_2 n$. So we simply check if $\log_2 n$ is even.

::: theorem Complexity
time: $O(\log n)$  
space: $O(1)$
:::

```py
def isPowerOfFour(self, n: int) -> bool:
    return n > 0 and math.log2(n) % 2 == 0
```

### Bit Manipulation

First check if `n` is a power of 2 (necessary condition). Further, `n` would have `1` at an even position, such as `0001` or `0100`. So `n & 1010...10` would yield a 0. Note that 32-bit `1010...10` would be `aaaaaaaa` in hex.

::: theorem Complexity
time: $O(\log n)$  
space: $O(1)$
:::

```py
def isPowerOfFour(self, n: int) -> bool:
    return n > 0 and n & (n-1) == 0 and n & 0xaaaaaaaa == 0
```

or instead of `0xaaaaaaaa`, `n & 0x55555555` would be non-zero:

```py
def isPowerOfFour(self, n: int) -> bool:
    return n > 0 and !(n & (n-1)) and (n & 0x55555555)
```

### Modular Arithmatic

Also check if `n` is a power of 2.

consider both cases $x = 2k$ and $x = 2k + 1$, and to compute $n$ modulo after division by 3:

$2^{2k} \mod 3 = 4^k \mod 3 = (3 + 1)^k \mod 3 = (3 + 1)*(3 + 1)^{k-1} \mod 3$
$= 3*(3+1)^{k-1}\mod 3 + (3+1)^{k-1}\mod 3 = (3+1)^{k-1}\mod 3 = ... = 1$

$2^{2k + 1} \mod 3 = 2 \times 4^k \mod 3 = 2*((3 + 1)^k \mod 3) = 2$

```py
def isPowerOfFour(self, n: int) -> bool:
    return n > 0 and n & (n - 1) == 0 and n % 3 == 1
```

### Integer Limitation

In `__init__` method calculate all powers of 4 smaller than $2^{31} - 1$.

```py
class Solution:
    def __init__(self):
        max_int = 2**31-1
        self.powerOfFour = [1,4]
        while self.powerOfFour[-1] < max_int/4:
            self.powerOfFour.append(self.powerOfFour[-1]*4)

    def isPowerOfFour(self, n: int) -> bool:
        return n > 0 and n in self.powerOfFour
```
