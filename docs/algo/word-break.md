---
title: Word Break
source: LeetCode
diff: medium
tags:
  - DFS
  - DP
related:
  - word-break-ii
---

<img class="medium-zoom" src="/algo/word-break.png" alt="https://leetcode.com/problems/word-break">

## Solution

Let $n$ be the length of `s`, and $m$ be the number of words in `wordDict`.

### DFS (TLE)

Complexity:

- Time: $O(n^m)$
- Space: $O(n)$

```py
def wordBreak(self, s: str, wordDict: List[str]) -> bool:
    def dfs(s, start_idx, dct):
        if start_idx == len(s):
            return True
        for word in dct:
            n = len(word)
            if start_idx + n > len(s):
                continue
            if s[start_idx: start_idx + n] != word:
                continue
            if dfs(s, start_idx + n, dct):
                return True
        return False
    return dfs(s, 0, wordDict)
```

### DFS w/ Memoization

Complexity:

- Time: $O(nm)$
- Space: $O(n)$

```py
def wordBreak(self, s: str, wordDict: List[str]) -> bool:
    def dfs(s, start_idx, dct, memo):
        if start_idx == len(s):
            return True
        if memo[start_idx] != None:
            return memo[start_idx]
        for word in dct:
            n = len(word)
            if start_idx + n > len(s):
                continue
            if s[start_idx: start_idx + n] != word:
                continue
            if dfs(s, start_idx + n, dct, memo):
                memo[start_idx] = True
                return True
        memo[start_idx] = False
        return False
    memo = [None] * len(s)
    return dfs(s, 0, wordDict, memo)
```
