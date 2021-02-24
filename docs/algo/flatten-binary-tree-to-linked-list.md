---
title: Flatten Binary Tree to Linked List
diff: medium
tags:
  - Tree
  - DFS
  - Morris
---

<img class="medium-zoom" src="/algo/flatten-binary-tree-to-linked-list.png" alt="https://leetcode.com/problems/flatten-binary-tree-to-linked-list">

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

> Do not return anything, modify root in-place instead.

### Recursive DFS

First preorder traverse the tree and store the result in `lst`. Then set every node's `left` to `None` and `right` to the next node.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def flatten(self, root: TreeNode) -> None:
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

### Reverse Preorder Traversal

From [here](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/discuss/37154/8-lines-of-python-solution-(reverse-preorder-traversal):

```py
class Solution:
    def __init__(self):
        self.prev = None
    def flatten(self, root: TreeNode) -> None:
        if not root:
            return None
        self.flatten(root.right)
        self.flatten(root.left)

        root.right = self.prev
        root.left = None
        self.prev = root
```

### Morris Traversal

Since the problem asks for rewiring instead of traversing, the following algorithm is simpler than the standard [Morris Traversl](/blog/interview_algo.md#morris-traversal) algorithm.

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def flatten(self, root: TreeNode) -> None:
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
