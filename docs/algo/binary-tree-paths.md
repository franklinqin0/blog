---
title: Binary Tree Paths
source: LeetCode
diff: easy
tags:
  - Tree
  - DFS
related:
  -
---

<img class="medium-zoom" src="/algo/binary-tree-paths.png" alt="https://leetcode.com/problems/binary-tree-paths">

## Definition for a Binary Tree Node

```py
class TreeNode(object):
    """ Definition of a binary tree node."""
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
```

## Solution

Complexity:

- time: $O(n)$
- space: $O(n)$ due to implicit stack space

```py
def binaryTreePaths(self, root: TreeNode) -> List[str]:
    res = []

    def dfs(root: TreeNode, path: str):
        if not root:
            return
        if path:
            path += '->'
        path += str(root.val)
        if not root.left and not root.right:
            res.append(path)
            return
        dfs(root.left, path)
        dfs(root.right, path)

    dfs(root, '')
    return res
```
