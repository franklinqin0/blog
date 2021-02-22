---
title: Binary Tree Level Order Traversal
diff: medium
tags:
  - BFS
---

<img class="medium-zoom" src="/algo/binary-tree-level-order-traversal.png" alt="https://www.leetcode.com/problems/binary-tree-level-order-traversal">

## Solution

Let $n$ be the number of `TreeNode`s.

### Iterative Layered BFS

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def levelOrder(self, root: TreeNode) -> List[List[int]]:
    queue = [root]
    res = []
    if not root: return res

    while queue:
        level = []
        for _ in range(len(queue)):
            curr = queue.pop(0)
            level.append(curr.val)
            if curr.left: queue.append(curr.left)
            if curr.right: queue.append(curr.right)
        res.append(level)

    return res
```

### Recursive Layered BFS

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def levelOrder(self, root: TreeNode) -> List[List[int]]:
    res = []
    if not root: return res

    def bfs(node, level):
        if len(res) == level:
            res.append([])
        res[level].append(node.val)
        if node.left:
            bfs(node.left, level+1)
        if node.right:
            bfs(node.right, level+1)

    bfs(root, 0)
    return res
```
