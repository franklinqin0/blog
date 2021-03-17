---
title: Perfect Squares
diff: medium
tags:
  - Math
  - DP
  - DFS
---

<img class="medium-zoom" src="/algo/perfect-squares.png" alt="https://leetcode.com/problems/perfect-squares">

## Solution

::: details TLE

### Brute Force

Exponential runtime. TLE on `55`.

```py
from math import sqrt
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
from math import sqrt
def numSquares(self, n: int) -> int:
    square_nums = [i**2 for i in range(1, int(sqrt(n))+1)]
    memo = [sys.maxsize for _ in range(n+1)]
    memo[0] = 0

    def minNumSquares(k: int) -> int:
        if k in square_nums:
            memo[k] = 1
            # return 1
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

### DP

$$
\text{numSquares}(n) = \min \Big(\text{numSquares(n-k) + 1}\Big) \qquad \forall k \in {\text{square numbers}}
$$

::: theorem Complexity
time: $O(n\cdot\sqrt{n})$  
space: $O(n)$
:::

```py
from math import sqrt
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
