---
title: Two Sum - Unique Pairs
diff: medium
tags:
  - Array
  - Binary Search
  - Two Pointers
---

<img class="medium-zoom" src="/algo/two-sum-unique-pairs.png" alt="https://www.lintcode.com/problem/two-sum-unique-pairs">

## Solution

Note:

- the input array `nums` is not sorted
- remove duplicates
- this test case:

```py
nums = [7, 11, 11, 1, 2, 3, 4]
target = 22
```

### Two Pointers

Sort and then use two pointers to search for pairs.

```py
def twoSum6(self, nums, target):
    nums.sort()
    n = len(nums)
    left, right = 0, n-1
    cnt = 0
    while left < right:
        sm = nums[left] + nums[right]
        if sm < target:
            left += 1
        elif sm > target:
            right -= 1
        else:
            while left < right and nums[left] == nums[left+1]:
                left += 1
            while left < right and nums[right] == nums[right-1]:
                right -= 1
            cnt += 1
            left += 1
            right -= 1
    return cnt
```
