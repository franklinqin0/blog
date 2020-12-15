---
title: Linked List Cycle
diff: easy
tags:
  - Hash Table
  - Two Pointers
  - Linked List
related:
  - happy-number
  - linked-list-cycle-ii
---

<img class="medium-zoom" src="/algo/linked-list-cycle.png" alt="https://leetcode.com/problems/linked-list-cycle">

`pos` variable is used to:

1. convert input array into linked list
2. run unit test faster

The next problem is [Linked List Cycle II](linked_list_cycle_ii), which asks for the cycle start.

## Solution

### HashSet

Use the HashSet `st` to see if `curr` has been visited before.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def hasCycle(self, head: ListNode) -> bool:
    st = set()
    curr = head
    while curr:
        if curr in st:
            return True
        else:
            st.add(curr)
            curr = curr.next
    return False
```

## Follow Up

> Can you solve it using constant space?

### Floyd's Cycle-Finding Algorithm

Use two pointers, `slow` and `fast`, to traverse the linked list and see if they eventually meet.

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

#### `slow is not fast`

If statement is at **beginning** of while loop.

```py
def hasCycle(self, head: ListNode) -> bool:
    if not head or not head.next: return False
    slow = head
    fast = head.next
    while slow is not fast:
        if not fast or not fast.next: return False
        slow = slow.next
        fast = fast.next.next
    return True
```

#### `fast and fast.next`

```py
def hasCycle(self, head: ListNode) -> bool:
    if not head:
        return False
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False
```

#### Try / Except

When `fast` or `fast.next` is `None`, an error would throw on the while check. To avoid the hassle, return `True` at the end of `try` and `False` at the end of `except`.

```py
def hasCycle(self, head: ListNode) -> bool:
    try:
        slow = head
        fast = head.next
        while slow is not fast:
            slow = slow.next
            fast = fast.next.next
        return True
    except:
        return False
```
