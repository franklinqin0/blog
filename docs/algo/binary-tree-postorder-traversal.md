---
title: Binary Tree Postorder Traversal
diff: medium
tags:
  - Stack
  - Tree
  - Morris
---

<img class="medium-zoom" src="/algo/binary-tree-postorder-traversal.png" alt="https://leetcode.com/problems/binary-tree-postorder-traversal">

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
def postorderTraversal(self, root: TreeNode) -> List[int]:
    res = []

    def postorder(node: TreeNode):
        if not node: return
        postorder(node.left)
        postorder(node.right)
        res.append(node.val)

    postorder(root)
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

#### Two Stacks

From bottom to top, `s1` stores `root`, left subtree and right subtree, `s2` stores `root` and traverses the right subtree before the left subtree, `res` reverses `s2` and stores left subtree, right subtree and `root`.

```py
def postorderTraversal(self, root: TreeNode) -> List[int]:
    if not root: return []
    res = []
    s1, s2 = [root], []

    while s1:
        node = s1.pop()
        s2.append(node.val)
        if node.left:
            s1.append(node.left)
        if node.right:
            s1.append(node.right)

    while s2:
        res.append(s2.pop())

    return res
```

#### One Stack (REDO)

`pre` stores the current node once the right subtree is done visiting.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def postorderTraversal(self, root: TreeNode) -> List[int]:
    res = []
    stack = []
    pre = None

    while root or stack:
        # keep visiting the left subtree
        while root:
            stack.append(root)
            root = root.left
        root = stack.pop()
        # right subtree is done visiting
        if not root.right or root.right == pre:
            res.append(root.val)
            pre = root
            root = None
        # keep visiting the right subtree
        else:
            stack.append(root)
            root = root.right
    return res
```

<!-- Morris Traversal not easy and unneeded -->
