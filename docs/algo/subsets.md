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

There are $2^n$ possibilities, and for each possibility $i$ it takes $n$ operations to add/not add the `nums[i]` element. Hence the time complexity $O(n\cdot 2^n)$.

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

    def backtrack(i):
        if i == n:
            # have to copy temp by value
            res.append(temp[:])
            return
        temp.append(nums[i])
        backtrack(i+1)
        temp.pop()
        backtrack(i+1)

    backtrack(0)
    return res
```

### Binary Sorted Subsets

Each `temp` can be represented as a binary string. If a digit `i` is $1$, `nums[i]` is in; o.w., it's not.

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
