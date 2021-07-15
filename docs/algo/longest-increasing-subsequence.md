---
title: Longest Increasing Subsequence
diff: medium
tags:
  - DP
  - Greedy
  - Binary Search
---

<img class="medium-zoom" src="/algo/longest-increasing-subsequence.png" alt="https://leetcode.com/problems/longest-increasing-subsequence">

## Solution

Let $n$ be the length of the array.

The brute force $O(n^3)$ solution is omitted.

## Follow Up

::: theorem
Could you come up with the $O(n^2)$ solution?
:::

### DP

Let `dp[i]` be the length of longest increasing subsequence ending with `num[i]`.

The state transition is:  
`dp[i] = dp[j] + 1` where $0 \le j < i$ and `num[j] < num[i]`.

That is, add `nums[i]` after the LIS in `dp[0..i-1]`.

::: theorem Complexity
time: $O(n^2)$  
space: $O(n)$
:::

```py
def lengthOfLIS(self, nums: List[int]) -> int:
    n = len(nums)
    dp = [1 for _ in range(n)]

    for i in range(1, n):
        for j in range(i):
            if nums[i] > nums[j] and dp[i] < dp[j] + 1:
                dp[i] = dp[j] + 1

    return max(dp)
```

::: theorem
Could you improve it to $O(n \log n)$ time complexity?
:::

### Greedy Algorithm & Binary Search

To have a longer increasing subsequence, it should increase slower and the append a smaller `num`.

Maintain a monotonically increasing array `gd`, where `gd[:i]` represents the longest increasing subsequence in `nums[:i]`.

When traversing `nums`, if `nums[i] > gd[-1]`, append `nums[i]` to the end of `gd`; o.w., binary search for the first `gd[k]` where `nums[i] > gd[k]`, and update `d[k+1] = nums[i]`.

::: theorem Complexity
time: $O(n \log n)$  
space: $O(n)$
:::

```py
def lengthOfLIS(self, nums: List[int]) -> int:
    gd = []

    for num in nums:
        if not gd or num > gd[-1]:
            gd.append(num)
        else:
            left, right = 0, len(gd)-1
            pos = right
            while left <= right:
                mid = (left + right) // 2
                if gd[mid] >= num:
                    pos = mid
                    right = mid - 1
                else:
                    left = mid + 1
            gd[pos] = num

    return len(gd)
```
