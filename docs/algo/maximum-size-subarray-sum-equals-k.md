---
title: Maximum Size Subarray Sum Equals k
diff: medium
tags:
  - Array
  - Hash Table
  - Prefix Sum
---

<img class="medium-zoom" src="/algo/maximum-size-subarray-sum-equals-k.png" alt="https://leetcode.com/problems/maximum-size-subarray-sum-equals-k">

## Solution

### Brute Force

::: theorem Complexity
time: $O(n^2)$  
space: $O(1)$
:::

TLE

```py
class Solution:
    def maxSubArrayLen(self, nums: List[int], k: int) -> int:
        # two pointers
        res = 0
        # lo, hi = 0, 0
        n = len(nums)
        for i in range(n):
            for j in range(i, n+1):
                if sum(nums[i:j]) == k and j - i > res:
                    res = j - i
        return res
```

### Prefix Sum + HashMap

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
class Solution:
    def maxSubArrayLen(self, nums: List[int], k: int) -> int:
        res = 0
        psum = 0
        map = {0: -1}
        # map = {}
        n = len(nums)
        for i in range(n):
            psum += nums[i]

            # if psum == k:
            #     res = i + 1

            if (psum - k) in map:
                res = max(i - map[psum - k], res)

            if psum not in map:
                map[psum] = i

        return res
```