---
title: Flatten Binary Tree to Linked List
diff: medium
tags:
  - Tree
  - DFS
---

<img class="medium-zoom" src="/algo/flatten-binary-tree-to-linked-list.png" alt="https://leetcode.com/problems/flatten-binary-tree-to-linked-list">

## Solution

Let $N$ be the number of nodes in the tree.

### Recursive DFS

::: theorem Complexity
time: $O(N)$  
space: $O(N)$
:::

```py
def flatten(self, root: TreeNode) -> None:
    """
    Do not return anything, modify root in-place instead.
    """
    self.helper(root)

def helper(self, node):
    if not node:
        return None
    # return the leaf node
    if not node.left and not node.right:
        return node
    # recursively flatten the left subtree & return left tail node
    leftTail = self.helper(node.left)
    # recursively flatten the right subtree & return right tail node
    rightTail = self.helper(node.right)
    # if there was a left subtree, shuffle the connections
    if leftTail:
        leftTail.right = node.right
        node.right = node.left
        node.left = None
    # return the rightmost node
    return rightTail if rightTail else leftTail
```

### Iterative Morris Traversal

```py
def flatten(self, root: TreeNode) -> None:
    """
    Do not return anything, modify root in-place instead.
    """

    # Handle the null scenario
    if not root:
        return None

    node = root
    while node:

        # If the node has a left child
        if node.left:

            # Find the rightmost node
            rightmost = node.left
            while rightmost.right:
                rightmost = rightmost.right

            # rewire the connections
            rightmost.right = node.right
            node.right = node.left
            node.left = None

        # move on to the right side of the tree
        node = node.right
```
