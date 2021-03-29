---
title: Find All Numbers Disappeared in an Array
diff: easy
tags:
  - Array
---

<img class="medium-zoom" src="/algo/find-all-numbers-disappeared-in-an-array.png" alt="https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array">

## Solution

Let $n$ be the length of the array.

### 1-liner Cheating

```py
from collections import Counter
def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
    return Counter(list(range(1,len(nums)+1))) - Counter(nums)
```

### HashMap

The trick is to turn `nums` into a HashMap, w/ mapping btw `(num-1)%n` and whether `num` has occurred.

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
    n = len(nums)
    res = []

    for num in nums:
        # establish a mapping
        nums[(num-1)%n] += n

    for i in range(n):
        # number i+1 was not encountered and not in nums
        if nums[i] <= n:
            res.append(i+1)

    return res
```
