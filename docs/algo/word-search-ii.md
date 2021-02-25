---
title: Word Search II
diff: hard
tags:
  - Backtracking
  - Trie
related:
  - word-search
---

<img class="medium-zoom" src="/algo/word-search-ii.png" alt="https://leetcode.com/problems/word-search-ii">

## Solution

Let $n$ be the number of rows and $m$ be the number of columns of the `board`. Let $w$ be the number of `words` and $l$ be the average length of word to be matched.

<!-- Could also loop [`backtrack` in Word Search](word-search.md#backtracking). Code is omitted here. REDO -->

### Trie

B/c search is done in `backtrack`, no need to implement `search` in `Trie`.

::: tip Complexity
time: $O(wl + nm \cdot 3^wl)$  
space: $O(wl + l) = O(wl)$
:::

```py
from collections import defaultdict
class TrieNode:
    def __init__(self):
        self.children = defaultdict(TrieNode)
        self.is_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        curr = self.root
        for char in word:
            curr = curr.children[char]
        curr.is_word = True

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        n, m = len(board), len(board[0])
        res = []
        trie = Trie()
        root = trie.root
        for word in words:
            trie.insert(word)

        def backtrack(i, j, curr, path):
            if curr.is_word:
                res.append(path)
                curr.is_word = False
            if i<0 or i>=n or j<0 or j>=m:
                return
            temp = board[i][j]
            curr = curr.children.get(temp)
            if not curr:
                return
            board[i][j] = '#'
            backtrack(i+1, j, curr, path+temp)
            backtrack(i-1, j, curr, path+temp)
            backtrack(i, j+1, curr, path+temp)
            backtrack(i, j-1, curr, path+temp)
            board[i][j] = temp

        for i in range(n):
            for j in range(m):
                backtrack(i, j, root, '')

        return res
```
