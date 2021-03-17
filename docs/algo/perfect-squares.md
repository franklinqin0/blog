---
title: Perfect Squares
diff: medium
tags:
  - Math
  - DP
  - DFS
---

<img class="medium-zoom" src="/algo/perfect-squares.png" alt="https://leetcode.com/problems/perfect-squares">

## Import

```py
from math import sqrt
```

## Solution

::: details TLE

### Brute Force

Exponential runtime. TLE on `55`.

```py
def numSquares(self, n: int) -> int:
    square_nums = [i**2 for i in range(1, int(sqrt(n))+1)]

    def minNumSquares(k: int) -> int:
        if k in square_nums:
            return 1
        min_num = sys.maxsize
        # find the minimal value among all possible solutions
        for square in square_nums:
            if k < square:
                break
            min_num = min(min_num, minNumSquares(k-square) + 1)
        return min_num

    return minNumSquares(n)
```

### Memoized DP - Top Down

```py
def numSquares(self, n: int) -> int:
    square_nums = [i**2 for i in range(1, int(sqrt(n))+1)]
    memo = [sys.maxsize for _ in range(n+1)]
    memo[0] = 0

    def minNumSquares(k: int) -> int:
        if k in square_nums:
            memo[k] = 1
        if memo[k] < sys.maxsize:
            return memo[k]
        # find the minimal value among all possible solutions
        for square in square_nums:
            if k < square:
                break
            memo[k] = min(memo[k], minNumSquares(k-square) + 1)
        return memo[k]

    return minNumSquares(n)
```

:::

### Memoized DP - Bottom Up

$$
\text{numSquares}(n) = \min \Big(\text{numSquares(n-k) + 1}\Big) \qquad \forall k \in {\text{square numbers}}
$$

::: theorem Complexity
time: $O(n\cdot\sqrt{n})$  
space: $O(n)$
:::

```py
def numSquares(self, n: int) -> int:
    square_nums = [i**2 for i in range(1, int(sqrt(n))+1)]
    dp = [sys.maxsize for _ in range(n+1)]
    dp[0] = 0

    for i in range(1, n+1):
        for square in square_nums:
            if i < square:
                break
            dp[i] = min(dp[i], dp[i-square] + 1)

    return dp[-1]
```

### Greedy Enumeration

::: theorem Complexity
time: $O(\frac{\sqrt{n}^{h+1} - 1}{\sqrt{n}-1}) = O(n^{\frac{h}{2}})$  
space: $O(\sqrt{n})$
:::

```py
def numSquares(self, n: int) -> int:
    square_nums = set(i**2 for i in range(1, int(sqrt(n))+1))

    def is_divided_by(n, cnt):
        """
        return: true if "n" can be decomposed into "count" number of perfect square numbers.
        e.g. n=12, count=3:  true.
                n=12, count=2:  false
        """
        if cnt == 1:
            return n in square_nums

        for square_num in square_nums:
            remainder = n - square_num
            if is_divided_by(remainder, cnt-1):
                return True
        return False

    for cnt in range(1, n+1):
        if is_divided_by(n, cnt):
            return cnt
```

### BFS

Use `set` instead of `list` for `queue` to eliminate the redundancy.

::: theorem Complexity
time: $O(\frac{\sqrt{n}^{h+1} - 1}{\sqrt{n} - 1} ) = O(n^{\frac{h}{2}})$  
space: $O\Big((\sqrt{n})^h\Big) = O(n^{\frac{h}{2}})$
:::

```py
def numSquares(self, n: int) -> int:
    square_nums = [i**2 for i in range(1, int(sqrt(n))+1)]
    level = 0
    queue = {n}

    while queue:
        level += 1
        next_queue = set()
        for remainder in queue:
            for square_num in square_nums:
                if remainder == square_num:
                    return level # node found
                elif remainder < square_num:
                    break
                else:
                    next_queue.add(remainder - square_num)
        queue = next_queue

    return level
```

### Math

In 1770, Lagrange's _four-square theorem_(or _Bachet's conjecture_) states that every natural number can be represented as the sum of four integer squares.

$$p=a_{0}^{2}+a_{1}^{2}+a_{2}^{2}+a_{3}^{2} \qquad \text{where } a_{0}, a_{1}, a_{2}, a_{3} \text{ are integers}$$

In 1797, Gauss–Legendre _three-square theorem_ states that $n$ is a sum of three squares precisely when $n$ is not of the form $4^{k}(8m+7)$ for any nonnegative integers $k$, $m$:

$$n \ne 4^{k}(8m+7) \iff n = a_{0}^{2}+a_{1}^{2}+a_{2}^{2}$$

So here is our strategy:

1. Check if `n` is of the form $4^{k}(8m+7)$. If yes, return $4$
2. Otherwise, check if `n` is a perfect square, or a sum of $2$ perfect squares
3. Else, `n` is a sum of $3$ perfect squares

```py
def isSquare(self, n: int) -> bool:
    sq = int(sqrt(n))
    return sq*sq == n

def numSquares(self, n: int) -> int:
    # four-square and three-square theorems
    while (n & 3) == 0:
        n >>= 2      # reducing the 4^k factor from number
    if (n & 7) == 7: # mod 8
        return 4

    if self.isSquare(n):
        return 1
    # check if the number can be decomposed into sum of two squares
    for i in range(1, int(n**(0.5)) + 1):
        if self.isSquare(n - i*i):
            return 2
    # bottom case from the three-square theorem
    return 3
```
