---
title: Path Sum II
diff: medium
tags:
  - Tree
  - DFS
related:
  - path-sum
  - path-sum-iii
---

<img class="medium-zoom" src="/algo/path-sum-ii.png" alt="https://leetcode.com/problems/path-sum-ii">

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
def pathSum(self, root: TreeNode, targetSum: int) -> List[List[int]]:
    res = []

    def dfs(node: TreeNode, csum: int, path: List[int]):
        if not node:
            return

        csum += node.val
        if not node.left and not node.right and csum == targetSum:
            res.append(path[:] + [node.val])
            return

        path.append(node.val)
        dfs(node.left, csum, path)
        dfs(node.right, csum, path)
        path.pop()

    dfs(root, 0, [])
    return res
```
