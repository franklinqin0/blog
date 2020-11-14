---
title: Container With Most Water
diff: medium
tags:
  - Array
  - Two Pointers
---

<img class="medium-zoom" src="/algo/container-with-most-water.png" alt="https://leetcode.com/problems/container-with-most-water/">

## Solution

The brute force solution would list all possible pairs of `left` and `right` and takes squared runtime.

### Two Pointers

The key is to take the move inward the index with shorter height, as the shorter height would only make the resulting area smaller, while moving inward might resulting in a larger `min(height[left], height[right])`.

```py
def maxArea(self, height: List[int]) -> int:
    n = len(height)
    left, right = 0, n-1
    res = 0
    while left < right:
        res = max(res, min(height[left], height[right]) * (right - left))
        if height[left] <= height[right]:
            left += 1
        else:
            right -= 1
    return res
```
