---
title: Partition Equal Subset Sum
diff: medium
tags:
  - DP
  - DFS
related:
  - partition-to-k-equal-sum-subsets
---

<img class="medium-zoom" src="/algo/partition-equal-subset-sum.png" alt="https://leetcode.com/problems/partition-equal-subset-sum">

## Solution

This problem is similar to the $0/1$ Knapsack problem and subset sum decision problem, all of which are NP-complete and cannot be reduced to polynomial runtime, unless $P = NP$.

Let $n$ be the length of the array `nums` and $target$ be the half of total sum.

### Iterative DP

See more at these two LeetCode posts in Chinese: [1](https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/fen-ge-deng-he-zi-ji-by-leetcode-solution) and [2](https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/0-1-bei-bao-wen-ti-xiang-jie-zhen-dui-ben-ti-de-yo).

#### $O(n \cdot target)$ Space

$dp[i][j]$ represents whether there exists a way to select positive integers in $nums[0..i]$ s.t. the sum is equal to $j$.

The base cases are:

- if not select any positive integer, then $j = 0$. For all $0 \le i < n$, $dp[i][0] = \text{true}$
- when $i == 0$, only $nums[0]$ can be selected. So $dp[0][nums[0]]=\text{true}$

For $i>0$ and $j>0$, $dp[i][j]$ has the following two cases:

- if $j \ge nums[i]$, $nums[i]$ can either be selected or not. $dp[i][j]$ is $\text{true}$ if either case is $\text{true}$:
  - if not select `nums[i]`, $dp[i][j] = dp[i-1][j]$
  - if select `nums[i]`, then $dp[i][j] = dp[i-1][j-nums[i]]$
- if $j < nums[i]$, then $nums[i]$ cannot be selected: $dp[i][j] = dp[i-1][j]$

The recurrence relation is:

$$
\begin{cases}
dp[i-1][j]~|~dp[i-1][j-nums[i]], & j \ge nums[i] \\ dp[i-1][j], & j < nums[i]
\end{cases}
$$

Return $dp[n-1][target]$ as the final result.

::: theorem Complexity
time: $O(n \cdot target)$
space: $O(n \cdot target)$
:::

```py
def canPartition(self, nums: List[int]) -> bool:
    n = len(nums)
    if n < 2:
        return False

    total = sum(nums)
    target = total // 2
    mx = max(nums)
    if total & 1 == 1 or mx > target:
        return False

    dp = [[False for _ in range(target+1)] for _ in range(n)]
    for i in range(n):
        dp[i][0] = True

    dp[0][nums[0]] = True
    for i in range(1, n):
        num = nums[i]
        for j in range(1, target+1):
            if j >= num:
                dp[i][j] = dp[i-1][j] or dp[i-1][j-num]
            else:
                dp[i][j] = dp[i-1][j]
        if dp[i][target]:
            return True
    return dp[n-1][target]
```

#### $O(target)$ Space

As `dp` in a iteration is only concerned with `dp` from last iteration, we only need a 1D array to store `dp`.

The recurrence relation now is:
$dp[j] = dp[j]~|~dp[j - nums[i]]$

Note that `j` is traversed in reverse order, b/c o.w. `dp[j - num]` is already updated, and no longer the value from previous iteration.

::: theorem Complexity
time: $O(n \cdot target)$
space: $O(target)$
:::

```py
def canPartition(self, nums: List[int]) -> bool:
    n = len(nums)
    if n < 2:
        return False

    total = sum(nums)
    target = total // 2
    mx = max(nums)
    if total & 1 == 1 or mx > target:
        return False

    dp = [True] + [False] * target
    for num in nums:
        for j in range(target, num - 1, -1):
            dp[j] |= dp[j - num]

    return dp[target]
```

#### Bit Manipulation

Turn `dp` into an int, or a bit array partitioned by each `num`.

Both time and space complexities are the best.

::: theorem Complexity
time: $O(n \cdot target)$  
space: $O(target)$
:::

```py
def canPartition(self, nums: List[int]) -> bool:
    total = sum(nums)
    target = total // 2
    mx = max(nums)
    if total & 1 == 1 or mx > target:
        return False
    dp = 1
    for num in nums:
        dp |= dp << num
    return (dp >> target) & 1 == 1
```

### DFS

#### Vanilla (TLE)

::: theorem Complexity
time: $O(2^n)$  
space: $O(n)$
:::

```py
def canPartition(self, nums: List[int]) -> bool:
    n = len(nums)
    total = sum(nums)
    target = total // 2
    mx = max(nums)
    if total & 1 == 1 or mx > target:
        return False

    def dfs(start, csum):
        if csum > target:
            return False
        if csum == target:
            return True
        for i in range(start, n):
            if dfs(i+1, csum+nums[i]):
                return True
        return False

    return dfs(0, 0)
```

#### Memoization

Add `csum` to `memo` once visited.

::: theorem Complexity
time: $O(n \cdot target)$  
space: $O(n)$
:::

```py
def canPartition(self, nums: List[int]) -> bool:
    n = len(nums)
    total = sum(nums)
    target = total // 2
    mx = max(nums)
    if total & 1 == 1 or mx > target:
        return False
    memo = set()

    def dfs(start, csum):
        if csum > target:
            return False
        if csum == target:
            return True
        if csum in memo:
            return False
        memo.add(csum)
        for i in range(start, n):
            if dfs(i+1, csum+nums[i]):
                return True
        return False

    return dfs(0, 0)
```
