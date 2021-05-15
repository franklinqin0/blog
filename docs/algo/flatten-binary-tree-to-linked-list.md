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

::: theorem
Do not return anything, modify root in-place instead.
:::

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

Solve the right subtree before the left. After a subtree is flattened, the root is left appended to `self.prev`.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$ (due to implicit stack space)
:::

```py
self.prev = None
def flatten(self, root: TreeNode) -> None:
    if not root:
        return None
    self.flatten(root.right)
    self.flatten(root.left)

    # point to the prev ordered tree
    root.right = self.prev
    # remove the left part of current node
    root.left = None
    # add root to ordered tree
    self.prev = root
```

## Follow Up

::: theorem
Can you flatten the tree in-place (with $O(1)$ extra space)?
:::

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
            # find the rightmost node of left subtree
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
