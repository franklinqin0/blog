---
title: Closest Binary Search Tree Value II
diff: hard
tags:
  - Tree
  - Stack
related:
  #   - closest-binary-search-tree-value
  - binary-tree-inorder-traversal
  - top-k-frequent-elements
---

<img class="medium-zoom" src="/algo/closest-binary-search-tree-value-ii.png" alt="https://leetcode.com/problems/closest-binary-search-tree-value-ii">

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
space: $O(n)$ (store `nums`)
:::

```py
def closestKValues(self, root: TreeNode, target: float, k: int) -> List[int]:
    def inorder(root: TreeNode):
        return inorder(root.left) + [root.val] + inorder(root.right) if root else []

    nums = inorder(root)
    nums.sort(key=lambda x: abs(x-target))
    return nums[:k]
```

### Heap

::: theorem Complexity
time: $O(n\log k)$ (push $n$ elts into the heap of size $k$)  
space: $O(k + h)$ (heap of $k$ elements and recursion stack of tree height $h$)
:::

```py
from heapq import heappush, heappop
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

### Inorder Predecessor & Successor

Time complexity of getPredecessor and getSuccessor is amortized O(1) because it's just part of the inorder traversal. If it's O(logn), the your inorder traversal is O(nlogn).

::: theorem Complexity
time: $O(n)$ (worst case: $O(n\log n)$, `getPredecessor` and `getSuccessor` take amortized $O(1)$ but worst time is $O(\log n)$)  
space: $O(n)$
:::

```py
def closestKValues(self, root: TreeNode, target: float, k: int) -> List[int]:
    res = []
    preStack = []
    sucStack = []

    while root:
        if root.val < target:
            preStack.append(root)
            root = root.right
        else:
            sucStack.append(root)
            root = root.left

    def getPredecessor(stack):
        if stack:
            pre = stack.pop()
            p = pre.left
            while p:
                stack.append(p)
                p = p.right
            return pre

    def getSuccessor(stack):
        if stack:
            suc = stack.pop()
            p = suc.right
            while p:
                stack.append(p)
                p = p.left
            return suc

    pre = getPredecessor(preStack)
    suc = getSuccessor(sucStack)

    while k:
        k -= 1
        if pre and not suc:
            res.append(pre.val)
            pre = getPredecessor(preStack)
        elif not pre and suc:
            res.append(suc.val)
            suc = getSuccessor(sucStack)
        elif pre and suc and abs(pre.val - target) <= abs(suc.val - target):
            res.append(pre.val)
            pre = getPredecessor(preStack)
        elif pre and suc and abs(pre.val - target) >= abs(suc.val - target):
            res.append(suc.val)
            suc = getSuccessor(sucStack)
    return res
```

### Quick Select

The following `partition` uses Lomuto's scheme.

<!-- REDO in Hoare's scheme ??? -->

::: theorem Complexity
time: $O(n)$ (worst case: $O(n^2)$)  
space: $O(n)$
:::

```py
from random import randint
def closestKValues(self, root: TreeNode, target: float, k: int) -> List[int]:
        def inorder(r: TreeNode):
            return inorder(r.left) + [r.val] + inorder(r.right) if r else []

        def partition(pivot_idx, left, right):
            pivot_dist = dist(pivot_idx)

            # 1. move pivot to end
            nums[right], nums[pivot_idx] = nums[pivot_idx], nums[right]
            store_idx = left

            # 2. move more close elements to the left
            for i in range(left, right):
                if dist(i) < pivot_dist:
                    nums[i], nums[store_idx] = nums[store_idx], nums[i]
                    store_idx += 1

            # 3. move pivot to its final place
            nums[right], nums[store_idx] = nums[store_idx], nums[right]

            return store_idx

        def quickselect(left, right):
            """
            Sort a list within left..right till kth less close element takes its place.
            """
            # base case: the list contains only one element
            if left == right:
                return

            # select a random pivot_index
            pivot_idx = randint(left, right)

            # find the pivot position in a sorted list
            true_idx = partition(pivot_idx, left, right)

            # if the pivot is in its final sorted position
            if true_idx == k:
                return

            if true_idx < k:
                # go left
                quickselect(true_idx, right)
            else:
                # go right
                quickselect(left, true_idx)

        nums = inorder(root)
        dist = lambda idx : abs(nums[idx] - target)
        quickselect(0, len(nums) - 1)
        return nums[:k]
```
