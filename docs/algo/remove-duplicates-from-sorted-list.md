---
title: Remove Duplicates from Sorted List
source: LeetCode
diff: easy
tags:
  - Linked List
related:
  - remove-duplicates-from-sorted-list-ii
---

<img class="medium-zoom" src="/algo/remove-duplicates-from-sorted-list.png" alt="https://leetcode.com/problems/remove-duplicates-from-sorted-list">

## Solution

### Iteration

As the input list is sorted, we can compare `curr.va` w/ `curr.next.val`. If same, skip the duplicate; o.w., go to `curr.next`.

Complexity:

- time: $O(n)$
- space: $O(1)$

```py
def deleteDuplicates(self, head: ListNode) -> ListNode:
    curr = head
    while curr and curr.next:
        if curr.val == curr.next.val:
            curr.next = curr.next.next
        else:
            curr = curr.next
    return head
```

### Recursion

```py
def deleteDuplicates(self, head: ListNode) -> ListNode:
    curr = head
    if not curr or not curr.next: return head
    if curr.val == curr.next.val:
        curr.next = curr.next.next
        self.deleteDuplicates(curr)
    else:
        self.deleteDuplicates(curr.next)
    return head
```