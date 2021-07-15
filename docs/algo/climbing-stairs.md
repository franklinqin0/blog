---
title: Climbing Stairs
diff: easy
tags:
  - DP
---

<img class="medium-zoom" src="/algo/climbing-stairs.png" alt="https://leetcode.com/problems/climbing-stairs">

## Solution

First we need to realize that "each time you can climb 1 or 2 steps" means the result is **the sum of ways of the previous two steps**.

Brute-force approach would be to recurse by reducing `cs[n]` to `cs[n-1] + cs[n-2]`.

This problem is then equivalent to finding $n$-th **fibonacci number**.

### Recursive DP w/ Memoization

`memo` corresponds to Fibonacci series: $1, 1, 2, 3, 5, 8, 13, 21, \cdots$

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def climbStairs(self, n: int) -> int:

    def cs(i: int, memo) -> int:
        if memo[i] > 0: return memo[i]
        else:
            memo[i] = cs(i-1, memo) + cs(i-2, memo)
            return memo[i]

    memo = [0 for _ in range(n+1)]
    memo[0] = memo[1] = 1
    return cs(n, memo)
```

### Iterative DP w/ Memoization

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

Initialize `arr` to calculate current value based on the sum of previous two, stepwise towards `n`.

```py
def climbStairs(self, n: int) -> int:
    # use an int array to store previous steps
    arr = []
    arr.append(1)
    arr.append(1)
    for i in range(2, n+1):
        arr.append(arr[i-1] + arr[i-2])
    return arr[n]
```

### Fibonacci Number

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

Then we realize we don't need any values except the previous two, so just keep `a` and `b`.

This is basically calculating the $n$-th Fibonacci number.

```py
def climbStairs(self, n: int) -> int:
    if n == 1: return 1
    a, b = 1, 1
    for i in range(2,n):
        a, b = b, a+b
    return a + b
```

### Matrix Multiplication

As $F_{k+1} = F_{k} + F_{k-1}$, we can deduce the state transition between $F_{k}$, $F_{k-1}$ and $F_{k+1}$, $F_{k}$:

$$\begin{bmatrix}1 & 1\\1 & 0\end{bmatrix} \begin{bmatrix}F_{k}\\F_{k-1}\end{bmatrix} = \begin{bmatrix}F_{k} + F_{k-1}\\F_{k}\end{bmatrix} = \begin{bmatrix}F_{k+1}\\F_{k}\end{bmatrix}$$

so we can use matrix multiplication to calculate the $n$-th Fibonacci number in log time:

$$\begin{bmatrix}1 & 1\\1 & 0\end{bmatrix}^n \begin{bmatrix}F_1\\F_0\end{bmatrix} = \begin{bmatrix}1 & 1\\1 & 0\end{bmatrix}^n \begin{bmatrix}1\\1\end{bmatrix} = \begin{bmatrix}F_{n}\\F_{n-1}\end{bmatrix}$$

::: theorem Complexity
time: $O(\log n)$  
space: $O(1)$
:::

```py
def climbStairs(self, n: int) -> int:
    def pow(a:List[List[int]], n: int) -> int:
        """Return matrix `a` to the `n`"""
        ret = [[1, 0], [0, 1]]
        while n > 0:
            if (n & 1) == 1:
                ret = multiply(ret, a)
            n >>= 1
            a = multiply(a, a)
        return ret

    def multiply(a:List[List[int]], b:List[List[int]]) -> List[List[int]]:
        """Return the multiplied matrix of `a` and `b`."""
        c = [[0, 0], [0, 0]]
        for i in range(2):
            for j in range(2):
                c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j]
        return c

    A = [[1, 1], [1, 0]]
    return pow(A,n)[0][0]
```

### Gold Ratio

Using Fibonacci formula involving _golden ratio_ is not recommended as the math formula is hard to remember or deduce.

$$fib_{n}=\frac{1}{\sqrt{5}}\left(\left(\frac{1+\sqrt{5}}{2}\right)^{n+1}-\left(\frac{1-\sqrt{5}}{2}\right)^{n+1}\right)$$

Then take the `int` part of this floating number.

::: theorem Complexity
time: $O(\log n)$ (due to `pow` method)  
space: $O(1)$
:::

```py
def climbStairs(self, n: int) -> int:
    sqrt5 = math.sqrt(5)
    fib_n = pow((1+sqrt5)/2, n+1) - pow((1-sqrt5)/2, n+1)
    return int(fib_n/sqrt5)
```
