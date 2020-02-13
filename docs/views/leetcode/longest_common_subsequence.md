---
title: Longest Common Subsequence
date: 2020-02-13
categories:
 - study
tags:
 - leetcode
---

Given two strings `text1` and `text2`, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

- [problem](https://leetcode.com/problems/longest-common-subsequence/)

<!-- more -->

## Solution

### Initial Wrong Solution

Following is a wrong solution because I didn't consider the case that a subsequence later seen can be longer than a subsequence earlier seen. The failed test case is :

```
"oxcpqrsvwf"
"shmtulqrypy"
```

Code:

```python
def longestCommonSubsequence(self, text1: str, text2: str) -> int:
    lcs = 0
    l = 0
    shorter = text1 if len(text1) <= len(text2) else text2
    longer = text1 if len(text1) > len(text2) else text2
    for i in range(0, len(shorter)):
        j = longer[l:].find(shorter[i])
        if j!=-1:
            l=j+1
            lcs+=1
    return lcs
```

### DP(Dynamic Programming)

As explained in [this video](https://youtu.be/NnD96abizww), I construct a matrix to store the *length of longest palindrome* seen so far. If the two chars match, `M[i][j]` is `M[i-1][j-1]+1` ; otherwise, it is the max of `M[i-1][j]` and `M[i][j-1]`. At the end of for loop, return `M[-1][-1]`.

Complexity:

- Time: $O(n*m)$
- Space: $O(1)$

where $n$ and $m$ are lengths of `text1` and `text2`, respectively.

```python
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        n,m = len(text1),len(text2)
        M = [[0] * (m + 1) for i in range(n + 1)]

        for i in range(1, n+1):
            for j in range(1, m+1):
                if text1[i-1]==text2[j-1]:
                    M[i][j] = M[i-1][j-1]+1
                else:
                    M[i][j] = max(M[i-1][j], M[i][j-1])
        return M[-1][-1]
```

### DP w/ less space

This is similar to [DP solution above](#dpdynamic-programming), but space complexity is less: smaller matrix only needs previous row to calculate current row, so only 2 rows are needed.

Complexity:

- Time: $O(n*m)$
- Space: $O(1)$

```python
def longestCommonSubsequence(self, text1: str, text2: str) -> int:
    n,m = len(text1),len(text2)
    # find the shorter string
    s = text1 if n<=m else text2
    l = text1 if n>m else text2

    M = [[0]*(len(s)+1) for i in range(2)]

    for i in range(1,len(l)+1):
        for j in range(1,len(s)+1):
            if s[j-1]==l[i-1]:
                M[i%2][j] = M[1-i%2][j-1] + 1
            else:
                M[i%2][j] = max(M[1-i%2][j],M[i%2][j-1])
        # M[0],M[1] = M[1],M[0]
    return M[-1][-1]
```

Please note that the commented line `M[0],M[1] = M[1],M[0]` doesn't work because Python list is copy *by reference*, not *by value*.