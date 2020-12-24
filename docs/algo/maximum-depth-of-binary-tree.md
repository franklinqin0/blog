---
title: Maximum Depth of Binary Tree
diff: easy
tags:
  - Tree
  - Recursion
  - DFS
---

<img class="medium-zoom" src="/algo/maximum-depth-of-binary-tree.png" alt="https://leetcode.com/problems/maximum-depth-of-binary-tree">

## Definition for a Binary Tree Node

```py
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

## Solution

Both solutions take linear time and space.

### Recursion

Traverses the tree in DFS order.

```py
def maxDepth(self, root: TreeNode) -> int:
    if not root:
        return 0
    else:
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```

### Iteration

`stack` keeps track of nodes to visit next. `maxDepth` is updated when a node is visited.

```py
def maxDepth(self, root: TreeNode) -> int:
    if not root:
        return 0
    maxDepth = 1
    stack = []
    stack.append((root, 1))

    while stack:
        node, depth = stack.pop()
        maxDepth = max(maxDepth, depth)
        if node.left:
            stack.append((node.left, depth + 1))
        if node.right:
            stack.append((node.right, depth + 1))

    return maxDepth
```
