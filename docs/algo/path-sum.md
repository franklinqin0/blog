---
title: Path Sum
diff: easy
tags:
  - Tree
  - DFS
---

<img class="medium-zoom" src="/algo/path-sum.png" alt="https://leetcode.com/problems/path-sum">

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
