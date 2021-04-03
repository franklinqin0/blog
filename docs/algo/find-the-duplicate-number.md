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

#### How can we prove that at least one duplicate number must exist in nums?

Proving that at least one duplicate must exist in nums is simple application of the pigeonhole principle. Here, each number in nums is a "pigeon" and each distinct number that can appear in nums is a "pigeonhole". Because there are n+1n+1 numbers are nn distinct possible numbers, the pigeonhole principle implies that at least one of the numbers is duplicated.
