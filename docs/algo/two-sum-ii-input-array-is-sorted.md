---
title: Two Sum II - Input Array Is Sorted
diff: easy
tags:
  - Array
  - Binary Search
  - Two Pointers
---

<img class="medium-zoom" src="/algo/two-sum-ii-input-array-is-sorted.png" alt="https://leetcode.com/problems/two-sum-ii-input-array-is-sorted">

## Solution

### Two Pointers

This is the best and most straightforward solution.

Complexity:

- time: $O(n)$
- space: $O(1)$

```py
def twoSum(self, nums: List[int], target: int) -> List[int]:
    left, right = 0, len(nums)-1
    while left<right:
        sum = nums[left] + nums[right]
        if sum < target:
            left += 1
        elif sum > target:
            right -= 1
        else:
            return [left + 1, right + 1]
    return [-1, -1]
```

### Dictionary

Like [one-pass HashMap in Two Sum](two-sum.md#one-pass-hashmap), a dictionary is used to store mappings from `val` to `idx`.

Complexity:

- time: $O(n)$
- space: $O(n)$

```py
def twoSum(self, nums: List[int], target: int) -> List[int]:
    dct = {}
    for idx, val in enumerate(nums):
        if target - val in dct:
            return [dct[target - val] + 1, idx + 1]
        dct[val] = idx
    return [-1, -1]
```

### Binary Search

For each `nums[i]`, use binary search to find `target-nums[i]`.

Complexity:

- time: $O(n \log n)$
- space: $O(1)$

Note that this solution has slower runtime than previous ones.

```py
def twoSum(self, nums: List[int], target: int) -> List[int]:
    n = len(nums)

    for i in range(n):
        left, right = i + 1, n - 1
        complement = target-nums[i]
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] < complement:
                left = mid + 1
            elif nums[mid] > complement:
                right = mid - 1
            else:
                return [i + 1, mid + 1]
    return [-1, -1]
```
