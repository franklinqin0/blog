---
title: Longest Palindromic Subsequence
diff: medium
tags:
  - String DP
related:
  - maximum-depth-of-binary-tree
---

<img class="medium-zoom" src="/algo/longest-palindromic-subsequence.png" alt="https://leetcode.com/problems/longest-palindromic-subsequence">

## Solution

State transition is:  
if `s[i] == s[j]`, `dp[i][j] = dp[i+1][j-1] + 2`  
else, `dp[i][j] = max(dp[i+1][j], dp[i][j-1])`

### Iterative DP - Bottom Up

Only update values in upper matrix, b/c only $i \le j$ makes a valid string.

Iterate through the rows in reverse order, b/c should update `dp` value of shorter string before that of longer string.

::: theorem Complexity
time: $O(n^2)$  
space: $O(n^2)$
:::

```py
def longestPalindromeSubseq(self, s: str) -> int:
    n = len(s)
    dp = [[0 for _ in range(n)] for _ in range(n)]

    for i in reversed(range(n)):
        dp[i][i] = 1
        for j in range(i+1, n):
            if s[i] == s[j]:
                dp[i][j] = dp[i+1][j-1] + 2
            else:
                dp[i][j] = max(dp[i+1][j], dp[i][j-1])

    return dp[0][n-1]
```

### Recursive DP - Top Down

::: theorem Complexity
time: $O(n^2)$  
space: $O(n^2)$
:::

```py
def longestPalindromeSubseq(self, s: str) -> int:
    n = len(s)
    memo = [[None for _ in range(n)] for _ in range(n)]

    def dfs(start, end):
        if memo[start][end] is not None:
            return memo[start][end]

        if start > end:
            memo[start][end] = 0
        elif start == end:
            memo[start][end] = 1
        else:
            if s[start] == s[end]:
                memo[start][end] = dfs(start+1, end-1) + 2
            else:
                memo[start][end] = max(dfs(start+1, end), dfs(start, end-1))
        return memo[start][end]

    return dfs(0, n-1)
```
