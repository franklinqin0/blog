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

## Solution

### Brute Force (TLE)

::: theorem Complexity
time: $O(n^2)$  
space: $O(1)$
:::

```py
def maxSubArray(self, nums: List[int]) -> int:
    n = len(nums)
    res = nums[0]

    for i in range(n):
        csum = nums[i]
        for j in range(i, n):
            if i == j:
                csum = nums[i]
            else:
                csum += nums[j]
            res = max(res, csum)

    return res
```

### Prefix Max

Pick the **locally optimal move** at each step, and that will lead to the **globally optimal solution**.

Iterate over the array and update at each step:

- current element `num`
- current local maximum sum `csum`
  - either start a new array $\rightarrow$ `num`
  - or continue the old array $\rightarrow$ `csum + num`)
- global maximum sum `res`

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def maxSubArray(self, nums: List[int]) -> int:
    n = len(nums)
    csum = res = nums[0]

    for num in nums[1:]:
        csum = max(num, csum + num)
        res = max(res, csum)
    return res
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
