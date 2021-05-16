---
title: Super Egg Drop
diff: hard
tags:
  - Recursion
  - DP
related:
  - drop-eggs
prev: drop-eggs
---

<img class="medium-zoom" src="/algo/super-egg-drop.png" alt="https://leetcode.com/problems/super-egg-drop">

## Solution

See [this video in Chinese](https://youtu.be/mLV_vOet0ss) for perfect explanation on this problem and the previous easier problem [Drop Eggs](drop_eggs).

Let $i$ be the one of `K` eggs, and $j$ be one of the `N` floors.

### Iterative DP (TLE)

The recurrence relation is:

$$dp(i, j) = \min_{1 \le k \le j}\left(\max(dp(i-1, k-1), dp(i, j-k)) \right)$$

#### Explanation on Recurrence Relation

If `i`th egg breaks at `k`th floor, there are `i-1` eggs left and critical floor exists below `k`, so problem is reduced to `res[i-1][k-1]`.

Else, `i`th egg doesn't break and critical floor exists btw `k` and `j`, so problem is reduced to `res[i][j-k]`.

Note:

- plus `1` for initial drop
- `max` takes into account the _worst case_
- `min` takes the number of drops for the best way to drop `i`th egg at optimal `k`th floor

::: theorem Complexity
time: $O(KN^2)$  
space: $O(KN)$
:::

```py
def superEggDrop(self, K, N):
    res = [[sys.maxsize for _ in range(N+1)] for _ in range(K+1)]

    for i in range(1, K+1):
        res[i][0] = 0
        res[i][1] = 1
    for j in range(1, N+1):
        res[1][j] = j
    for i in range(2, K+1):
        for j in range(2, N+1):
            for k in range(1, j+1):
                res[i][j] = min(res[i][j], 1 + max(res[i-1][k-1], res[i][j-k]))
    return res[m][n]
```

### Recursive DP (TLE)

The recursive DP w/ memoization also TLE.

```py
def superEggDrop(self, K, N):
    if N == 0 or N == 1:
        return N
    if K == 1:
        return N
    min = sys.maxsize

    # Consider all droppings from 1st floor to kth floor
    # and return the minimum of these values plus 1
    for x in range(1, N + 1):
        res = 1 + max(self.superEggDrop(K - 1, x - 1), self.superEggDrop(K, N - x))
        if (res < min):
            min = res
    return min
```

### DP w/ Optimality Criterion (REDO)

```py
def superEggDrop(self, K, N):
    # Right now, dp[i] represents dp(1, i)
    dp = range(N+1)

    for k in range(2, K+1):
        # Now, we will develop dp2[i] = dp(k, i)
        dp2 = [0]
        x = 1
        for n in range(1, N+1):
            # Let's find dp2[n] = dp(k, n)
            # Increase our optimal x while we can make our answer better.
            # Notice max(dp[x-1], dp2[n-x]) > max(dp[x], dp2[n-x-1])
            # is simply max(T1(x-1), T2(x-1)) > max(T1(x), T2(x)).
            while x < n and max(dp[x-1], dp2[n-x]) > max(dp[x], dp2[n-x-1]:
                x += 1

            # The final answer happens at this x.
            dp2.append(1 + max(dp[x-1], dp2[n-x]))

        dp = dp2

    return dp[-1]
```

### Math (REDO)

```py
def superEggDrop(self, K, N):
    dp = [[0 for col in range(K + 1)] for row in range(N + 1)]
    m = 0
    while dp[m][K] < N
        m = m + 1
        for i in range(1,K + 1)
            dp[m][i] = dp[m - 1][i - 1] + dp[m - 1][i] + 1
    return m
```
