---
title: Palindromic Substrings
diff: medium
tags:
  - String
  - DP
---

<img class="medium-zoom" src="/algo/palindromic-substrings.png" alt="https://leetcode.com/problems/palindromic-substrings">

## Solution

Let $n$ be the length of the string `s`.

### DP

Let `dp[i][j]` be true if `s[i..j]` is a palindrome.

::: theorem Complexity
time: $O(n^2)$  
space: $O(n^2)$
:::

```py
def countSubstrings(self, s: str) -> int:
    n = len(s)
    dp = [[False for _ in range(n)] for _ in range(n)]
    res = 0

    # base case: single letter substrings
    for i in range(n):
        dp[i][i] = True
        res += 1

    # base case: double letter substrings
    for i in range(n-1):
        dp[i][i+1] = (s[i] == s[i+1])
        res += dp[i][i+1]

    # other cases: substrings of length 3 to n
    for length in range(3, n+1):
        i, j = 0, length-1
        while j < n:
            # the recurrence relation
            dp[i][j] = (dp[i+1][j-1] and (s[i] == s[j]))
            res += dp[i][j]
            i += 1
            j += 1

    return res
```

### Expand around Center

::: theorem Complexity
time: $O(n^2)$  
space: $O(1)$
:::

```py
def countSubstrings(self, s: str) -> int:
    n = len(s)
    res = 0

    def expand_around_center(left, right):
        cnt = 0
        while left>=0 and right<n:
            if s[left] != s[right]:
                break
            cnt += 1
            # expand around the center
            left -= 1
            right += 1
        return cnt

    for i in range(n):
        # odd-length palindromes
        res += expand_around_center(i, i)
        # even-length palindromes
        res += expand_around_center(i, i+1)

    return res
```
