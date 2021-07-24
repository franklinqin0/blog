---
title: Merge Two Binary Trees
diff: easy
tags:
  - Tree
---

<img class="medium-zoom" src="/algo/merge-two-binary-trees.png" alt="https://leetcode.com/problems/merge-two-binary-trees">

## Definition for a Binary Tree Node

```py
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

## Solution

Let $n$ be the total number of nodes in both trees.

Both methods implement preorder traversal.

### Recursion

If one root is empty, return the other one. Else if both roots are nonempty, merge the root values.

::: theorem Complexity
time: $O(n)$  
space: $O(\log(n))$ (worst case: $O(n)$ for a skewed tree)
:::

```py
def mergeTrees(self, root1: TreeNode, root2: TreeNode) -> TreeNode:
    if not root1:
        return root2
    if not root2:
        return root1
    root1.val += root2.val
    root1.left = self.mergeTrees(root1.left, root2.left)
    root1.right = self.mergeTrees(root1.right, root2.right)
    return root1
```

### Iteration

Use `stack` to traverse both trees.

First, push the root nodes of both the trees onto the `stack`. Then, at every step, pop a node pair from the top of the stack. For every node pair removed, add the values corresponding to the two nodes and update the value of the corresponding node in the 1st tree. Then, if the left child of the 1st tree exists, we push the left child(pair) of both the trees onto the stack. Else, we append the left child(subtree) of the 2nd tree to the current node of the 1st tree. We do the same for the right child pair as well.

If, at any step, both the current nodes are null, we continue with popping the next nodes from the `stack`.

::: theorem Complexity
time: $O(n)$  
space: $O(\log(n))$ (worst case: $O(n)$ for a skewed tree)
:::

```py
def mergeTrees(self, root1: TreeNode, root2: TreeNode) -> TreeNode:
    if not root1:
        return root2
    stack = []
    stack.append([root1, root2])

    while stack:
        curr = stack.pop()
        if not curr[0] or not curr[1]:
            continue
        # merge root values
        curr[0].val += curr[1].val
        # if left subtree of 1st tree exists
        if not curr[0].left:
            curr[0].left = curr[1].left
        else:
            stack.append([curr[0].left, curr[1].left])
        # if right subtree of 1st tree exists
        if not curr[0].right:
            curr[0].right = curr[1].right
        else:
            stack.append([curr[0].right, curr[1].right])

    return root1
```
