---
title: x to the n
source: LeetCode
diff: easy
tags:
  - Math
  - Binary Search
  - D&C
---

<img class="medium-zoom" src="/algo/powx-n.png" alt="https://leetcode.com/problems/powx-n">

## Solution

Calculate `pow(a,n)`, or $a^n$. Could do in both recursion and iteration.

### Recursion

Complexity:

- time: $O(\log n)$
- space: $O(\log n)$

The following solution actually TLS b/c of highlighted lines, specifically on the following test case:

```py
x = 0.00001
n = 2147483647
```

```py {5,6}
def myPow(self, x: float, n: int) -> float:
    if (n==0): return 1.0
    elif (n<0): return 1/self.myPow(x, -n)
    elif (n%2):
        return self.myPow(x,n//2)*self.myPow(x,n//2)*x
    return self.myPow(x,n//2)*self.myPow(x,n//2)
```

Works after combining duplicate `myPow` calls:

```py
def myPow(self, x: float, n: int) -> float:
    if (n==0): return 1
    elif (n<0): return 1/self.myPow(x, -n)
    elif (n%2):
        return x * self.myPow(x,n-1)
    return self.myPow(x*x,n//2)
```

Or could store the common `half`:

```py
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

- time: $O(\log n)$
- space: $O(1)$

```py
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

## Follow Up

In [this similar LintCode problem](https://www.lintcode.com/problem/fast-power), the modular arithmetic is now added. That is, calculate `pow(a,n,b)`, or $a^n \mod b$.

The corresponding complexities of recursion or iteration are the same.

### Recursion

Highlighted lines fix the `n==0`, `b==1` case such as `3**0%1`:

```py {2,3}
def fastPower(self, a, b, n):
    if b==1:
        return 0
    if n==0:
        return 1
    ### last 4 lines could also be: ###
    # if n==0:
    #     return 1%b
    if n%2:
        return a * self.fastPower(a, b, n-1) % b
    return self.fastPower(a, b, n//2)**2 % b
```

### Iteration

```py
def fastPower(self, a, b, n):
    if b==1:
        return 0
    res = 1
    while n>0:
        if n%2:
            res = res*a %b
            n -= 1
        else:
            a = a*a%b
            n //= 2
    return res%b
```
