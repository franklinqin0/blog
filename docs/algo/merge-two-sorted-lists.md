---
title: Merge Two Sorted Lists
source: LeetCode
diff: easy
tags:
  - Linked List
  - Recursion
---

<img class="medium-zoom" src="/algo/merge-two-sorted-lists.png" alt="https://leetcode.com/problems/merge-two-sorted-lists">

## Solution

This problem can be solved in either **iteration** or **recursion**.

### Vanilla Iteration

Do all the appending in while loop, and return `dummy.next` at the end.

Complexity:

- time: $O(n+m)$
- complexity: $O(1)$

```py
def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
    dummy = ListNode(-1e9)
    curr = dummy
    while l1 or l2:
        if not l1:
            curr.next = l2
            l2 = l2.next
        elif not l2:
            curr.next = l1
            l1 = l1.next
        elif l1.val < l2.val:
            curr.next = l1
            l1 = l1.next
        else:
            curr.next = l2
            l2 = l2.next
        curr = curr.next
    return dummy.next
```

### Improved Iteration

Once either `l1` or `l2` is `None`, exit while loop, append the non-`None` list and return `dummy.next`.

Complexity:

- time: $O(n+m)$
- complexity: $O(1)$

```py
def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
    dummy = ListNode(-1e9)
    curr = dummy
    while l1 and l2:
        if l1.val < l2.val:
            curr.next = l1
            l1 = l1.next
        else:
            curr.next = l2
            l2 = l2.next
        curr = curr.next

    # exactly 1 of l1 and l2 is not None now
    curr.next = l1 if l1 is not None else l2
    return dummy.next
```

### Recursion (REDO)

If either `l1` or `l2` is initially `None`, can simply return the non-`None` list. O.w., determine which of `l1` and `l2` has a smaller head, and recursively set the `next` value for that head to the next merge result.

The recursion will eventually terminate b/c each time the input is smaller and end at base case of 1 of 2 lists being `None`.

Complexity:

- time: $O(n+m)$
- complexity: $O(n+m)$ due to implicit stack space

```py
def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
    if not l1:
        return l2
    elif not l2:
        return l1
    elif l1.val<l2.val:
        l1.next = self.mergeTwoLists(l1.next,l2)
        return l1
    else:
        l2.next = self.mergeTwoLists(l1,l2.next)
        return l2
```