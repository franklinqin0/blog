---
title: Reverse Linked List
diff: easy
tags:
  - Linked List
  - Recursion
related:
  - add-two-numbers-ii
---

<img class="medium-zoom" src="/algo/reverse-linked-list.png" alt="https://leetcode.com/problems/reverse-linked-list">

## Definition for Singly-Linked List

```py
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
```

## Solution

This problem is very basic yet IMPT. It can be solved both **iteratively** or **recursively**.

### Iteration

It's quite IMPT to understand and remember the steps in while loop.

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def reverseList(self, head: ListNode) -> ListNode:
    prev = None
    curr = head
    while curr:
        # store next node
        nxt = curr.next
        # update next of current
        curr.next = prev
        # move prev and curr 1 step forward
        prev = curr
        curr = nxt
    return prev
```

or could combine the assignments (Python's syntactic sugar):

```py
def reverseList(self, head: ListNode) -> ListNode:
    prev, curr = None, head
    while curr:
        curr.next, prev, curr = prev, curr, curr.next
    return prev
```

## Follow Up

::: theorem
A linked list can be reversed either iteratively or recursively. Could you implement both?
:::

### Recursion (REDO)

There are `n` nodes in total. Assume $n_{k+1}$ to $n_m$ have been reversed and the `curr` node is $n_k$:

$n_1 \rightarrow ... n_{k-1} \rightarrow n_k \rightarrow n_{k+1} \leftarrow ... \leftarrow n_n$

Set $n_{k+1}$'s `next` to $n_k$: $n_k$`.next.next` = $n_k$

Also avoid the cycle by setting $n_k$'s `next` to `None`: $n_k$`.next` = `None`

Note that I set `head` to `curr` to avoid confusion. `hd` is the actual head of reversed linked list.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$ (due to implicit stack space)
:::

```py
def reverseList(self, head: ListNode) -> ListNode:
        curr = head
        # not curr covers the empty input: []
        if not curr or not curr.next:
            return curr
        hd = self.reverseList(curr.next)
        curr.next.next = curr
        curr.next = None
        return hd
```
