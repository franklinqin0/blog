---
title: x to the n
date: 2020-02-17
categories:
 - study
tags:
 - leetcode
---

Implement [`pow(x, n)`](http://www.cplusplus.com/reference/valarray/pow/), which calculates x raised to the power n ($x^n$).

Note:

- -100.0 < x < 100.0
- `n` is a 32-bit signed integer, within the range [$−2^{31}$, $2^{31}$ − 1]

:::tip

- [problem](https://leetcode.com/problems/powx-n/)
- [article](https://leetcode.com/articles/powx-n/)
:::

<!-- more -->

### Recursion

Complexity:

- Time: $O(\log n)$
- Space: $O(\log n)$

The following solution actually EXCEEDS TIME LIMIT! Specifically on the following test case:

```python
x = 0.00001
n = 2147483647
```

```python
def myPow(self, x: float, n: int) -> float:
    # recursion
    if (n==0): return 1.0
    elif (n<0): return 1/self.myPow(x, -n)
    elif (n%2):
        return self.myPow(x,n//2)*self.myPow(x,n//2)*x
    return self.myPow(x,n//2)*self.myPow(x,n//2)
```

Works after combining useless `myPow` calls:

```python
def myPow(self, x: float, n: int) -> float:
    # recursion
    if (n==0): return 1
    elif (n<0): return 1/self.myPow(x, -n)
    elif (n%2):
        return x * self.myPow(x,n-1)
    return self.myPow(x*x,n//2)
```

Or could store the common `half`:

```python
def myPow(self, a, b):
    if b == 0: return 1
    if b < 0: return 1.0 / self.myPow(a, -b)
    half = self.myPow(a, b // 2)
    if b % 2 == 0:
        return half * half
    else:
        return half * half * a
```

### Iteration

Complexity:

- Time: $O(\log n)$
- Space: $O(1)$

```python
def myPow(self, x: float, n: int) -> float:
    if (n==0): return 1
    elif (n<0):
        n=-n
        x=1/x
    res = 1
    prod = x
    is_pos = n>0
    while n>0:
        if n%2:
            res = prod*res
        prod *= prod
        n //= 2
    return res
```
