---
title: Implement Trie Prefix Tree
diff: medium
tags:
  - Design
  - Trie
---

<img class="medium-zoom" src="/algo/implement-trie-prefix-tree.png" alt="https://leetcode.com/problems/implement-trie-prefix-tree">

## Driver Code

```py
obj = Trie()
obj.insert(word)
param_2 = obj.search(word)
param_3 = obj.startsWith(prefix)
```

## Solution

See more in [Interview Algorithms](/blog/interview_algo.md#trie).

### Dictionary

Note that when a key is not present, `defaultdict(TreeNode)`'s `[key]` would return a new `TreeNode`, whereas `.get(key)` would return nothing.

```py
from collections import defaultdict
class TrieNode:
    def __init__(self):
        self.children = defaultdict(TrieNode)
        self.is_word = False

class Trie:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        curr = self.root
        for char in word:
            curr = curr.children[char]
        curr.is_word = True

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        curr = self.root
        for char in word:
            curr = curr.children.get(char)
            if not curr:
                return False
        return curr.is_word

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        curr = self.root
        for char in prefix:
            curr = curr.children.get(char)
            if not curr:
                return False
        return True
```
