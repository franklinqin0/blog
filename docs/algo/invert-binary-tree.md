---
title: Invert Binary Tree
diff: easy
tags:
  - Tree
---

<img class="medium-zoom" src="/algo/invert-binary-tree.png" alt="https://leetcode.com/problems/invert-binary-tree">

## Solution

Let $n$ be the number of nodes in the tree.

All following solutions take $O(n)$ time and $O(\log n)$ space.

### Brute Force

There are actually so many ways to solve this problem, and indeed very terrible if unable to get during an interview.

```py
def invertTree(self, root: TreeNode) -> TreeNode:
    if not root:
        return root
    root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
    return root
```

```py
def invertTree(self, root: TreeNode) -> TreeNode:
    if not root:
        return
    root.left, root.right = root.right, root.left
    self.invertTree(root.left)
    self.invertTree(root.right)
    return root
```

```py
    def invertTree(self, root: TreeNode) -> TreeNode:
        if not root:
            return
        self.invertTree(root.left)
        self.invertTree(root.right)
        root.left, root.right = root.right, root.left
        return root
```
