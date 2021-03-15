---
title: Sort List
diff: medium
tags:
  - Linked List
  - Sort
---

<img class="medium-zoom" src="/algo/sort-list.png" alt="https://leetcode.com/problems/sort-list">

## Definition for Singly-Linked List

```py
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

## Solution

### Merge Sort

#### Recursive Top Down

::: theorem complexity
time: $O(n\log n)$  
space: $O(\log n)$
:::

```py
def sortList(self, head: ListNode) -> ListNode:
    if not head or not head.next:
        return head
    fast, slow = head.next, head
    while fast and fast.next:
        fast = fast.next.next
        slow = slow.next
    # disconnect
    right_head = slow.next
    slow.next = None
    left, right = self.sortList(head), self.sortList(right_head)
    return self.merge(left, right)

def merge(self, left, right):
    if not left or not right:
        return left or right
    dummy = curr = ListNode(0)
    while left and right:
        if left.val < right.val:
            curr.next = left
            left = left.next
        else:
            curr.next = right
            right = right.next
        curr = curr.next
    curr.next = left or right
    return dummy.next
```

### Iterative Bottom Up

```py
class Solution:
    def sortList(self, head: ListNode) -> ListNode:

        def merge(head1: ListNode, head2: ListNode) -> ListNode:
            dummy = ListNode(0)
            curr = dummy

            while head1 and head2:
                if head1.val <= head2.val:
                    curr.next = head1
                    head1 = head1.next
                else:
                    curr.next = head2
                    head2 = head2.next
                curr = curr.next
            curr.next = head1 if head1 else head2
            return dummy.next

        if not head:
            return head

        length = 0
        node = head
        while node:
            length += 1
            node = node.next

        dummy = ListNode(0, head)
        sublength = 1
        while sublength < length:
            prev, curr = dummy, dummy.next
            while curr:
                head1 = curr
                for i in range(1, sublength):
                    if curr and curr.next:
                        curr = curr.next
                    else:
                        break
                head2 = curr.next
                curr.next = None
                curr = head2
                for i in range(1, sublength):
                    if curr and curr.next:
                        curr = curr.next
                    else:
                        break

                succ = None
                if curr:
                    # split
                    succ = curr.next
                    curr.next = None

                merged = merge(head1, head2)
                prev.next = merged
                while prev.next:
                    prev = prev.next
                curr = succ
            sublength <<= 1

        return dummy.next
```
