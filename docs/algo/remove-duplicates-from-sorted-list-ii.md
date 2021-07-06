---
title: Remove Duplicates from Sorted List II
diff: medium
tags:
  - Linked List
  - Recursion
related:
  - remove-duplicates-from-sorted-list
---

<img class="medium-zoom" src="/algo/remove-duplicates-from-sorted-list-ii.png" alt="https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii">

## Solution

### Iteration

`curr` traverses the linked list while `pred` removes duplicates.

Loop invariant: every node before `pred` does not contain any duplicate.

```py
def deleteDuplicates(self, head: ListNode) -> ListNode:
    pred = dummy = ListNode(0)
    curr = head
    dummy.next = curr

    while curr and curr.next:
        if curr.val == curr.next.val:
        # loop until `curr` point to the last duplicate
            while curr and curr.next and curr.val == curr.next.val:
                curr = curr.next
            pred.next = curr.next
        else:
            pred = curr
        curr = curr.next
    return dummy.next
```

Or:

<!-- TODO: understand the diff -->

```py {11}
def deleteDuplicates(self, head: ListNode) -> ListNode:
    dummy = ListNode(0)
    dummy.next = head
    pred = dummy

    while pred.next:
        curr = pred.next
        # after the loop, `curr` points to the last duplicate
        while curr.next and curr.val == curr.next.val:
            curr = curr.next
        # checks if the inner while loop is entered
        if curr is not pred.next:
            # eliminate all duplicates
            pred.next = curr.next
        else:
            pred = curr
    return dummy.next
```

### Recursion

Always pass the next non-duplicate node to next recursion.

```py
def deleteDuplicates(self, head: ListNode) -> ListNode:
    if not head: return None
    if head.next and head.val == head.next.val:
        while head.next and head.val == head.next.val:
            head = head.next
        return self.deleteDuplicates(head.next)
    else:
        head.next = self.deleteDuplicates(head.next)
    return head
```

Or have two recursions. In `rm` remove all duplicate nodes and return the non duplicate one.

```py
def deleteDuplicates(self, head: ListNode) -> ListNode:
    if not head: return None
    if head.next and head.val == head.next.val:
        return self.deleteDuplicates(self.rm(head, head.val))
    head.next = self.deleteDuplicates(head.next)
    return head

def rm(self, dup_node: ListNode, dup_val: int) -> ListNode:
    if dup_node and dup_node.val == dup_val:
        return self.rm(dup_node.next, dup_val)
    else:
        return dup_node
```
