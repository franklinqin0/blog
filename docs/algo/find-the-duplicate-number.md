---
title: Find the Duplicate Number
diff: medium
tags:
  - DP
---

<img class="medium-zoom" src="/algo/find-the-duplicate-number.png" alt="https://leetcode.com/problems/find-the-duplicate-number">

## Solution

```py
def findDuplicate(self, nums: List[int]) -> int:
    cnt = Counter(nums)
    return max(cnt, key=cnt.get)
```

## Follow Up
