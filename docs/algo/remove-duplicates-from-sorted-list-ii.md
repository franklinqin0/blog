---
title: Remove Duplicates from Sorted List II
source: LeetCode
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

We need 2 pointer, `curr`ent and `pred`ecessor. `curr` traverses the linked list while `pred` removes duplicates.

Loop invariant: every node before `pred` does not contain any duplicate.

```py
  def deleteDuplicates(self, head: ListNode) -> ListNode:
      pred = dummy = ListNode(-1)
      curr = head
      dummy.next = curr

      while curr and curr.next:
          if curr.val == curr.next.val:
            # loop until cur point to the last duplicate
              while curr and curr.next and curr.val == curr.next.val:
                  curr = curr.next
              pred.next = curr.next
          else:
              pred = curr
          curr = curr.next
      return dummy.next
```

Or create `curr` as `pred.next` in each iteration of while loop. The line `if curr is not pred.next` checks if the inner while loop is entered. After the inner while loop, `curr` points to the last duplicate, so set `pred.next` to `curr.next` eliminates all duplicates.

```py {9}
def deleteDuplicates(self, head: ListNode) -> ListNode:
    dummy = ListNode(-1)
    dummy.next = head
    pred = dummy
    while pred.next:
        curr = pred.next
        while curr.next and curr.val == curr.next.val:
            curr = curr.next
        if curr is not pred.next:
            pred.next = curr.next
        else:
            pred = curr
    return dummy.next
```

### Recursion

Always pass the next non duplicate node to next recursion.

```py
def deleteDuplicates(self, head: ListNode) -> ListNode:
    if not head: return None
    if head.next and head.val==head.next.val:
        while head.next and head.val==head.next.val:
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
    if head.next and head.val==head.next.val:
        return self.deleteDuplicates(self.rm(head, head.val))
    head.next = self.deleteDuplicates(head.next)
    return head
def rm(self, dup_node: ListNode, dup_val: int) -> ListNode:
    if dup_node and dup_node.val==dup_val:
        return self.rm(dup_node.next, dup_val)
    else:
        return dup_node
```
