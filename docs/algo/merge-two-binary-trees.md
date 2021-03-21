---
title: Merge Two Binary Trees
diff: easy
tags:
  - Tree
---

<img class="medium-zoom" src="/algo/merge-two-binary-trees.png" alt="https://leetcode.com/problems/merge-two-binary-trees">

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

### Recursion

::: theorem Complexity
time: $O(n)$  
space: $O(\log n)$ (worst case: $O(n)$, if a tree is skewed)
:::

```py
def mergeTrees(self, root1: TreeNode, root2: TreeNode) -> TreeNode:
    if not root1:
        return root2
    if not root2:
        return root1
    root1.val += root2.val
    root1.left = self.mergeTrees(root1.left, root2.left)
    root1.right = self.mergeTrees(root1.right, root2.right)
    return root1
```

## Iteration

```py
def mergeTrees(self, root1: TreeNode, root2: TreeNode) -> TreeNode:
    if not root1:
        return root2
    stack = []
    stack.append([root1, root2])

    while stack:
        curr = stack.pop()
        if not curr[0] or not curr[1]:
            continue
        curr[0].val += curr[1].val
        if not curr[0].left:
            curr[0].left = curr[1].left
        else:
            stack.append([curr[0].left, curr[1].left])

        if not curr[0].right:
            curr[0].right = curr[1].right
        else:
            stack.append([curr[0].right, curr[1].right])

    return root1
```
