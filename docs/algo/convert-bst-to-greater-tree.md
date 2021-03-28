---
title: Convert BST to Greater Tree
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

For a BST, `root.left.val` < `root.val` < `root.right.val`, so update in the order of `right`, `root`, and then `left`.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def convertBST(self, root: TreeNode) -> TreeNode:
    self.total = 0
    self.traverse(root)
    return root

def traverse(self, root: TreeNode):
    if not root:
        return

    # traverse the right node recursively
    if root.right:
        self.traverse(root.right)

    # update `total` and `root.val`
    self.total += root.val
    root.val = self.total

    # traverse the left node
    self.traverse(root.left)
```

### Iteration w/ a Stack

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def convertBST(self, root: TreeNode) -> TreeNode:
    stack = []
    node = root
    total = 0
    while stack or node:
        while node:
            # add the node and right subtree to stack
            stack.append(node)
            node = node.right

        # update node vals
        node = stack.pop()
        total += node.val
        node.val = total
        # at last, traverse the left node
        node = node.left

    return root
```

<!-- ### Reverse Morris In-order Traversal (REDO) -->
