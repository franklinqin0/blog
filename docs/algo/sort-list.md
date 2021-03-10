---
title: Sort List
diff: medium
tags:
  - Linked List
  - Sort
---

<img class="medium-zoom" src="/algo/sort-list.png" alt="https://leetcode.com/problems/sort-list">

## Solution

### Merge Sort

#### Recursive

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
