---
title: Target Sum
diff: medium
tags:
  - DFS
  - DP
---

<img class="medium-zoom" src="/algo/target-sum.png" alt="https://leetcode.com/problems/target-sum">

## Solution

Let $n$ be the length of the array `nums` and $total$ be the total sum.

### DFS

#### Exponential Time (TLE)

The exponential runtime wouldn't pass on long `nums`.

```py
# test case
nums = [38,21,23,36,1,36,18,3,37,27,29,29,35,47,16,0,2,42,46,6]
S = 14
```

::: theorem Complexity
time: $O(2^n)$  
space: $O(n)$
:::

```py
def findTargetSumWays(self, nums: List[int], S: int) -> int:
    n = len(nums)
    res = 0

    def calculate(i, csum):
        nonlocal res
        if i == n:
            if csum == S:
                res += 1
        else:
            calculate(i+1, csum+nums[i])
            calculate(i+1, csum-nums[i])

    calculate(0, 0)
    return res
```

#### $O(n \cdot total)$ Time

::: theorem Complexity
time: $O(n \cdot total)$  
space: $O(n \cdot total)$
:::

```py
def findTargetSumWays(self, nums: List[int], S: int) -> int:
    n = len(nums)
    total = sum(nums)
    res = 0
    memo = [[-sys.maxsize for _ in range(total*2+1)] for _ in range(n)]

    def calculate(i, csum):
        if i == n:
            if csum == S:
                return 1
            else:
                return 0
        else:
            if memo[i][csum] > -sys.maxsize:
                return memo[i][csum]

            memo[i][csum] = calculate(i+1, csum+nums[i]) + calculate(i+1, csum-nums[i])
            return memo[i][csum]

    return calculate(0, 0)
```

### DP

`dp[i][j]` represents the number of ways summing previous $i$ elements to $j$.

The recurrence relation is:  
`dp[i][j] = dp[i - 1][j - nums[i]] + dp[i - 1][j + nums[i]]`

or:

`dp[i][j + nums[i]] += dp[i - 1][j]`  
`dp[i][j - nums[i]] += dp[i - 1][j]`

As $j$ can reach $-total$ and $total$, the size of `dp` is $n \times (2 \cdot total + 1)$.

#### $O(n \cdot total)$ Space

::: theorem Complexity
time: $O(n \cdot total)$  
space: $O(n \cdot total)$
:::

```py
def findTargetSumWays(self, nums: List[int], S: int) -> int:
    n = len(nums)
    total = sum(nums)
    if not -total <= S <= total:
        return 0
    dp = [[0 for _ in range(total*2+1)] for _ in range(n)]

    # base case
    dp[0][total+nums[0]] = 1
    dp[0][total-nums[0]] += 1

    for i in range(1, n):
        for j in range(total*2+1):
            if j-nums[i]>=0 and dp[i-1][j-nums[i]]>0:
                dp[i][j] += dp[i-1][j-nums[i]]
            if j+nums[i]<=total*2 and dp[i-1][j+nums[i]]>0:
                dp[i][j] += dp[i-1][j+nums[i]]

    return dp[-1][total+S]
```

#### $O(total)$ Space

::: theorem Complexity
time: $O(n \cdot total)$  
space: $O(total)$
:::

```py
def findTargetSumWays(self, nums: List[int], S: int) -> int:
    n = len(nums)
    total = sum(nums)
    if not -total <= S <= total:
        return 0
    dp = [0 for _ in range(total*2+1)]

    # base case
    dp[total+nums[0]] = 1
    dp[total-nums[0]] += 1

    for i in range(1, n):
        nxt = [0 for _ in range(total*2+1)]
        for j in range(total*2+1):
            if j-nums[i]>=0 and dp[j-nums[i]]>0:
                nxt[j] += dp[j-nums[i]]
            if j+nums[i]<=total*2 and dp[j+nums[i]]>0:
                nxt[j] += dp[j+nums[i]]
        dp = nxt

    return dp[total+S]
```

Use another recurrence relation and reduce the range of $j$ to traverse. Cannot use the previous relation b/c `dp[:nums[i]]` and `dp[total*2+1-nums[i]:]` would never be updated.

```py
def findTargetSumWays(self, nums: List[int], S: int) -> int:
    n = len(nums)
    total = sum(nums)
    if S > total:
        return 0
    dp = [0 for _ in range(total*2+1)]

    # base case
    dp[total+nums[0]] = 1
    dp[total-nums[0]] += 1

    for i in range(1, n):
        nxt = [0 for _ in range(total*2+1)]
        for j in range(nums[i], total*2+1-nums[i]):
            nxt[j-nums[i]] += dp[j]
            nxt[j+nums[i]] += dp[j]
        dp = nxt

    return dp[total+S]
```
