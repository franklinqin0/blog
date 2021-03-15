---
title: Add Two Numbers
diff: medium
tags:
  - Math
  - Linked List
related:
  - add-two-numbers-ii
  - add-binary
  - sum-of-two-integers
---

<img class="medium-zoom" src="/algo/add-two-numbers.png" alt="https://leetcode.com/problems/add-two-numbers">

## Definition for Singly-Linked List

```py
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
```

## Solution

All the following solutions achieve a linear time complexity and constant space complexity.

### Add by ints

Please refer to the [next solution](#listnode-adder) for the dummy head approach to avoid the `do` part before while loop.

::: theorem Complexity
time: $O(\max(m,n))$  
space: $O(\max(m,n))$
:::

where `m` is the number of nodes in `l1` and `n` is the number of nodes in `l2`.

```py
def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
    sum = 0
    power = 1

    # calculate int `sum` by int addition
    while l1 or l2:
        l1_val = l1.val if l1!=None else 0
        l2_val = l2.val if l2!=None else 0
        sum += l1_val*power + l2_val*power
        power *= 10
        l1 = l1.next if l1!=None else None
        l2 = l2.next if l2!=None else None

    # transform sum from int to ListNode
    ln = ListNode(sum%10)
    sum = sum//10
    end = ln

    # construct ListNode `ln` w/ int modulus
    while sum:
        node = ListNode(sum%10)
        sum = sum//10
        end.next = node
        end = end.next
    return ln
```

The `if {foo} != None then {bar}` thing looks quite ugly. A while loop with 2 if statements is cleaner.

```py
def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
    dummy = end = ListNode(0)
    next_val = carry = 0
    while l1 or l2 or carry:
        next_sum = carry
        if l1:
            next_sum += l1.val
            l1 = l1.next
        if l2:
            next_sum += l2.val
            l2 = l2.next
        carry, next_val = divmod(next_sum, 10)
        end.next = ListNode(next_val)
        end = end.next
    return dummy.next
```

### DIY ListNode Adder

Rather than adding by `int`s, we could **DIY a ListNode adder** to achieve simpler code (avoid the 2nd while loop and used the `dummy` head instead of `do` before while loop).

```py
def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
    dummy = end = ListNode(0)
    sum = 0
    carry = 0

    while l1 or l2 or carry:
        l1_val = l1.val if l1!=None else 0
        l2_val = l2.val if l2!=None else 0
        sum = l1_val + l2_val + carry
        end.next = ListNode(sum%10)
        carry = sum//10
        end = end.next
        l1 = l1.next if l1!=None else None
        l2 = l2.next if l2!=None else None

    return dummy.next
```
