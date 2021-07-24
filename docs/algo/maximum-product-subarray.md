---
title: Maximum Product Subarray
diff: medium
tags:
  - Array
  - DP
---

<img class="medium-zoom" src="/algo/maximum-product-subarray.png" alt="https://leetcode.com/problems/maximum-product-subarray">

## Solution

Let $n$ be the length of the array.

### DP

If array elements are all nonnegative, tracking `max_prod` would be good enough.

Else, `min_prod` is needed and would become the `max_prod` if current element is negative.

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def maxProduct(self, nums: List[int]) -> int:
    n = len(nums)
    max_prod = min_prod = res = nums[0]

    for i in range(1, n):
        if nums[i] < 0:
            max_prod, min_prod = min_prod, max_prod
        max_prod = max(max_prod*nums[i], nums[i])
        min_prod = min(min_prod*nums[i], nums[i])
        res = max(max_prod, res)
    return res
```
