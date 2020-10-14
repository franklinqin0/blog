---
title: Maximum Subarray
source: LeetCode
diff: easy
tags:
  - Array
  - Prefix Sum
  - DP
  - D&C
related:
  - maximum-subarray
  - subarray-sum-equals-k-ii
---

<img class="medium-zoom" src="/algo/maximum-subarray.png" alt="https://leetcode.com/problems/maximum-subarray">

Read more about this problem [on Wikipedia](https://en.wikipedia.org/wiki/Maximum_subarray_problem).

## Solution

The brute force solution would:

- enumerate subarrays in a nested for loop - squared
- calculate sum - constant
- update if current subarray has largest sum - constant

So in total it takes squared time.

### Prefix Max

Pick the **locally optimal move** at each step, and that will lead to the **globally optimal solution**.

Iterate over the array and update at each step:

- current element
- current local maximum sum (at this given point)
- global maximum sum seen so far

Complexity:

- time: $O(n)$
- space: $O(1)$

```py
def maxSubArray(self, nums: List[int]) -> int:
    n = len(nums)
    curr_sum = max_sum = nums[0]

    for num in nums[1:]:
        curr_sum = max(num, curr_sum+num)
        max_sum = max(curr_sum,max_sum)
    return max_sum
```

### DP (Kadane's algorithm)

DP logic:

- if `nums[i-1]>0`, include `i-1`th element
- if `nums[i-1]<=0`, start a new array from `i`th element

Modify the array to track the **current local max sum**, then update the global max sum `res`.

```py
def maxSubArray(self, nums: List[int]) -> int:
    n = len(nums)
    res = nums[0]

    for i in range(1,n):
        if nums[i-1]>0:
            nums[i] += nums[i-1]
        res = max(res, nums[i])
    return res
```

### Divide & Conquer (REDO)

Complexity:

- time: $O(n \log n)$
- space: $O(\log n)$
