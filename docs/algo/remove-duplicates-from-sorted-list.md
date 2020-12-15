---
title: Remove Duplicates from Sorted List
diff: easy
tags:
  - Linked List
related:
  - remove-duplicates-from-sorted-list-ii
---

<img class="medium-zoom" src="/algo/remove-duplicates-from-sorted-list.png" alt="https://leetcode.com/problems/remove-duplicates-from-sorted-list">

## Solution

### Iteration

As the input list is sorted, we can compare `curr.va` w/ `curr.next.val`. If same, skip the duplicate; otherwise, go to `curr.next`.

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

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

::: theorem Complexity
time: $O(n)$  
space: $O(n)$ (due to implicit stack space)
:::

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
