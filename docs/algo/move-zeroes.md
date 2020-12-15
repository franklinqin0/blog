---
title: Move Zeroes
diff: easy
tags:
  - Array
  - Two Pointers
---

<img class="medium-zoom" src="/algo/move-zeroes.png" alt="https://leetcode.com/problems/move-zeroes">

## Solution

### Two Pointers

Use 2 pointers. The fast pointer `i` iterates `nums`. The slow pointer `non_zero` points to next position of non-zero element.

In the 1st for loop, set `nums[non_zero]` as `nums[i]` if non-zero. In the 2nd for loop, set the elements after `non_zero` to 0.

This method is good if `nums` does not have many zeros.

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def moveZeroes(self, nums: List[int]) -> None:
    n = len(nums)
    non_zero = 0
    for i in range(n):
        if nums[i]!=0:
            nums[non_zero] = nums[i]
            non_zero += 1
    # set the remaining to 0
    for i in range(non_zero,n):
        nums[i] = 0
```

### Improved Two Pointers

We maintain the following invariants:

1. All elements before the slow pointer `non_zero` are non-zeroes
2. All elements between the slow pointer `non_zero` and fast pointer `i` are zeroes

Thus, rather than setting elements after `non_zero` to 0, we could simply swap the zero at `non-zero` and nonzero at `i`.

```py
    def moveZeroes(self, nums: List[int]) -> None:
        n = len(nums)
        non_zero = 0
        for i in range(n):
            if nums[i]!=0:
                nums[non_zero],nums[i] = nums[i],nums[non_zero]
                non_zero += 1
```
