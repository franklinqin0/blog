---
title: Diameter of Binary Tree
diff: easy
tags:
  - Tree
  - DFS
---

<img class="medium-zoom" src="/algo/diameter-of-binary-tree.png" alt="https://leetcode.com/problems/diameter-of-binary-tree">

## Definition for a Binary Tree Node

```py
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

## Solution

Let $n$ be the number of nodes in the tree.

### DFS

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def diameterOfBinaryTree(self, root: TreeNode) -> int:
    res = 0

    def longest_path(node):
        if not node:
            return 0
        nonlocal res
        # recursively find the longest path in left and right child
        left_path = longest_path(node.left)
        right_path = longest_path(node.right)

        # update the diameter if left_path + right_path is larger
        res = max(res, left_path + right_path)

        # return the longer one btw left_path and right_path
        # remember to add 1 for the path connecting the node and its parent
        return max(left_path, right_path) + 1

    longest_path(root)
    return res
```
