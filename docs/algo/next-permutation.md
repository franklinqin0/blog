---
title: Next Permutation
diff: medium
tags:
  - Array
---

<img class="medium-zoom" src="/algo/next-permutation.png" alt="https://leetcode.com/problems/next-permutation">

## Solution

<img src="https://assets.leetcode.com/static_assets/media/original_images/31_Next_Permutation.gif" alt="Next Permutation animation" width=100% class="medium-zoom">

::: theorem Complexity
time: $O(n)$ (worst case: only two scans of the whole array are needed)  
space: $O(1)$ (all operations are in place)
:::

```py
def nextPermutation(self, nums: List[int]) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    # keep decrementing index until we found the pair a[i] and a[i−1] where a[i] > a[i−1]
    n = len(nums)
    i = n - 1
    while i >= 1 and nums[i-1] >= nums[i]:
        i -= 1
    if i >= 1:
        # find the smallest elt greater than nums[i-1]
        j = n - 1
        while nums[j] <= nums[i-1]:
            j -= 1
        # swap nums[i-1] and nums[j]
        nums[i-1], nums[j] = nums[j], nums[i-1]
    # reverse nums[i:]
    nums[i:] = nums[i:][::-1]
```
