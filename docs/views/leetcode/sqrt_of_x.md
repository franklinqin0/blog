---
title: Square of `x`
date: 2020-02-14
categories:
 - study
tags:
 - leetcode
---

Implement `int sqrt(int x)`.

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are *truncated* and only the *integer part* of the result is returned.

:::tip

- [problem](https://leetcode.com/problems/sqrtx/)
- [article](https://leetcode.com/articles/sqrtx/)
:::

<!-- more -->

## Solution

There are so many of them! Every one needs some basic math knowledge.

Note: following solution are all from the [article](https://leetcode.com/articles/sqrtx/).

### Pocket Calculator Algorithm

Based on the formula (hard to come up with if haven't seen before):

$\sqrt{x} = e^{\log \frac{1}{2}x}$

Complexity:

- Time: $O(1)$
- Space: $O(1)$

```python
from math import e, log
def mySqrt(self, x):
    if x < 2:
        return x

    left = int(e**(0.5 * log(x)))
    right = left + 1
    return left if right * right > x else right
```

### Binary Search

If $x < 2$, return $x$.

For $x \ge 2$ the square root is always smaller than $\frac{x}{2}$ and larger than 0: $0 < a < \frac{x}{2}$.

Complexity:

- Time: $O(\log N)$
- Space: $O(1)$

```python
def mySqrt(self, x):
    if x < 2:
        return x

    left, right = 2, x // 2

    while left <= right:
        pivot = left + (right - left) // 2
        num = pivot * pivot
        if num > x:
            right = pivot -1
        elif num < x:
            left = pivot + 1
        else:
            return pivot

    return right
```

### Recursion + Bit Shifts

Recursion is based on the formula:

$mySqrt(x) = 2 \times mySqrt(x/4)$

Could continue to optimize by *bit shifts*:

$mySqrt(x)=mySqrt(x> >2)< <1$

```python
def mySqrt(self, x):
    if x < 2:
        return x

    left = self.mySqrt(x >> 2) << 1
    right = left + 1
    return left if right * right > x else right
```

### Newton's Method

[Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method#Square_root_of_a_number) gives the [best runtime asymptotically](https://leetcode.com/articles/Figures/69/cp.png).

The math is deduced below:

$x_{n+1}=x_{n}-\frac{f\left(x_{n}\right)}{f^{\prime}\left(x_{n}\right)}=x_{n}-\frac{x_{n}^{2}-a}{2 x_{n}}=\frac{1}{2}\left(2 x_{n}-\left(x_{n}-\frac{a}{x_{n}}\right)\right)=\frac{1}{2}\left(x_{n}+\frac{a}{x_{n}}\right)$

There are 3 solutions I've found that use Newton's method in different ways.

#### 1st: initialize `sqrt` to `x//2`

Given the fact in [binary search](#binary-search), return `x` if `x < 2`; o.w., `x//2` is an upper bound for $\texttt{int} \sqrt{x}$ and the in the while loop `sqrt` *monotonically* decreases in every iteration.

```python
    def mySqrt(self, x: int) -> int:
        # Newton's method
        if (x<2): return x
        sqrt = x//2
        while not (sqrt*sqrt<=x and (sqrt+1)**2>x):
            sqrt = (sqrt + x//sqrt)//2
        return sqrt
```

#### 2nd: initialize `sqrt` to `x`

In the while loop, `sqrt` *monotonically* decreases in every iteration.

```python
    def mySqrt(self, x: int) -> int:
        # Newton's method
        sqrt = x
        while sqrt**2>x:
            sqrt = (sqrt + x//sqrt)//2
        return sqrt
```

#### 3rd: initialize `y` & `z`

The proof is sinuous and runtime is slower than the previous two solutions.

```python
    def mySqrt(self, x: int) -> int:
        # Newton's method
        y = 1
        z = x
        while (z>y):
            z = (z+y)//2
            y = x//z
        return z
```