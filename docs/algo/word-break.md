---
title: Word Break
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

### Vanilla DFS (TLE)

::: theorem Complexity
time: $O(n^m)$  
space: $O(n)$
:::

```py
def wordBreak(self, s: str, wordDict: List[str]) -> bool:
    def dfs(start):
        if start == len(s):
            return True
        for word in wordDict:
            n = len(word)
            if start + n > len(s):
                continue
            if s[start: start + n] != word:
                continue
            if dfs(start + n):
                return True
        return False
    return dfs(0)
```

### Memoized DFS

::: theorem Complexity
time: $O(nm)$  
space: $O(n)$
:::

```py
def wordBreak(self, s: str, wordDict: List[str]) -> bool:
    def dfs(start):
        if start == len(s):
            return True
        if memo[start] != None:
            return memo[start]
        for word in wordDict:
            n = len(word)
            if start + n > len(s):
                continue
            if s[start: start + n] != word:
                continue
            if dfs(start + n):
                memo[start] = True
                return True
        memo[start] = False
        return False
    memo = [None for _ in range(len(s))]
    return dfs(0)
```
