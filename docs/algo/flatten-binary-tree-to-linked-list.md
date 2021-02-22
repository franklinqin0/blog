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

First preorder traverse the tree and store the result in `lst`. Then set every node's `left` to `None` and `right` to the next node.

::: theorem Complexity
time: $O(N)$  
space: $O(N)$
:::

```py
def flatten(self, root: TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        lst = []
        def preorder(node: TreeNode):
            if not node: return

            lst.append(node)
            preorder(node.left)
            preorder(node.right)

        preorder(root)
        for i in range(1, len(lst)):
            lst[i-1].left = None
            lst[i-1].right = lst[i]
```

### Iterative Morris Traversal

```py
def flatten(self, root: TreeNode) -> None:
    """
    Do not return anything, modify root in-place instead.
    """
    # handle the null scenario
    if not root:
        return None
    node = root
    while node:
        # if the node has a left child
        if node.left:
            # find the rightmost node
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
