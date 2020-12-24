---
title: Symmetric Tree
diff: easy
tags:
  - Tree
  - Recursion
  - DFS
  - BFS
---

<img class="medium-zoom" src="/algo/symmetric-tree.png" alt="https://leetcode.com/problems/symmetric-tree">

## Definition for a Binary Tree Node

```py
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

## Solution

Both solutions take linear time and space.

### Recursion

Two trees are mirrors of each other if:

- the two roots have the same value
- the right subtree of each tree is a mirror reflection of the left subtree of the other tree

```py
class Solution:
    def mirror(self, t1: TreeNode, t2: TreeNode) -> bool:
        if not t1 and not t2:
            return True
        elif not t1 or not t2:
            return False
        else:
            return t1.val == t2.val\
            and self.mirror(t1.left, t2.right)\
            and self.mirror(t1.right, t2.left)

    def isSymmetric(self, root: TreeNode) -> bool:
        return self.mirror(root, root)
```

### Iteration

The following code follows a BFS order to traverse the binary tree, but `queue.pop()` (DFS order) also works.

```py
def isSymmetric(self, root: TreeNode) -> bool:
    queue = []
    queue.append(root)
    queue.append(root)
    while queue:
        t1 = queue.pop(0)
        t2 = queue.pop(0)
        if not t1 and not t2:
            continue
        elif not t1 or not t2:
            return False
        elif t1.val != t2.val:
            return False
        else:
            queue.append(t1.left)
            queue.append(t2.right)
            queue.append(t1.right)
            queue.append(t2.left)
    return True
```
