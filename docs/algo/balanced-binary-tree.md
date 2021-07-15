---
title: Balanced Binary Tree
diff: easy
tags:
  - Tree
  - DFS
  - Recursion
related:
  - maximum-depth-of-binary-tree
---

<img class="medium-zoom" src="/algo/balanced-binary-tree.png" alt="https://leetcode.com/problems/balanced-binary-tree">

## Solution

### Top Down

::: theorem Complexity
time: $O(n \log n)$  
space: $O(h)$ (worst case: $O(n)$, traverse all nodes)
:::

```py
def isBalanced(self, root: TreeNode) -> bool:
    def depth(root: TreeNode) -> int:
        if not root:
            return 0
        temp = 1 + max(depth(root.left), depth(root.right))
        return temp

    def balanced(root) -> bool:
        if not root: return True
        return abs(depth(root.left) - depth(root.right)) < 2 and balanced(root.left) and balanced(root.right)

    return balanced(root)
```

### Bottom Up (REDO)

Return whether or not the tree at `root` is balanced while also returning the tree's height.

::: theorem Complexity
time: $O(n)$  
space: $O(h)$ (worst case: $O(n)$, traverse all nodes)
:::

```py
def isBalanced(self, root: TreeNode) -> bool:
    def balanced(root: TreeNode) -> (bool, int):
        # An empty tree is balanced and has height -1
        if not root:
            return True, -1

        # Check subtrees to see if they are balanced
        leftIsBalanced, leftHeight = balanced(root.left)
        if not leftIsBalanced:
            return False, 0
        rightIsBalanced, rightHeight = balanced(root.right)
        if not rightIsBalanced:
            return False, 0

        # if the subtrees are balanced, check if the current tree is balanced using their height
        return (abs(leftHeight - rightHeight) < 2), 1 + max(leftHeight, rightHeight)
    return balanced(root)[0]
```
