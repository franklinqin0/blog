---

title: Closest Binary Search Tree Value II
diff: hard
tags:

- ???
  related:
  ---<img class="medium-zoom" src="/algo/closest-binary-search-tree-value-ii.png" alt="https://leetcode.com/problems/closest-binary-search-tree-value-ii">

## Definition for a Binary Tree Node

```py
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

## Solution

Let $h$ be the height and $n$ be the number of nodes of tree.

### Sort

::: theorem Complexity
time: $O(n\log n)$ ($O(n)$ to build inorder traversal and $O(n\log n)$ to sort it)  
space: $O(n)$
:::

```py
def closestKValues(self, root: TreeNode, target: float, k: int) -> List[int]:
    def inorder(root: TreeNode):
        return inorder(root.left) + [root.val] + inorder(root.right) if root else []

    nodes = inorder(root)
    nodes.sort(key=lambda x: abs(x-target))
    return nodes[:k]
```

### Heap

```py
class Solution:
    def closestKValues(self, root: TreeNode, target: float, k: int) -> List[int]:
        def inorder(root: TreeNode):
            if not root: return
            inorder(root.left)
            heappush(heap, (-abs(root.val-target), root.val))
            # keep the size of heap always to k
            if len(heap) > k:
                heappop(heap)
            inorder(root.right)

        heap = []
        inorder(root)
        return [v for _, v in heap]
```
