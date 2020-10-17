---
title: Convert BST to Greater Tree
source: LeetCode
diff: easy
tags:
  - Tree
---

<img class="medium-zoom" src="/algo/convert-bst-to-greater-tree.png" alt="https://leetcode.com/problems/convert-bst-to-greater-tree">

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

For a BST, `root.left.val` < `root.val` < `root.right.val`, so right node updates before the root, which updates before the left.

Complexity:

- time: $O(n)$
- space: $O(n)$

```py
class Solution:
    def convertBST(self, root: TreeNode) -> TreeNode:
        self.sum = 0
        self.helper(root)
        return root

    def helper(self, root: TreeNode):
        if not root:
            return

        # recursively going to the right node
        if root.right:
            self.helper(root.right)

        # update current root.val
        self.sum += root.val
        root.val = self.sum

        # go to the left node
        self.helper(root.left)
```

### Iteration w/ a Stack

Complexity:

- time: $O(n)$
- space: $O(n)$

```py
    def convertBST(self, root: TreeNode) -> TreeNode:
        stack = []
        node = root
        total = 0
        while stack or node:
            while node:
                stack.append(node)
                node = node.right

            node = stack.pop()
            total += node.val
            node.val = total
            node = node.left

        return root
```

<!-- ### Reverse Morris In-order Traversal (REDO) -->
