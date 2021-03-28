---
title: Sort Colors
diff: medium
tags:
  - Array
  - Two Pointers
  - Sort
---

<img class="medium-zoom" src="/algo/sort-colors.png" alt="https://leetcode.com/problems/sort-colors">

## Solution

### Two Pointers

This problem is basically the same as [Dutch National Flag](/blog/interview_algo.md#dutch-national-flag)

Wrote a [LeetCode post](https://leetcode.com/problems/sort-colors/discuss/1114101/Scheiss-simple-solution-using-Loop-Invariant).

```py
def sortColors(self, nums: List[int]) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    left, right = 0, len(nums)-1
    # inv: nums[left..t-1] are 0's, nums[t..i-1] are undecided, nums[i..j] are 1's, nums[j+1..right] are 2's
    t = left
    i = right + 1
    j = right

    while t<i:
        if nums[i-1] == 0:
            nums[i-1], nums[t] = nums[t], nums[i-1]
            t += 1
        elif nums[i-1] == 1:
            i -= 1
        else:
            nums[i-1], nums[j] = nums[j], nums[i-1]
            i -= 1
            j -= 1
    # post: nums[left..i-1] are 0's, nums[i..j] are 1's, nums[j+1..right] are 2's
```
