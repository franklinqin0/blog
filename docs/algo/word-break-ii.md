---
title: Word Break II
diff: hard
tags:
  - DFS
  - DP
related:
  - word-break
---

<img class="medium-zoom" src="/algo/word-break-ii.png" alt="https://leetcode.com/problems/word-break-ii">

## Solution

Let $n$ be the length of `s`, and $m$ be the number of words in `wordDict`.

### DFS

Both of the `dfs` methods below work.

::: theorem Complexity
time: $O(nm)$  
space: $O(n)$
:::

```py
def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
    return self.dfs(s, wordDict, {})

def dfs(self, s, wordDict, memo):
    if s in memo: return memo[s]
    if not s: return []
    res = []
    if s in wordDict: res.append(s)
    for i in range(1, len(s)+1):
        if s[:i] not in wordDict: continue
        for sg in self.dfs(s[i:], wordDict, memo):
            res.append(s[:i] + ' ' + sg)
    memo[s] = res
    return res

def dfs(self, s, wordDict, memo):
    if s in memo: return memo[s]
    if not s: return []

    res = []
    for word in wordDict:
        if not s.startswith(word):
            continue
        if len(word) == len(s):
            res.append(word)
        else:
            resultOfTheRest = self.dfs(s[len(word):], wordDict, memo)
            for item in resultOfTheRest:
                item = word + ' ' + item
                res.append(item)
    memo[s] = res
    return res
```
