---
title: Inorder Predecessor in BST
diff: medium
tags:
  - Tree
related:
  - inorder-successor-in-bst
---

<img class="medium-zoom" src="/algo/inorder-predecessor-in-bst.png" alt="https://www.lintcode.com/problem/inorder-predecessor-in-bst">

## Definition for a Binary Tree Node

```py
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
```

## Solution

Let $h$ be the height and $n$ be the number of nodes of tree.

### Brute Force

Brute force would be to traverse all nodes and then search for the node before `p`, but that's obviously inefficient.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

### Vanilla Iteration

Return the rightmost node of left subtree, if any; otherwise, return the lowest left father instead.

::: theorem Complexity
time: $O(h)$  
space: $O(1)$
:::

```py
def inorderPredecessor(self, root, p):
    if not root:
        return None
    lowest_left_father = None
    # find lowest left father, if any
    while root != p:
        if root.val < p.val:
            lowest_left_father = root
            root = root.right
        else:
            root = root.left

    # find rightmost node of left subtree, if any
    son = p.left
    res = son
    while son:
        res = son
        son = son.right
    if not res:
        return lowest_left_father
    return res
```

### DFS

The algorithms of iteration and recursion are similar and both take $O(h)$ time:

- if current `node`'s value is larger than or equal to `p`'s value, we know our answer must be in the left subtree
- if current `node`'s value is less than `p`'s value, current node is a candidate. Go to its right subtree to see if we can find a larger one
- if we reach null, our search is over, just return the candidate

but recursion would require $O(h)$ implicit stack space.

#### Iteration

```py
def inorderPredecessor(self, root, p):
    res = None
    node = root
    while node:
        if node.val >= p.val:
            node = node.left
        else:
            res = node
            node = node.right
    return res
```

#### Recursion

```py
class Solution:
    pre = None
    def inorderPredecessor(self, root, p):

        def dfs(root, p):
            if not root:
                return
            if root.val >= p.val:
                dfs(root.left, p)
            else:
                self.pre = root
                dfs(root.right, p)

        dfs(root, p)
        return self.pre
```

<!-- ## Follow Up

kth predecessor in bst -->
