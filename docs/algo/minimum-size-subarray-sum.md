---
title: Minimum Size Subarray Sum
diff: medium
tags:
  - Array
  - Two Pointers
  - Binary Search
---

<img class="medium-zoom" src="/algo/minimum-size-subarray-sum.png" alt="https://leetcode.com/problems/minimum-size-subarray-sum">

## Solution

Iterating right index is slightly easier than iterating left index.

### Iterate Right

```py
def minSubArrayLen(self, s: int, nums: List[int]) -> int:
    n = len(nums)
    csum = 0
    left = 0
    res = sys.maxsize
    for right in range(n):
        csum += nums[right]

        while csum >= s and left < n:
            res = min(res, right - left + 1)
            csum -= nums[left]
            left += 1

    if res == sys.maxsize: return 0
    else: return res
```

### Iterate Left

```py {13}
def minSubArrayLen(self, s: int, nums: List[int]) -> int:
    n = len(nums)
    csum = 0
    right = 0
    res = sys.maxsize
    for left in range(n):
        while csum < s and right < n:
            csum += nums[right]
            right += 1
        if csum >= s:
            res = min(res, right - left)
        csum -= nums[left]
    if res == sys.maxsize: return 0
    else: return res
```
