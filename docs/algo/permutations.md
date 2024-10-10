---
title: Permutations
diff: medium
tags:
  - DFS
  - Backtracking
---

<img class="medium-zoom" src="/algo/permutations.png" alt="https://leetcode.com/problems/permutations">

## Solution

```py
def permute(self, nums: List[int]) -> List[List[int]]:
    
    n = len(nums)
    def backtrack(lst):
        if len(lst) == n:
            res.append(lst[:])
            return
        for num in nums:
            if num not in lst:
                lst.append(num)
                backtrack(lst)
                lst.pop()
    
    res = []
    backtrack([])
    return res
```

### Backtracking 1

```py
def permute(self, nums: List[int]) -> List[List[int]]:
    res = []

    def dfs(nums, path):
        if not nums:
            res.append(path)
        for i in range(len(nums)):
            dfs(nums[:i] + nums[i+1:], path + [nums[i]])

    dfs(nums, [])
    return res
```

### Backtracking 2

```py
def permute(self, nums: List[int]) -> List[List[int]]:
    res = []
    n = len(nums)

    def dfs(fst):
        # if all integers are used up
        if fst == n:
            res.append(nums[:])
        for i in range(fst, n):
            # place i-th integer first in the current permutation
            nums[fst], nums[i] = nums[i], nums[fst]
            # use next integers to complete the permutations
            dfs(fst + 1)
            # backtrack
            nums[fst], nums[i] = nums[i], nums[fst]

    dfs(0)
    return res
```
