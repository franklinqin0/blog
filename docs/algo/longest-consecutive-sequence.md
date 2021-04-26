---
title: Longest Consecutive Sequence
diff: hard
tags:
  - Array
  - Union Find
---

<img class="medium-zoom" src="/algo/longest-consecutive-sequence.png" alt="https://leetcode.com/problems/longest-consecutive-sequence">

## Solution

Let $n$ be the length of the array `nums`.

The brute force $O(n^3)$ solution is omitted.

### Sort

::: theorem Complexity
time: $O(n \log n)$  
space: $O(1)$ (sort is in place)
:::

```py
def longestConsecutive(self, nums: List[int]) -> int:
    if not nums: return 0
    n = len(nums)
    curr_seq = 1
    res = 1
    # sort the sequence in place
    nums.sort()

    for i in range(1, n):
        # eliminate duplicates
        if nums[i] != nums[i-1]:
            # sequence is continued
            if nums[i] == nums[i-1]+1:
                curr_seq += 1
            # start a new sequence
            else:
                res = max(res, curr_seq)
                curr_seq = 1

    return max(res, curr_seq)
```

## Follow up

::: theorem
Could you implement the $O(n)$ solution?
:::

### HashSet

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def longestConsecutive(self, nums: List[int]) -> int:
    res = 0
    hashset = set(nums)

    for num in nums:
        # find the start of sequence
        if num-1 not in hashset:
            curr_num = num
            curr_seq = 1
            # sequence can be continued
            while curr_num+1 in hashset:
                curr_num += 1
                curr_seq += 1
            # update longest consecutive sequence seen so far
            res = max(res, curr_seq)

    return res
```

<!-- TODO: ## Union Find
https://leetcode.com/problems/longest-consecutive-sequence/discuss/1109808/Python-Clean-Union-Find-with-explanation -->
