---
title: Median of Two Sorted Arrays
date: 2020-02-16
categories:
 - study
tags:
 - leetcode
---

There are two sorted arrays `nums1` and `nums2` of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be $O(\log (m+n))$.

You may assume `nums1` and `nums2` cannot be both empty.

:::tip

- [problem](https://leetcode.com/problems/median-of-two-sorted-arrays/)
- [article](https://leetcode.com/articles/median-of-two-sorted-arrays/)
:::

<!-- more -->

## Solution

This problem is too hard for me now. Will come back later.

### Binary Search

The following solution uses **binary search** to reach a runtime complexity $O(\log\min(m+n))$.

```python
def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
    m,n = len(nums1), len(nums2)
    # ensure that nums1 is longer than nums2
    if (m > n):
        nums1, nums2 = nums2, nums1
        m,n = n,m

    low, high = 0, m
    half_len = (m+n+1)//2
    while (low <= high):
        # binary search
        pos1 = (low + high)//2
        # pos1 + pos2 == half_len
        pos2 = half_len - pos1

        # edge cases when position is at beginning/end of array
        max_left1 = -1e9 if pos1==0 else nums1[pos1-1]
        min_right1 = 1e9 if pos1==m else nums1[pos1]
        max_left2 = -1e9 if pos2==0 else nums2[pos2-1]
        min_right2 = 1e9 if pos2==n else nums2[pos2]

        # equal sign is IMPT!
        if (max_left1<=min_right2 and max_left2<=min_right1):
            max_left = max(max_left1, max_left2)
            min_right = min(min_right1, min_right2)
            if ((m+n)%2 == 0):
                return (max_left + min_right)/2
            else:
                return max_left
        # update high and low by pos1, not pos2
        elif (max_left1>min_right2):
            high = pos1 - 1
        else:
            low = pos1 + 1
    # should not reach here
    raise Exception("unexpected error, may be caused by input")
```

### Find `K`th Element's Special Case

don't understand this:

https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/2755/9-lines-O(log(min(mn)))-Python

Could only do this in C++: https://www.geeksforgeeks.org/k-th-element-two-sorted-arrays/

??? too hard, will do this again

From https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/2767/Python-solution-116ms 

```python
def findMedianSortedArrays(self, A: List[int], B: List[int]) -> float:
    def kthSmall(A, B, i1, i2, k):
        lenA, lenB = len(A), len(B)
        if i1 >= lenA: return B[k - 1]
        if i2 >= lenB: return A[k - 1]
        if k == 1: return min(A[i1], B[i2])
        if lenA - i1 > lenB - i2: return kthSmall(B, A, i2, i1, k)
        pa = min(lenA - i1, k // 2)
        pb = k - pa
        return kthSmall(A, B, i1 + pa, i2, pb) if A[i1 + pa - 1] < B[i2 + pb - 1] else kthSmall(A, B, i1, i2 + pb, pa)
    lenAB = len(A) + len(B)
    return kthSmall(A, B, 0, 0, lenAB // 2 + 1) if lenAB % 2 else 0.5 * (kthSmall(A, B, 0, 0, lenAB // 2) + kthSmall(A, B, 0, 0, lenAB // 2 + 1))
```
