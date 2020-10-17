---
title: Word Search
source: LeetCode
diff: medium
tags:
  - Backtracking
---

<img class="medium-zoom" src="/algo/word-search.png" alt="https://leetcode.com/problems/word-search">

## Solution

Let $N$ be the number of cells in the board and $L$ be the length of the word to be matched.

### Backtracking

Complexity:

- time: $O(N \cdot 3^L)$
- space: $O(L)$

```py
def exist(self, board: List[List[str]], word: str) -> bool:
    if not board:
        return False
    visited = [[False for _ in range(len(board[0]))] for _ in range(len(board))]
    for i in range(len(board)):
        for j in range(len(board[0])):
            if self.backtrack(board, word, i, j, visited):
                return True
    return False

def backtrack(self, board, word, i, j, visited):
    if len(word) == 0:
        return True
    if i < 0 or i >= len(board) or j < 0 or j >= len(board[0])\
    or word[0] != board[i][j] or visited[i][j]:
        return False
    visited[i][j] = True
    res = self.backtrack(board, word[1:], i-1, j, visited)\
    or self.backtrack(board, word[1:], i+1, j, visited)\
    or self.backtrack(board, word[1:], i, j-1, visited)\
    or self.backtrack(board, word[1:], i, j+1, visited)
    if not res:
        visited[i][j] = False
    return res
```

See more at [Python backtrack](https://leetcode.com/problems/word-search/discuss/27660/Python-backtrack-solution-with-comments)
