---
title: Best Time to Buy and Sell Stock II
diff: easy
tags:
  - Array
  - Greedy
---

<img class="medium-zoom" src="/algo/best-time-to-buy-and-sell-stock-ii.png" alt="https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii">

## Solution

Note that the number of transactions is not limited.

### Greedy

If today's price is higher than yesterday's, then transact. This may not guarantee the least number of transactions, but can for the maximum profit.

Complexity:

- time: $O(n)$
- space: $O(1)$

```py
def maxProfit(self, prices: List[int]) -> int:
    profit = 0
    for i in range(1, len(prices)):
        diff = prices[i] - prices[i-1]
        if diff > 0:
            profit += diff
    return profit
```
