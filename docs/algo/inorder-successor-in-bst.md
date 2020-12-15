---
title: Inorder Successor in BST
diff: medium
tags:
  - Tree
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

### Iteration I

If current node has right child, then successor is the leftmost node in right subtree.

Else if current node does not have right child, then successor is the lowest ancestor's left subtree. Thus, before we go into left subtree, store current node in `lowest_right_father`.

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

### Iteration II

Neatly combines both cases.

```py
def inorderSuccessor(self, root: 'TreeNode', p: 'TreeNode') -> 'TreeNode':
    if not root:
        return None
    res = None
    while root:
        if root.val <= p.val:
            root = root.right
        else:
            if res is None or res.val > root.val:
                res = root
            root = root.left
    return res
```

### Iteration III

```py
def inorderSuccessor(self, root: 'TreeNode', p: 'TreeNode') -> 'TreeNode':
        # the successor is somewhere lower in the right subtree
        # successor: one step right and then left till you can
        if p.right:
            p = p.right
            while p.left:
                p = p.left
            return p

        # the successor is somewhere upper in the tree
        stack, inorder = [], float('-inf')

        # inorder traversal : left -> node -> right
        while stack or root:
            # 1. go left till you can
            while root:
                stack.append(root)
                root = root.left

            # 2. all logic around the node
            root = stack.pop()
            if inorder == p.val:    # if the previous node was equal to p
                return root         # then the current node is its successor
            inorder = root.val

            # 3. go one step right
            root = root.right

        # there is no successor
        return None
```

### Recursion

```py
def inorderSuccessor(self, root: 'TreeNode', p: 'TreeNode') -> 'TreeNode':
    if not root:
        return None
    if root.val <= p.val:
        return self.inorderSuccessor(root.right, p)
    left = self.inorderSuccessor(root.left, p)
    return left if left else root
```

<!-- Morris traversal -->
