---
title: Binary Tree Postorder Traversal
diff: medium
tags:
  - Stack
  - Tree
---

<img class="medium-zoom" src="/algo/binary-tree-postorder-traversal.png" alt="https://leetcode.com/problems/binary-tree-postorder-traversal">

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

### Recursion

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def postorderTraversal(self, root: TreeNode) -> List[int]:
    res = []
    def postorder(node: TreeNode):
        if not node: return
        postorder(node.left)
        postorder(node.right)
        res.append(node.val)
    postorder(root)
    return res
```

### iteration

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

### Two Stacks

```py
def postorderTraversal(self, root: TreeNode) -> List[int]:
    if not root: return []
    res = []
    s1, s2 = [root], []

    while s1:
        node = s1.pop()
        s2.append(node.val)
        if node.left:
            s1.append(node.left)
        if node.right:
            s1.append(node.right)
    while s2:
        res.append(s2.pop())

    return res
```

### One Stack (REDO)

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def postorderTraversal(self, root: TreeNode) -> List[int]:
    res = []
    stack = []
    pre = None

    while root or stack:
        while root:
            stack.append(root)
            root = root.left
        root = stack.pop()
        if not root.right or root.right == pre:
            res.append(root.val)
            pre = root
            root = None
        else:
            stack.append(root)
            root = root.right
    return res
```

### Morris Traversal (REDO)

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def postorderTraversal(self, root: TreeNode) -> List[int]:
    def addPath(node: TreeNode):
        cnt = 0
        while node:
            cnt += 1
            res.append(node.val)
            node = node.right
        i, j = len(res)-cnt, len(res)-1
        while i < j:
            res[i], res[j] = res[j], res[i]
            i += 1
            j -= 1

    if not root:
        return []

    res = []
    p1 = root

    while p1:
        p2 = p1.left
        if p2:
            while p2.right and p2.right!=p1:
                p2 = p2.right
            if not p2.right:
                p2.right = p1
                p1 = p1.left
                continue
            else:
                p2.right = None
                addPath(p1.left)
        p1 = p1.right
    addPath(root)
    return res
```
