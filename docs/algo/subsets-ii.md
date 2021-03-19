---
title: Subsets II
diff: medium
tags:
  - Array
  - Backtracking
  - Bit Manipulation
---

<img class="medium-zoom" src="/algo/subsets-ii.png" alt="https://leetcode.com/problems/subsets-ii">

## Solution

This problem follows the [easier one](subsets).

### Binary Sorted Subsets

Say there are only five $2$'s in `nums`, then the following all produce `[2 2]`:

```
2 2 2 2 2
---------
1 1 0 0 0 -> [2 2]
1 0 0 0 1 -> [2 2]
0 1 0 1 0 -> [2 2]
0 0 0 1 1 -> [2 2]
...
```

How do we only take $1$? By observation, there are 3 cases:

1. start w/ $1$'s then followed by $0$'s: `1 1 0...`
2. start w/ $1$ but have $0$'s inbetween: `1 0... 1`
3. start w/ $0$: `0... 1...` or `0... 1... 0...`

To only take the 1st case and eliminate the rest 2 cases' duplicates, see the highlighted area below.

```py {13}
def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
    nums.sort()
    n = len(nums)
    res = []

    for mask in range(1 << n):
        temp = []
        illegal = False
        for i in range(n):
            not_dup = (i==0) or (i>0 and nums[i-1]==nums[i])
            if mask & (1 << i):
                # num[i] is duplicate && the former digit of mask is 0
                if i>0 and nums[i-1]==nums[i] and mask&(1<<(i-1))==0:
                    illegal = True
                    break
                else:
                    temp.append(nums[i])
        if not illegal:
            res.append(temp)

    return res
```

<!-- REDO backtrack and Cascading -->
