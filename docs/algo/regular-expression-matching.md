---
title: Regular Expression Matching
diff: hard
tags:
  - String
  - DP
  - Backtracking
---

<img class="medium-zoom" src="/algo/regular-expression-matching.png" alt="https://leetcode.com/problems/regular-expression-matching">

## Solution

Let $m$ be the length of `s` and $n$ be the length of `p`.

`match(x, y)` checks if `x` and `y` are matched: one is `.` or `x == y`.

$$
f[i][j] = \begin{cases} \text{if~} (p[j] \neq \text{~`*'}) = \begin{cases} f[i - 1][j - 1], & \textit{match}(s[i], p[j])\\ \text{false}, & \text{otherwise} \end{cases} \\ \text{otherwise} = \begin{cases} f[i - 1][j] \text{~or~} f[i][j - 2], & \textit{match}(s[i], p[j-1]) \\ f[i][j - 2], & \text{otherwise} \end{cases} \end{cases}
$$

### 1-liner Cheating

The `\Z` attached regex asks the regex to match the full `s`tring.

```py
import re
def isMatch(self, s: str, p: str) -> bool:
    pattern = re.compile(p+'\Z')
    return pattern.match(s)
```

### Basic Recursion

```py
def isMatch(self, s: str, p: str) -> bool:
    if not p: return not s
    fst_match = s and p[0] in {s[0], '.'}
    if len(p) >= 2 and p[1] == '*':
        return self.isMatch(s, p[2:]) or (fst_match and self.isMatch(s[1:], p))
    else:
        return fst_match and self.isMatch(s[1:], p[1:])
```

### DP

::: theorem Complexity
time: $O(mn)$  
space: $O(mn)$
:::

#### Recursive DP - Top down

```py
def isMatch(self, s: str, p: str) -> bool:
    memo = [[None for _ in range(len(p) + 1)] for _ in range(len(s) + 1)]

    def dp(i, j):
        if memo[i][j] is None:
            if j == len(p):
                res = i == len(s)
            else:
                fst_match = i < len(s) and p[j] in {s[i], '.'}
                if j + 1 < len(p) and p[j+1] == '*':
                    res = dp(i, j+2) or (fst_match and dp(i+1, j))
                else:
                    res = fst_match and dp(i+1, j+1)

            memo[i][j] = res
        return memo[i][j]

    return dp(0, 0)
```

#### Iterative DP - Bottom up

```py
def isMatch(self, s: str, p: str) -> bool:
    dp = [[False for _ in range(len(p) + 1)] for _ in range(len(s) + 1)]
    dp[-1][-1] = True

    for i in range(len(s), -1, -1):
        for j in range(len(p) - 1, -1, -1):
            fst_match = i < len(s) and p[j] in {s[i], '.'}
            if j+1 < len(p) and p[j+1] == '*':
                dp[i][j] = dp[i][j+2] or (fst_match and dp[i+1][j])
            else:
                dp[i][j] = fst_match and dp[i+1][j+1]
    return dp[0][0]
```
