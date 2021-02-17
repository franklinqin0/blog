---
title: Subarray Sum Equals k
diff: medium
tags:
  - Array
  - Prefix Sum
  - Hash Table
related:
  - maximum-subarray
  - subarray-sum-equals-k-ii
---

<img class="medium-zoom" src="/algo/subarray-sum-equals-k.png" alt="https://leetcode.com/problems/subarray-sum-equals-k">

## Solution

The brute force solution would:

- enumerate subarrays in a nested for loop ($O(n^2)$)
- calculate sum in a for loop ($O(n)$)
- update if current subarray has largest sum ($O(1)$)

So in total takes $O(n^3)$ time.

### Squared Time Solutions

The following two $O(n^2)$ time solutions would TLE in Python but might pass in other languages, such as C++ and Java.

::: details TLE

#### Prefix Sum (TLE)

Calculate prefix sum in $O(n)$ time beforehand, so that `csum` can be obtained in $O(1)$ time.

::: theorem Complexity
time: $O(n^2)$  
space: $O(n)$
:::

```py
def subarraySum(self, nums: List[int], k: int) -> int:
    n = len(nums)
    cnt = 0

    prefix_sum = [0 for _ in range(n)]
    prefix_sum[0] = nums[0]
    for i in range(1,n):
        prefix_sum[i] = prefix_sum[i-1] + nums[i]

    for i in range(n):
        for j in range(i,n):
            if i==0:
                csum = prefix_sum[j]
            else:
                csum = prefix_sum[j] - prefix_sum[i-1]
            if csum==k:
                cnt += 1
    return cnt
```

#### Cumulative Sum (TLE)

Calculate `csum` cumulatively.

::: theorem Complexity
time: $O(n^2)$  
space: $O(1)$
:::

```py
def subarraySum(self, nums: List[int], k: int) -> int:
    n = len(nums)
    cnt = 0
    for i in range(n):
        csum = 0
        for j in range(i,n):
            csum += nums[j]
            if csum==k:
                cnt += 1
    return cnt
```

:::

### HashMap (linear time)

If `nums[i]` summing to `nums[j]` equals `k`, `prefix_sum[i] == prefix_sum[j] - k`, then we just need to find if satisfying `prefix_sum[i]` has occurred. If so, increase count by occurrences of `prefix_sum[i]`. Use a HashMap to store **mappings from prefix sum to occurrence**.

The following three solutions are all from [this post](https://leetcode.com/problems/subarray-sum-equals-k/discuss/102111/Python-Simple-with-Explanation). The last two using `Counter` are a bit of overhaul and [Vanilla HashMap](#vanilla-hashmap) is good enough.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

#### Vanilla HashMap

```py
def subarraySum(self, nums, k):
    hm, csum, res = {0: 1}, 0, 0
    for num in nums:
        csum += num
        res += hm.get(csum - k, 0)
        hm[csum] = hm.get(csum, 0) + 1
    return res
```

::: details Counter & Accumulate

#### Counter

Use `Counter` from `collections` as a shorthand.

```py
def subarraySum(self, A, K):
    count = collections.Counter()
    count[0] = 1
    ans = su = 0
    for x in A:
        su += x
        ans += count[su-K]
        count[su] += 1
    return ans
```

#### Accumulate

```py
from collections import Counter
from itertools import accumulate

def subarraySum(nums, k):
    total = 0
    count = Counter()
    count[0] += 1
    for acc in accumulate(nums):
        total += count[acc - k]
        count[acc] += 1
    return total
```

:::
