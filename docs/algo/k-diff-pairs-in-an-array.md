---
title: K-diff Pairs in an Array
diff: medium
tags:
  - Array
  - Hash Table
  - Binary Search
  - Sort
---

<img class="medium-zoom" src="/algo/k-diff-pairs-in-an-array.png" alt="https://leetcode.com/problems/k-diff-pairs-in-an-array">

## Solution

Could also do brute force or two pointers (needs sorting), but the following is linear time.

### HashMap

```py
from collections import Counter

class Solution:
    def findPairs(self, nums: List[int], k: int) -> int:
        map = Counter(nums)
        res = 0
        if k == 0:
            for i in map:
                if map[i] > 1: res += 1
        elif k > 0:
            for i in map:
                if map[i+k] >= 1: res += 1
        return res
```
