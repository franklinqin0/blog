---
title: Subsets
diff: medium
tags:
  - Array
  - Backtracking
  - Bit Manipulation
---

<img class="medium-zoom" src="/algo/subsets.png" alt="https://leetcode.com/problems/subsets">

## Solution

### Cascading

::: theorem Complexity
time: $O(n\cdot 2^n)$  
space: $O(n\cdot 2^n)$
:::

```py
def subsets(self, nums: List[int]) -> List[List[int]]:
    res = [[]]

    for num in nums:
        res += [subset + [num] for subset in res]

    return res
```

### Backtracking

::: theorem Complexity
time: $O(n\cdot 2^n)$  
space: $O(n)$
:::

```py
def subsets(self, nums: List[int]) -> List[List[int]]:
    n = len(nums)
    res = []
    temp = []

    def backtrack(curr):
        if curr == n:
            res.append(temp[:])
            return
        temp.append(nums[curr])
        backtrack(curr+1)
        temp.pop()
        backtrack(curr+1)

    backtrack(0)
    return res
```

### Lexicographic (Binary Sorted) Subsets

::: theorem Complexity
time: $O(n\cdot 2^n)$  
space: $O(n)$
:::

```py
def subsets(self, nums: List[int]) -> List[List[int]]:
    res = []

    n = len(nums)
    for mask in range(1 << n):
        temp = []
        for i in range(n):
            if mask & (1 << i):
                temp.append(nums[i])
        res.append(temp)

    return res
```
