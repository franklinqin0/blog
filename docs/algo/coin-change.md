---
title: Coin Change
diff: medium
tags:
  - DP
---

<img class="medium-zoom" src="/algo/coin-change.png" alt="https://leetcode.com/problems/coin-change">

## Solution

Both solutions take $O(len(coins) * amount)$ time and $O(amount)$ space.

### Recursive DP - Top down (TLE)

Doesn't work for Python but is good for other PL's.

```py
def coinChange(self, coins: List[int], amount: int) -> int:
    res = [sys.maxsize for _ in range(amount+1)]

    def dfs(i):
        if i == 0:
            return 0
        if i < 0:
            return -1
        if res[i] != sys.maxsize:
            return res[i]
        min_val = sys.maxsize
        for coin in coins:
            temp = dfs(i-coin)
            if temp >= 0:
                min_val = min(1 + temp, min_val)
        if min_val==sys.maxsize:
            return -1
        res[i] = min_val
        return res[i]
    return dfs(amount)
```

### Iterative DP - Bottom up

```py
def coinChange(self, coins: List[int], amount: int) -> int:
    res = [sys.maxsize for _ in range(amount+1)]
    res[0] = 0
    for i in range(1, amount+1):
        for coin in coins:
            if i - coin < 0:
                continue
            res[i] = min(res[i], 1 + res[i-coin])
    if res[-1] == sys.maxsize:
        return -1
    return res[-1]
```
