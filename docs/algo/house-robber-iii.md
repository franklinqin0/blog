---
title: Hourse Robber III
diff: medium
tags:
  - Recursion
  - Tree
  - DFS
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

Once the values for whether robbing(or not) left/right subtree are known, we could calculate the values for whether robbing(or not) the root. If robbing the root, then both the left and right subtrees must not be robbed; o.w., sum up the max value of including(or not) the left subtree and max value of including(or not) the right subtree.

Complexity:

- time: $O(n)$
- space: $O(n)$ due to implicit stack space

```py
class Solution:
    def rob(self, root: TreeNode) -> int:
        return max(self.dfs(root))

    def dfs(self, root: TreeNode):
        """Returns root in/not in values."""
        if not root:
            return (0, 0)
        left_in, left_not_in = self.dfs(root.left)
        right_in, right_not_in = self.dfs(root.right)
        # calculate values of robbing root
        root_in = root.val + left_not_in + right_not_in
        root_not_in = max(left_in, left_not_in) + max(right_in, right_not_in)
        return (root_in, root_not_in)
```
