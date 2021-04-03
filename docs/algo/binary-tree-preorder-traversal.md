---
title: Binary Tree Preorder Traversal
diff: medium
tags:
  - Stack
  - Tree
  - Morris
---

<img class="medium-zoom" src="/algo/binary-tree-preorder-traversal.png" alt="https://leetcode.com/problems/binary-tree-preorder-traversal">

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
def preorderTraversal(self, root: TreeNode) -> List[int]:
    res = []
    def preorder(node: TreeNode):
        if not node: return
        res.append(node.val)
        preorder(node.left)
        preorder(node.right)

    preorder(root)
    return res
```

## Follow Up

::: theorem
Recursive solution is trivial, could you do it iteratively?
:::

### Iteration

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def preorderTraversal(self, root: TreeNode) -> List[int]:
    res = []
    stack = [root]

    while stack:
        curr = stack.pop()
        if curr:
            res.append(curr.val)
            stack.append(curr.right)
            stack.append(curr.left)

    return res
```

### Morris Traversal

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def preorderTraversal(self, root: TreeNode) -> List[int]:
    res = []
    pre = None

    while root:
        if root.left:
            pre = root.left
            while pre.right and pre.right != root:
                pre = pre.right

            if not pre.right:
                res.append(root.val)
                # `pre.right` points to root
                pre.right = root
                # traverse left subtree
                root = root.left
            else: # left subtree is done traversing
                # cut connection
                pre.right = None
                root = root.right
        else:
            res.append(root.val)
            root = root.right
    return res
```
