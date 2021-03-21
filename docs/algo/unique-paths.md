---
title: Unique Paths
diff: medium
tags:
  - Array
  - DP
---

<img class="medium-zoom" src="/algo/unique-paths.png" alt="https://leetcode.com/problems/unique-paths">

## Solution

### DP

The recurrence relation is: $dp[i][j] = dp[i-1][j] + dp[i][j-1]$

The base cases are `dp[0][j]` and `dp[i][0]`, which have by default only $1$ path.

::: theorem Complexity
time: $O(mn)$
:::

#### Squared Space $O(mn)$

```py
def uniquePaths(self, m: int, n: int) -> int:
    dp = [[0 for _ in range(n)] for _ in range(m)]
    for j in range(n):
        dp[0][j] = 1
    for i in range(1, m):
        dp[i][0] = 1
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
    return dp[-1][-1]
```

#### Linear Space $O(\min(m, n))$

```py
def uniquePaths(self, m: int, n: int) -> int:
    if m > n: m, n = n, m
    dp = [[0 for _ in range(2)] for _ in range(m)]
    for i in range(m):
        dp[i][0] = 1
    dp[0][1] = 1
    for j in range(1, n):
        for i in range(1, m):
            dp[i][j%2] = dp[i-1][j%2] + dp[i][(j-1)%2]
    return dp[-1][(n-1)%2]
```

### Math

There are in total $m-1 + n-1 = m+n-2$ moves, in which $m-1$ moves are going down and $n-1$ moves are going right. The number of unique paths is thus equal to $m+n-2$ choose $m-1$.

$$\binom{m+n-2}{m-1} = \frac{(m+n-2)!}{(m-1)!(n-1)!} = \frac{(m+n-2)(m+n-3) \cdots n}{(m-1)!}$$

#### 1-liner Cheating

```py
from math import comb
def uniquePaths(self, m: int, n: int) -> int:
    return comb(m+n-2, m-1)
```

#### Calculate by Formula

```py
from math import comb
def uniquePaths(self, m: int, n: int) -> int:
    if m > n: m, n = n, m
    res = 1
    j = n
    for i in range(1, m):
        res *= j / i
        j += 1
    return round(res)
```
