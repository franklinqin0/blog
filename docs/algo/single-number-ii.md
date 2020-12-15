---
title: Single Number II
diff: medium
tags:
  - Math
  - Hash Table
  - Bit Manipulation
related:
  - single-number
  - single-number-iii
---

## Problem

<img class="medium-zoom" src="/algo/single-number-ii.png" alt="https://www.lintcode.com/problem/single-number-ii">

## Solution

### HashSet

Convert an input array into HashSet and then to compare the tripled sum of the set with the array sum:

$3 \times (a + b + c) - (a + a + a + b + b + b + c) = 2c$

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def singleNumber(self, nums):
    return (3 * sum(set(nums)) - sum(nums)) // 2
```

### HashMap

```py
from collections import Counter
def singleNumber(self, nums):
    hashmap = Counter(nums)

    for k in hashmap.keys():
        if hashmap[k] == 1:
            return k
```

## Follow Up

> Can you solve it using constant space?

We then have to use some clever bit manipulation methods. Both methods below take linear time and constant space.

### Digital Logic

[A good explanation](https://medium.com/@lenchen/leetcode-137-single-number-ii-31af98b0f462) on the following code using digital logic.

```py
def singleNumber(self, nums: List[int]) -> int:
    seen_once = seen_twice = 0

    for num in nums:
        seen_once = ~seen_twice & (seen_once ^ num)
        seen_twice = ~seen_once & (seen_twice ^ num)

    return seen_once
```

### Count Occurrences

If `x` is the single number `res`ult to return, then the bits where `x` are `1` occur `3y+1` times, where $y \ge 0$. The same case happens for `0` bits of `x` but doesn't make a difference on `res` so neglected.

Note that the highlighted line is used in place of the line below for other languages, due to Python's unbound int.

#### Extension

This method can take more than `3` odd duplicates and return single number `res`.

```py {9}
def singleNumber(self, nums: List[int]) -> int:
    res = 0
    for i in range(32):
        cnt = 0
        for j in range(len(nums)):
            if nums[j] & (1 << i) != 0:
                cnt += 1
        res = res | ((cnt % 3) << i)
    # return res
    return res if res in nums else res - 2**32
```

<!-- General algo (REDO): https://leetcode.com/problems/single-number-ii/discuss/43295/Detailed-explanation-and-generalization-of-the-bitwise-operation-method-for-single-numbers -->
