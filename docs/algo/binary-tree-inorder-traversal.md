---
title: Binary Tree Inorder Traversal
source: LeetCode
diff: hard
tags:
  - Hash Table
  - Stack
  - Tree
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

### Recursion

```py
def inorderTraversal(self, root: TreeNode) -> List[int]:
    res = []
    def helper(node: TreeNode):
        if node:
            helper(node.left)
            res.append(node.val)
            helper(node.right)
    helper(root)
    return res
```

## Follow Up

> Recursive solution is trivial, could you do it iteratively?

### Interation

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

[Algorithm](https://stackoverflow.com/a/5506601/6421652):

- Initialize current as root
- While current is not NULL
  - If current does not have left child
    1. Add current’s value
    2. Go to the right, i.e., current = current.right
  - Else
    1. In current's left subtree, make current the right child of the rightmost node
    2. Go to this left child, i.e., current = current.left

```py
def inorderTraversal(self, root: TreeNode) -> List[int]:
    res = []
    curr = root
    while curr:
        if not curr.left:
            res.append(curr.val)
            # move to next right node
            curr = curr.right
        else: # has a left subtree
            pre = curr.left
            # find rightmost in left subtree
            while pre.right:
                pre = pre.right
            # put cur after the pre node
            pre.right = curr
            # store cur node
            temp = curr
            # move cur to the top of the new tree
            curr = curr.left
            # original cur left be null, avoid infinite loops
            temp.left = None
    return res
```
