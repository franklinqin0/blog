---
title: Two Sum
date: 2020-02-13
categories:
 - study
tags:
 - leetcode
---

## Problem

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have ***exactly*** one solution, and you may not use the same element twice.

- [problem](https://leetcode.com/problems/two-sum/)
- [article](https://leetcode.com/articles/two-sum/)

<!-- more -->

## Solution

This problem is the first and most frequent problem on Leetcode, yet involving a straightforward but important data structure: **hashmap**.

### One-pass HashMap

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

### Two-pass HashMap

```java
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    // add all elt to idx mappings to map
    for (int i = 0; i < nums.length; i++) {
        map.put(nums[i], i);
    }
    // search for complement and return
    int i = 0;
    while (i < nums.length) {
        int complement = target - nums[i];
        // need to check if `i` and `complement` are the same elt
        if (map.containsKey(complement) && i != map.get(complement)) {
            return new int[]{i, map.get(complement)};
        } else i++;
    }

    throw new IllegalArgumentException("No two sum solution");
}
```
