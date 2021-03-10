---
title: Path Sum
diff: easy
tags:
  - Tree
  - DFS
related:
  - path-sum-ii
---

<img class="medium-zoom" src="/algo/path-sum.png" alt="https://leetcode.com/problems/path-sum">

## Definition for a binary Tree Node

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
def hasPathSum(self, root: TreeNode, targetSum: int) -> bool:

    def dfs(node: TreeNode, csum: int) -> bool:
        if not node:
            return False
        csum += node.val
        if not node.left and not node.right and csum == targetSum:
            return True
        return dfs(node.left, csum) or dfs(node.right, csum)

    return dfs(root, 0)
```
