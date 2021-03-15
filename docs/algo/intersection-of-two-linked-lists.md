---
title: Intersection of Two Linked Lists
diff: easy
tags:
  - Linked List
  - Two Pointers
---

<img class="medium-zoom" src="/algo/intersection-of-two-linked-lists.png" alt="https://leetcode.com/problems/intersection-of-two-linked-lists">

## Definition for Singly-Linked List

```py
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
```

## Solution

Let $m$ be the length of list $A$, and $n$ be the length of list $B$.

The brute force solution of squared time complexity is omitted.

### HashSet

::: theorem Complexity
time: $O(m + n)$  
space: $O(m)$
:::

```py
def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
    setA = set()
    pA = headA
    while pA:
        setA.add(pA)
        pA = pA.next
    # return pB is in setA
    pB = headB
    while pB:
        if pB in setA:
            return pB
        pB = pB.next
```

### Two Pointers

::: theorem Complexity
time: $O(m + n)$  
space: $O(1)$
:::

If you switch head, the possible difference between length would be counted. On the second traversal, `pA` and `pB` either hit or miss. If they meet, either node can be returned. Otherwise, they will hit at the end in the 2nd iteration, `pA == pB == None`, and return either one of them is the same: `None`.

```py
def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
    pA = headA
    pB = headB
    while pA is not pB:
        pA = pA.next if pA is not None else headB
        pB = pB.next if pB is not None else headA
    return pA
```
