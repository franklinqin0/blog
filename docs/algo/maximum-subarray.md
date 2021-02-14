---
title: Maximum Subarray
diff: easy
tags:
  - Array
  - Prefix Sum
  - DP
  - D&C
related:
  - subarray-sum-equals-k
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

- current element `num`
- current local maximum sum `num` (whether start a new array $\rightarrow$ `num`, or continue the old array $\rightarrow$ `curr_sum + num`)
- global maximum sum `max_sum`

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def maxSubArray(self, nums: List[int]) -> int:
    n = len(nums)
    curr_sum = max_sum = nums[0]

    for num in nums[1:]:
        curr_sum = max(num, curr_sum + num)
        max_sum = max(max_sum, curr_sum)
    return max_sum
```

### DP (Kadane's algorithm)

DP logic:

- if `nums[i-1] > 0`, include `i-1`th element
- if `nums[i-1] <= 0`, start a new array from `i`th element

Modify the array to track the **current local max sum**, then update the global max sum `res`.

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def maxSubArray(self, nums: List[int]) -> int:
    n = len(nums)
    res = nums[0]

    for i in range(1, n):
        if nums[i-1] > 0:
            nums[i] += nums[i-1]
        res = max(res, nums[i])
    return res
```
