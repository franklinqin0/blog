---
title: Subarray Product Less Than K
diff: medium
tags:
  - Binary Search
  - Two Pointers
---

<img class="medium-zoom" src="/algo/subarray-product-less-than-k.png" alt="https://leetcode.com/problems/subarray-product-less-than-k">

## Solution

<!-- ### Binary Search (REDO) -->

### Two Pointers

Every step `right` goes 1 step to the right. `left` is the smallest value so that the product in the window `prod = nums[left] * nums[left + 1] * ... * nums[right]` is less than `k`. The number of subarrays w/ `right` boundary is `right - left + 1` and added to `res`.

Complexity:

- time: $O(n)$
- space: $O(1)$

```py
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k<=1: return 0
        prod = 1
        n = len(nums)
        res = left = 0
        for right, val in enumerate(nums):
            prod *= val
            while prod>=k:
                prod /= nums[left]
                left += 1
            res += right - left + 1
        return res
```
