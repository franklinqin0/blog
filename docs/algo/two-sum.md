---
title: Two Sum
tags:
  - Array
  - Hash Table
  - Two Pointers
related:
  - 3sum
---

<img class="medium-zoom" src="/algo/two-sum.png" alt="https://leetcode.com/problems/two-sum">

## Solution

Using hashmap takes $O(n)$ time whereas sorting takes $O(\log n)$ time.

### Two-pass HashMap

The 1st for loop stores mappings from `val` to `idx` in HashMap `hashmap`, and the 2nd for loop checks if complement exists in for loop.

Note: need to check `idx!=hashmap[complement]` in 2nd for loop; otherwise fail on text case:

```py
nums = [3,2,4]
target = 6
```

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

where $n$ is the length of `nums`.

```py
def twoSum(self, nums: List[int], target: int) -> List[int]:
    hashmap = {}
    # store val->idx in hashmap
    for idx, val in enumerate(nums):
        hashmap[val] = idx
    # for each num, check if target-num exists in hashmap
    for idx, val in enumerate(nums):
        complement = target-val
        if complement in hashmap and idx != hashmap[complement]:
            return [idx, hashmap[complement]]
    return [-1, -1]
```

### One-pass HashMap

Compared w/ [two-pass HashMap](#two-pass-hashmap), this solution omits the 1st for loop to store all mappings on `hashmap`.

Note:

- the `return` order is reversed, as the `complement` is later seen than `val`
- `idx!=hashmap[complement]` condition to return is no longer needed because it's **always true** in a single for loop

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def twoSum(self, nums: List[int], target: int) -> List[int]:
    hashmap = {}
    for idx, val in enumerate(nums):
        complement = target - val
        if complement in hashmap:
            return [hashmap[complement], idx]
        hashmap[val] = idx
    return [-1, -1]
```

### Sort

Create `nums_sorted` to sort `nums` and store mappings from `val` to `idx` in `List[(int, int)]` format. Then use two pointers to search for matching indices.

::: theorem Complexity
time: $O(n\log n)$  
space: $O(n)$
:::

```py
def twoSum(self, nums: List[int], target: int) -> List[int]:
    # store val->idx in List[(int, int)]
    nums_sorted = []
    for idx, val in enumerate(nums):
        nums_sorted.append((val,idx))
    # sort
    nums_sorted.sort(key=lambda elt: elt[0])
    # two pointers
    left, right = 0, len(nums)-1
    while left < right:
        sm = nums_sorted[left][0] + nums_sorted[right][0]
        if sm < target:
            left += 1
        elif sm > target:
            right -= 1
        else:
            return sorted([nums_sorted[left][1], nums_sorted[right][1]])
    return [-1, -1]
```
