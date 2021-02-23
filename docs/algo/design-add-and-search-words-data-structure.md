---
title: Design Add and Search Words Data Structure
diff: medium
tags:
  - Backtracking
  - DFS
  - Design
  - Trie
related:
  - implement-trie-prefix-tree
---

<img class="medium-zoom" src="/algo/design-add-and-search-words-data-structure.png" alt="https://www.leetcode.com/problems/design-add-and-search-words-data-structure">

## Driver Code

```py
obj = WordDictionary()
obj.addWord(word)
param_2 = obj.search(word)
```

## Solution

Let $h$ be the height and $n$ be the number of nodes of the trie.

See more in [Interview Algorithms](/blog/interview_algo.md#trie).

### Dictionary

::: theorem Complexity
time: $O(h)$ (worst case: $O(n)$, if the input is `.....` $\cdots$, then traverse all nodes)  
space: $O(n)$
:::

```py
from collections import defaultdict
class TrieNode:
    def __init__(self):
        self.children = defaultdict(TrieNode)
        self.is_word = False

class WordDictionary:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        curr = self.root
        for char in word:
            curr = curr.children[char]
        curr.is_word = True

    def search(self, word: str) -> bool:
        def dfs(curr, i):
            if i == len(word):
                return curr.is_word

            if word[i] == '.':
                for child in curr.children:
                    if dfs(curr.children[child], i+1):
                        return True

            if word[i] in curr.children:
                return dfs(curr.children[word[i]], i+1)

            return False

        return dfs(self.root, 0)
```
