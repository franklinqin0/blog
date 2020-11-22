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

Using HashMap takes $O(n)$ time whereas sorting takes $O(\log n)$ time.

### Two-pass HashMap

The 1st for loop stores mappings from `val` to `idx` in HashMap `hm`, and the 2nd for loop checks if complement exists in for loop.

Note: need to check `idx!=hm[complement]` in 2nd for loop; otherwise fail on text case:

```py
nums = [3,2,4]
target = 6
```

Complexity:

- time: $O(n)$
- space: $O(n)$

where $n$ is the length of `nums`.

```py
def twoSum(self, nums: List[int], target: int) -> List[int]:
    hm = {}
    # store val->idx in hm
    for idx, val in enumerate(nums):
        hm[val] = idx
    # for each num, check if target-num exists in hm
    for idx, val in enumerate(nums):
        complement = target-val
        if complement in hm and idx != hm[complement]:
            return [idx, hm[complement]]
    return [-1, -1]
```

### One-pass HashMap

Compared w/ [two-pass HashMap](#two-pass-hashmap), this solution omits the 1st for loop to store all mappings on `hm`.

Note:

- the `return` order is reversed, as the `complement` is later seen than `val`
- `idx!=hm[complement]` condition to return is no longer needed because it's **always true** in a single for loop

Complexity:

- time: $O(n)$
- space: $O(n)$

```py
def twoSum(self, nums: List[int], target: int) -> List[int]:
    hm = {}
    for idx, val in enumerate(nums):
        complement = target - val
        if complement in hm:
            return [hm[complement], idx]
        hm[val] = idx
    return [-1, -1]
```

### Sort

Create `nums_sorted` to sort `nums` and store mappings from `val` to `idx` in `List[(int, int)]` format. Then use two pointers to search for matching indices.

Complexity:

- time: $O(n\log n)$
- space: $O(n)$

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
