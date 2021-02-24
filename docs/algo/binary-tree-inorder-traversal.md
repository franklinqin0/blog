---
title: Binary Tree Inorder Traversal
diff: medium
tags:
  - Hash Table
  - Stack
  - Tree
  - Morris
---

<img class="medium-zoom" src="/algo/binary-tree-inorder-traversal.png" alt="https://leetcode.com/problems/binary-tree-inorder-traversal">

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
space: $O(n)$
:::

```py
def inorderTraversal(self, root: TreeNode) -> List[int]:
    res = []
    def inorder(node: TreeNode):
        if not node: return
        inorder(node.left)
        res.append(node.val)
        inorder(node.right)

    inorder(root)
    return res
```

or even simpler:

```py
def inorderTraversal(self, root: TreeNode) -> List[int]:
    def inorder(root: TreeNode):
        return inorder(root.left) + [root.val] + inorder(root.right) if root else []

    return inorder(root)
```

## Follow Up

> Recursive solution is trivial, could you do it iteratively?

### Iteration

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def inorderTraversal(self, root: TreeNode) -> List[int]:
    res = []
    stack = []
    curr = root

    while stack or curr:
        while curr:
            stack.append(curr)
            curr = curr.left
        curr = stack.pop()
        res.append(curr.val)
        curr = curr.right

    return res
```

### Morris Traversal

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def inorderTraversal(self, root: TreeNode) -> List[int]:
    res = []
    pre = None

    while root:
        if root.left:
            pre = root.left
            while pre.right and pre.right != root:
                pre = pre.right

            if not pre.right:
                # `pre.right` points to root
                pre.right = root
                # traverse left subtree
                root = root.left
            else: # left subtree is done traversing
                res.append(root.val)
                # cut connection
                pre.right = None
                root = root.right
        else:
            res.append(root.val)
            root = root.right
    return res
```
