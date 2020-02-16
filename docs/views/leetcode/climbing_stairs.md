---
title: Climbing Stairs
date: 2020-02-15
categories:
 - study
tags:
 - leetcode
---

You are climbing a stair case. It takes *n* steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given *n* will be a positive integer.

:::tip

- [problem](https://leetcode.com/problems/climbing-stairs/)
- [article](https://leetcode.com/articles/climbing-stairs/)
:::

<!-- more -->

## Solution

First we need to realize that "each time you can climb 1 or 2 steps" means the result is the sum of ways of the previous two steps.

We will just start from the memoized recursion, rather than brute-force approach.

### Recursion w/ Memoization

This is DP, the *recursive* version.

We could use recursion w/ the memoized array to trade time.

`memo` corresponds to Fibonacci series: 1, 1, 2, 3, 5, 8, 13, 21, ...

Complexity:

- Time: $O(n)$
- Space: $O(n)$

```python
def climbStairs(self, n: int) -> int:

    def cs(i: int, memo) -> int:
        if (memo[i]>0): return memo[i]
        else:
            memo[i] = cs(i-1, memo) + cs(i-2, memo)
            return memo[i]

    memo = [0] * (n+1)
    memo[0] = memo[1] = 1
    return cs(n, memo)
```

### Iteration & Build Up Array

This is DP, the *iterative* version.

Complexity:

- Time: $O(n)$
- Space: $O(n)$

Initialize `arr` to calculate current value based on the sum of previous two, stepwise towards `n`.

```python
def climbStairs(self, n: int) -> int:
    # use an int array to store previous steps
    arr = []
    arr.append(1)
    arr.append(1)
    for i in range(2,n+1):
        arr.append(arr[i-1] + arr[i-2])

    return arr[n]
```

### Fibonacci Number

Complexity:

- Time: $O(n)$
- Space: $O(1)$

Then we realize we don't need any values except the previous two, so just keep `a` and `b`.

This is basically calculating the `n`th Fibonacci number.

```python
def climbStairs(self, n: int) -> int:
    if (n==1): return 1
    a, b = 1, 1
    for i in range(2,n):
        a, b = b, a+b
    return a+b
```

### Matrix Multiplication

Note how to initialize a Python `m` $\times$ `n` matrix: `[[0 for i in range(m)] for j in range(n)]`.

IMPT:
1. Should not do `[[0]*m]*n` since `*` is shallow, not deep, copy
2. Exponentials should remind us of $\log$ runtime

Complexity:

- Time: $O(\log n)$
- Space: $O(1)$

```python
def climbStairs(self, n: int) -> int:
    def pow(a:List[List[int]], n: int) -> int:
        ret = [[1, 0], [0, 1]]
        while (n > 0):
            if ((n & 1) == 1):
                ret = multiply(ret, a)
            n >>= 1
            a = multiply(a, a)
        return ret

    def multiply(a:List[List[int]], b:List[List[int]]) -> List[List[int]]:
        c = [[0, 0], [0, 0]]
        for i in range(2):
            for j in range(2):
                c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j]
        return c

    A = [[1,1], [1,0]]
    return pow(A,n)[0][0]
```

---

There is actually another approach using Fibonacci formula involving *golden ratio* but omitted here.
