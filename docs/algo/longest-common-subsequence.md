---
title: Longest Common Subsequence
diff: medium
tags:
  - DP
---

<img class="medium-zoom" src="/algo/longest-common-subsequence.png" alt="https://leetcode.com/problems/longest-common-subsequence">

[This problem](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem) is very practical. In Unix utility `diff`, a line of one file is compared w/ that of another. In `git diff`, a line of newer version is compared w/ that of older version. In this problem, we simply compute the common chars of 2 strings.

## Solution

Let $n$ and $m$ be lengths of `text1` and `text2`, respectively.

::: details Initial Wrong Solution

Following is a wrong solution because I didn't consider the case that a subsequence later seen can be longer than a subsequence earlier seen.

This test case failed b/c `p` is before `qr` in shorter `text1` while after `qr` in `text2`.

```py
text1 = "oxcpqrsvwf"
text2 = "shmtulqrypy"
```

```py
def longestCommonSubsequence(self, text1: str, text2: str) -> int:
    lcs = 0
    l = 0
    shorter = text1 if len(text1) <= len(text2) else text2
    longer = text1 if len(text1) > len(text2) else text2
    for i in range(0, len(shorter)):
        # find the shorter ith elt in longer[l:]
        j = longer[l:].find(shorter[i])
        if j!=-1:
            l=j+1
            lcs+=1
    return lcs
```

:::

Thus, this problem should be solved by **DP** (iterative/recursive w/ memoization).

### Iterative DP (squared space)

As explained in [this video](https://youtu.be/NnD96abizww), I construct a matrix to store the _length of longest common subsequence_ seen so far. If the two chars match, `M[i][j]` is `M[i-1][j-1]+1` ; otherwise, it's the max of `M[i-1][j]` and `M[i][j-1]`. At the end of for loop, return `M[-1][-1]`.

Complexity:

- time: $O(nm)$
- space: $O(nm)$

```py
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        n,m = len(text1),len(text2)
        M = [[0] * (m + 1) for _ in range(n + 1)]

        for i in range(1, n+1):
            for j in range(1, m+1):
                if text1[i-1]==text2[j-1]:
                    M[i][j] = M[i-1][j-1]+1
                else:
                    M[i][j] = max(M[i-1][j], M[i][j-1])
        return M[-1][-1]
```

### Iterative DP (linear space)

This is similar to [iterative DP](#iterative-dp), but has less space complexity: smaller matrix **only needs previous row** to calculate current row, so only 2 rows are needed.

Please note that the commented line `M[0],M[1] = M[1],M[0]` doesn't work because Python list is copy **by reference**, not **by value**.

Complexity:

- time: $O(nm)$
- space: $O(\min(n,m))$

```py
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

### Recursive DP (REDO)

- https://leetcode.com/problems/longest-common-subsequence/discuss/436719/Python-very-detailed-solution-with-explanation-and-walkthrough-step-by-step.

- https://leetcode.com/problems/longest-common-subsequence/discuss/398711/ALL-4-ways-Recursion-greater-Top-down-greaterBottom-Up-greater-Efficient-Solution-O(N)-including-VIDEO-TUTORIAL
