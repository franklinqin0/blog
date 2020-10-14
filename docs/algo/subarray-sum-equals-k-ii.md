---
title: Subarray Sum Equals k II
source: LintCode
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

Different from previous problem [subarray sum equals k](subarray_sum_equals_k) which asks for **total number**, this problems asks for **min size**.

Similar as previous problem [subarray sum equals k](subarray_sum_equals_k) which fails for squared time, we will just explore the linear time solution.

### HashMap (linear time)

Different from [vanilla HashMap](subarray_sum_equals_k.md#vanilla-hashmap) which stores mappings from prefix sum to count, here we need to store prefix sum to index instead.

Note that HashMap `hm` is initialized w/ `{0:-1}` to handle the `sum(nums)==k` case.

```py
def subarraySumEqualsKII(self, nums, k):
    n = len(nums)
    hm = {0:-1}
    res = sys.maxsize
    csum = 0

    for i in range(n):
        csum += nums[i]
        if csum-k in hm:
            res = min(res, i-hm[csum-k])
        hm[csum] = i
    return res if res!=sys.maxsize else 1
```
