---
title: Word Search
diff: medium
tags:
  - Backtracking
---

<img class="medium-zoom" src="/algo/word-search.png" alt="https://leetcode.com/problems/word-search">

## Solution

Let $n$ be the number of rows and $m$ be the number of columns of the board, and $l$ be the length of the word to be matched.

### Backtracking

::: theorem Complexity
time: $O(nm \cdot 3^l)$  
space: $O(nm)$
:::

```py
def exist(self, board: List[List[str]], word: str) -> bool:
    if not board:
        return False
    n = len(board)
    m = len(board[0])
    visited = [[False for _ in range(m)] for _ in range(n)]

    def backtrack(board, word, i, j, visited):
        if len(word) == 0:
            return True
        if i < 0 or i >= n or j < 0 or j >= m\
        or word[0] != board[i][j] or visited[i][j]:
            return False
        visited[i][j] = True
        res = backtrack(board, word[1:], i-1, j, visited)\
        or backtrack(board, word[1:], i+1, j, visited)\
        or backtrack(board, word[1:], i, j-1, visited)\
        or backtrack(board, word[1:], i, j+1, visited)
        if not res:
            visited[i][j] = False
        return res

    for i in range(n):
        for j in range(m):
            if backtrack(board, word, i, j, visited):
                return True
    return False
```
