---
title: Path Sum III
diff: medium
tags:
  - Tree
  - DFS
related:
  - path-sum
  - path-sum-ii
---

<img class="medium-zoom" src="/algo/path-sum-iii.png" alt="https://leetcode.com/problems/path-sum-iii">

## Definition for a Binary Tree Node

```py
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

## Solution

### Vanilla DFS

::: theorem Complexity
time: $O(n\log n)$ (worst case if tree is a line: $O(n^2)$)  
space: $O(\log n)$ (due to implicit stack space, worst case: $O(n)$)
:::

```py
def pathSum(self, root: TreeNode, sum: int) -> int:
    if not root:
        return 0

    def dfs(node: TreeNode, csum: int) -> int:
        if not node:
            return 0
        csum += node.val
        return (csum == sum) + dfs(node.left, csum) + dfs(node.right, csum)

    return dfs(root, 0) + self.pathSum(root.left, sum) + self.pathSum(root.right, sum)
```

### Memoized DFS

Say the current `node` has a path sum `csum`, if there exists a node that had been visited and had a path sum `csum - sum`, then increment `res` by `memo[csum - sum]`.

As a `node`'s subtree is being traversed, increment `memo[csum]` by $1$.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
from collections import defaultdict
def pathSum(self, root: TreeNode, sum: int) -> int:
    res = 0
    memo = defaultdict(int)
    memo[0] = 1

    def dfs(node, csum):
        nonlocal res
        if not node:
            return
        csum += node.val
        # increment by the # of times
        res += memo[csum - sum]
        # mark the current node as visited
        memo[csum] += 1
        dfs(node.left, csum)
        dfs(node.right, csum)
        memo[csum] -= 1

    dfs(root, 0)
    return res
```
