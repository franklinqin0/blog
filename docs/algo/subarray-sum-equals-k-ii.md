---
title: Subarray Sum Equals k II
diff: medium
tags:
  - Array
  - Prefix Sum
  - Hash Table
related:
  - maximum-subarray
  - subarray-sum-equals-k
---

<img class="medium-zoom" src="/algo/subarray-sum-equals-k-ii.png" alt="https://www.lintcode.com/problem/subarray-sum-equals-k-ii">

## Solution

While the previous problem [subarray sum equals k](subarray-sum-equals-k) asks for **total number**, this problems asks for **min size**.

Just as the previous problem, squared time solutions TLE, so we will just explore the **linear time** solution.

### HashMap

Different from [Vanilla HashMap](subarray-sum-equals-k.md#vanilla-hashmap) which stores mappings from prefix sum to count, here we need to store prefix sum to index instead.

Note that `hashmap` is initialized w/ `{0:-1}` to handle the `sum(nums) == k` case.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def subarraySumEqualsKII(self, nums, k):
    n = len(nums)
    hashmap = {0:-1}
    res = sys.maxsize
    csum = 0

    for i in range(n):
        csum += nums[i]
        if csum-k in hashmap:
            res = min(res, i-hashmap[csum-k])
        hashmap[csum] = i
    return res if res!=sys.maxsize else 1
```
