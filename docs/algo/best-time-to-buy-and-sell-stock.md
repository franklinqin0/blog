---
title: Best Time to Buy and Sell Stock
source: LeetCode
diff: easy
tags:
  - Array
  - Prefix Sum
  - DP
---

<img class="medium-zoom" src="/algo/best-time-to-buy-and-sell-stock.png" alt="https://leetcode.com/problems/best-time-to-buy-and-sell-stock">

## Solution

The brute-force solution w/ $O(n^2)$ time would be to **search for max profit** w/ a nested for loop iterating over **buy and sell dates** and **updating max profit**.

All solutions below have complexities of linear time and constant space.

### Prefix Min

- `max profit`: the difference `price - prefix_min_price`.
- `price`: current price

If current `price` is min so far, update the `prefix_min price` to `price`. Else if the current `price` is a max so far, update `max_profit` to `price - prefix_min price`.

```py
def maxProfit(self, prices: List[int]) -> int:
    prefix_min_price, max_profit = sys.maxsize, 0

    for price in prices:
        if price < prefix_min_price:
            prefix_min_price = price
        elif price - prefix_min_price > max_profit:
            max_profit = price - prefix_min_price
    return max_profit
```

Or could just use `max` and `min` instead of if/else statements.

```py
def maxProfit(self, prices: List[int]) -> int:
    prefix_min_price, max_profit = sys.maxsize, 0

    for price in prices:
        max_profit = max(max_profit, price - prefix_min_price)
        prefix_min_price = min(price, prefix_min_price)
    return max_profit
```

### Suffix Max

Updating `suffix_max_price` rather than the `prefix_min_price` also works in this problem.

```py
def maxProfit(self, prices: List[int]) -> int:
    suffix_max_price, max_profit = -sys.maxsize, 0
    n = len(prices)

    for i in reversed(range(n)):
        max_profit = max(max_profit, suffix_max_price - prices[i])
        suffix_max_price = max(suffix_max_price, prices[i])
    return max_profit
```
