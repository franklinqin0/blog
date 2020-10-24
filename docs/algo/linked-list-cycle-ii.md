---
title: Linked List Cycle II
source: LeetCode
diff: medium
tags:
  - Hash Table
  - Two Pointers
  - Linked List
related:
  - happy-number
  - linked-list-cycle
---

<img class="medium-zoom" src="/algo/linked-list-cycle-ii.png" alt="https://leetcode.com/problems/linked-list-cycle-ii">

`pos` variable is used to:

1. convert input array into linked list
2. run unit test faster

This problem follows [Linked List Cycle](linked_list_cycle), which asks if there exists a cycle.

## Solution

### HashSet

Use HashSet `st` to store mappings from `ListNode` to index.

Complexity:

- time: $O(n)$
- space: $O(n)$

```py
def detectCycle(self, head: ListNode) -> ListNode:
    st = set()
    curr = head
    while curr:
        if curr in st:
            return curr
        else:
            st.add(curr)
            curr = curr.next
    return None
```

## Follow Up

> Can you solve it using constant space?

### Floyd's Cycle-Finding Algorithm

<img class="medium-zoom" src="linked-list-cycle-ii-floyd.png">

When `slow` and `fast` intersect, `fast` has traversed the cycle once and completed twice the distance of `slow`. So:

$$2⋅distance(slow) = distance(fast)$$
$$2(F+a) = F+a+b+a$$
$$2F+2a = F+2a+b$$
$$F = b$$

Complexity:

- time: $O(n)$
- space: $O(1)$

```py
def detectCycle(self, head: ListNode) -> ListNode:
    if not head or not head.next: return None
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast: break
    if slow is not fast: return None

    # slow and fast intersect, cycle exists
    # now finds the cycle start
    ptr1 = head
    ptr2 = slow
    while ptr1!=ptr2:
        ptr1 = ptr1.next
        ptr2 = ptr2.next
    return ptr1
```
