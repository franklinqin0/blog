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

- time: $O(n^m)$
- space: $O(n)$

```py
def wordBreak(self, s: str, wordDict: List[str]) -> bool:
    def dfs(s, start, dct):
        if start == len(s):
            return True
        for word in dct:
            n = len(word)
            if start + n > len(s):
                continue
            if s[start: start + n] != word:
                continue
            if dfs(s, start + n, dct):
                return True
        return False
    return dfs(s, 0, wordDict)
```

### DFS w/ Memoization

Complexity:

- time: $O(nm)$
- space: $O(n)$

```py
def wordBreak(self, s: str, wordDict: List[str]) -> bool:
    def dfs(s, start, dct, memo):
        if start == len(s):
            return True
        if memo[start] != None:
            return memo[start]
        for word in dct:
            n = len(word)
            if start + n > len(s):
                continue
            if s[start: start + n] != word:
                continue
            if dfs(s, start + n, dct, memo):
                memo[start] = True
                return True
        memo[start] = False
        return False
    memo = [None] * len(s)
    return dfs(s, 0, wordDict, memo)
```
