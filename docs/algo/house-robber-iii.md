---
title: House Robber III
diff: medium
tags:
  - Recursion
  - Tree
  - DFS
  - DP
---

<img class="medium-zoom" src="/algo/house-robber-iii.png" alt="https://leetcode.com/problems/house-robber-iii">

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

### DP

If robbing the `node`, the max value is the sum of `node.val`, max value of NOT robbing the left subtree and NOT robbing the right subtree.

If not robbing the `node`, the max value is the sum of max of robbing or NOT robbing the left subtree and the max of robbing or NOT robbing the right subtree.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$ (due to implicit stack space)
:::

```py
def houseRobber3(self, root):
    root_in, root_not_in = self.dfs(root)
    return max(root_in, root_not_in)

def dfs(self, node):
    if not node:
        return (0, 0)
    left_in, left_not_in = self.dfs(node.left)
    right_in, right_not_in = self.dfs(node.right)
    # calculate the values of robbing node
    node_in = node.val + left_not_in + right_not_in
    node_not_in = max(left_in, left_not_in) + max(right_in, right_not_in)

    return (node_in, node_not_in)
```
