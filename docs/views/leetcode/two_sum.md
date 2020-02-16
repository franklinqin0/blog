---
title: Two Sum
date: 2020-02-13
categories:
 - study
tags:
 - leetcode
---

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have ***exactly*** one solution, and you may not use the same element twice.

:::tip

- [problem](https://leetcode.com/problems/two-sum/)
- [article](https://leetcode.com/articles/two-sum/)
:::

<!-- more -->

## Solution

This problem is the first and most frequent problem on Leetcode, yet involving a straightforward but important data structure: **hashmap**.

### Two-pass HashMap

The for loop puts all `nums[i], i` key-value pairs into map. The while loop checks for complement `target - nums[i]` and watches out for `nums[i]` and complement being the same element case. At the end of loop, throw an exception.

Complexity:

- Time: $O(n)$
- Space: $O(n)$

where $n$ is the length of `nums`.

```java
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    // add all nums[i]->i mappings to map
    for (int i = 0; i < nums.length; i++) {
        map.put(nums[i], i);
    }
    // search for complement and return
    int i = 0;
    while (i < nums.length) {
        int complement = target - nums[i];
        // need to check if `nums[i]` and `complement` are the same elt
        if (map.containsKey(complement) && i != map.get(complement)) {
            return new int[]{i, map.get(complement)};
        } else i++;
    }

    throw new IllegalArgumentException("No two sum solution");
}
```

### One-pass HashMap

Go thru the `nums` array only once. If complement `target - nums[i]` is contained in the map, return the indices. At the end of loop, throw an exception.

Complexity is the same as [two-pass HashMap](#two-pass-hashmap), but practically should take less time as there is only 1 rather than 2 for loops.

```java
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        // if complement in map already
        // return the complement idx and current idx
        // else, put the current elt
        if (map.containsKey(complement))
            return new int[]{map.get(complement), i};
        map.put(nums[i], i);
    }

    throw new IllegalArgumentException("No two sum solution");
}
```

Equivalent but much shorter solution in Python using function `enumerate`:

```python
def twoSum(self, nums: List[int], target: int) -> List[int]:
    d = {}
    for i, n in enumerate(nums):
        m = target - n
        if m in d:
            return [d[m], i]
        else:
            d[n] = i
```