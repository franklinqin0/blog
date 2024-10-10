---
title: Palindromic Substrings
diff: medium
tags:
  - String
  - DP
  - Manacher
related:
  - longest-palindromic-substring
  - longest-palindromic-subsequence
---

<img class="medium-zoom" src="/algo/palindromic-substrings.png" alt="https://leetcode.com/problems/palindromic-substrings">

## Solution

Let $n$ be the length of the string `s`.

### Brute Force

::: theorem Complexity
time: $O(n^3)$  
space: $O(1)$
:::

TLE

```py
class Solution(object):
    def is_palindrome(self, s):
        for i in range(len(s) // 2):
            if s[i] != s[len(s) - 1 - i]:
                return False
        return True

    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        cnt = 0
        for i in range(len(s)):
            for j in range(i, len(s)):
                if self.is_palindrome(s[i:j+1]):
                    cnt += 1
        return cnt
```

### DP

Let `dp[i][j]` be true if `s[i:j+1]` is a palindrome.

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
            # the state transition
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
        while left >= 0 and right < n:
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

or simply combine the odd and even lengths into one:

```py
def countSubstrings(self, s: str) -> int:
    n = len(s)
    res = 0

    for i in range(2*n-1):
        left = i//2
        right = i//2 + i%2
        while left >= 0 and right < n and s[left]==s[right]:
            left -= 1
            right += 1
            res += 1

    return res
```

### Manacher's Algorithm

Wrote a [LeetCode post](<https://leetcode.com/problems/palindromic-substrings/discuss/1131551/Python-Manacher's-Algorithm-runtime-O(n)-99.22>).

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def countSubstrings(self, s: str) -> int:
    res = 0
    T = '#'.join('^{}$'.format(s))
    n = len(T)
    P = [0 for _ in range(n)]
    C = R = 0
    max_center = 0
    max_len = -1

    for i in range(1, n-1):
        # w/i right boundary, can save time by copying mirror length
        if i < R:
            mirror = 2*C - i
            P[i] = min(R-i, P[mirror])

        # expand around i
        while T[i+(1+P[i])] == T[i-(1+P[i])]:
            P[i] += 1

        # update the center & right
        if i + P[i] > R:
            C = i
            R = i + P[i]

        # update the result so far
        res += (P[i] + 1)//2

    return res
```
