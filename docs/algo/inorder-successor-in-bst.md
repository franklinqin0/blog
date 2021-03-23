---
title: Inorder Successor in BST
diff: medium
tags:
  - Tree
  - Morris
related:
  - inorder-predecessor-in-bst
---

<img class="medium-zoom" src="/algo/inorder-successor-in-bst.png" alt="https://leetcode.com/problems/inorder-successor-in-bst">

## Definition for a Binary Tree Node

```py
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
```

## Solution

Let $h$ be the height of tree.

::: theorem Complexity
time: $O(h)$  
space: $O(h)$
:::

### Vanilla Iteration

Return the leftmost node of right subtree, if any; otherwise, return the lowest right father instead.

```py
def inorderSuccessor(self, root: 'TreeNode', p: 'TreeNode') -> 'TreeNode':
    if not root:
        return None
    lowest_right_father = None
    # find lowest right father
    while root!=p:
        if root.val < p.val:
            root = root.right
        else:
            lowest_right_father = root
            root = root.left
    # find leftmost node of right subtree
    son = p.right
    res = son
    while son:
        res = son
        son = son.left
    if not res:
        return lowest_right_father
    return res
```

### DFS

#### Iteration

Algorithm:

- if current `node`'s value is less than or equal to `p`'s value, we know our answer must be in the right subtree
- if current `node`'s value is greater than `p`'s value, current node is a candidate. Go to its left subtree to see if we can find a smaller one
- if we reach null, our search is over, just return the candidate

```py
def inorderSuccessor(self, root: 'TreeNode', p: 'TreeNode') -> 'TreeNode':
    res = None
    node = root
    while node:
        if node.val <= p.val:
            node = node.right
        else:
            res = node
            node = node.left
    return res
```

#### Recursion

```py
def inorderSuccessor(self, root: 'TreeNode', p: 'TreeNode') -> 'TreeNode':
    res = None
    def dfs(root, p):
        nonlocal res
        if not root:
            return
        if root.val <= p.val:
            dfs(root.right, p)
        else:
            res = root
            dfs(root.left, p)

    dfs(root, p)
    return res
```

<!-- Morris traversal (REDO) -->
