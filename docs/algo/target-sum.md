---
title: Target Sum
diff: medium
tags:
  - DFS
  - DP
---

<img class="medium-zoom" src="/algo/target-sum.png" alt="https://leetcode.com/problems/target-sum">

## Solution

Let $n$ be the length of the array `nums`.

### Vanilla DFS (TLE)

```
[38,21,23,36,1,36,18,3,37,27,29,29,35,47,16,0,2,42,46,6]
14
```

```py
def findTargetSumWays(self, nums: List[int], S: int) -> int:
    n = len(nums)
    cnt = 0

    def calculate(i, csum):
        nonlocal cnt
        if i == n:
            if csum == S:
                cnt += 1
        else:
            calculate(i+1, csum+nums[i])
            calculate(i+1, csum-nums[i])

    calculate(0, 0)
    return cnt
```

<!-- REDO: DP (a lot!) -->
