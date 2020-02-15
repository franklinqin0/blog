---
title: Add Two Numbers II
date: 2020-02-13
categories:
 - study
tags:
 - leetcode
---

You are given two **non-empty** linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

[*Follow up:*](#follow-up)

What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

:::tip

- [problem](https://leetcode.com/problems/add-two-numbers-ii/)

See the easier related problem [Add Two Numbers](add_two_numbers).
:::

<!-- more -->

## Solution

Among the following solutions, [1st](#reverse-linked-list-and-construct-listnode-adder) solution is easiest to think of but need to think about steps of reversing a singly linked list. [2nd](#stack) solution could be thought of when LIFO rings a bell. [last](#recursion) solution could be thought of but takes time to implement.

### Reverse Linked List and Construct ListNode Adder

Create a nested function `reverseList` to reverse the two input linked list and then construct a ListNode adder, similar as [before](add_two_numbers).

Complexity:

- Time: $O(m+n)$
- Space: $O(m+n)$

where `m` is the number of digits in `l1` and `n` is the number of digits in `l2`.

```python
def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
    def reverseList(l: ListNode) -> ListNode:
        prev = None
        curr = l

        while curr:
            # IMPT: remember the steps to reverse a singly linked list
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        return prev

    new_l1 = reverseList(l1)
    new_l2 = reverseList(l2)

    carry = 0
    end = dummy = ListNode(0)
    while new_l1 or new_l2 or carry:
        if new_l1:
            carry += new_l1.val
            new_l1 = new_l1.next
        if new_l2:
            carry += new_l2.val
            new_l2 = new_l2.next
        end.next = ListNode(carry%10)
        end = end.next
        carry = carry//10

    return reverseList(dummy.next)
```

---

The follow up says:

> What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

That's very much like an interview question! There are two ways: stack and recursion.

### Stack

Initialize two stacks for `l1` and `l2` respectively: `l1_stack` and `l2_stack`. After appending, I then pop each stack and calculate the sum. Note that now sum is also reversed, so the way to construct is different from previous question.

Also note that there is another way to do stack in Python: `from collections import deque` and initialize a stack as `deque()` rather than list `[]`.

Both time and space complexity are the same.

```python
def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
    l1_stack = []
    l2_stack = []

    while l1:
        l1_stack.append(l1.val)
        l1 = l1.next
        # l1_len += 1
    while l2:
        l2_stack.append(l2.val)
        l2 = l2.next
        # l2_len += 1

    l1_len = len(l1_stack)
    l2_len = len(l2_stack)

    head = temp = None
    i = j = 0
    carry = 0

    while i<l1_len or j<l2_len or carry:
        if i<l1_len:
            carry += l1_stack.pop()
            i += 1
        if j<l2_len:
            carry += l2_stack.pop()
            j += 1
        temp = ListNode(carry%10)
        temp.next = head
        head = temp
        carry //= 10

    return head
```

### Recursion

Frankly, I copied most of the following code, as the recursive function `add_list` is not easy to write(especially what vars to return). The idea is:

1. get the difference in length of `l1` and `l2`
2. **IMPT**: recursively add two lists and return `head` and `new_carry`. Note that `diff` decreases only when `ln1` is longer than `ln2`
3. if there is a leftmost carry, make it head and return

Both time and space complexity are the same.

```python
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        def get_len(l: ListNode) -> int:
            length = 0
            while l:
                l = l.next
                length += 1
            return length

        def add_lists(ln1: ListNode, ln2: ListNode, diff: int) -> (ListNode, int):
            if ln1 is None and ln2 is None:
                return None, 0
            if diff>0:
                # currently ln1 is longer than ln2
                # move the pointer at list1 to n1.next, don't move the pointer at list2
                next_node, carry = add_lists(ln1.next, ln2, diff-1)
                carry += ln1.val
            else:
                next_node, carry = add_lists(ln1.next, ln2.next, diff)
                carry += ln1.val + ln2.val
            new_val, new_carry = carry%10, carry//10
            head = ListNode(new_val)
            head.next = next_node
            return head, new_carry

        l1_len, l2_len = get_len(l1), get_len(l2)
        # always keep len(ln1) > len(ln2)
        if l1_len < l2_len:
            l1_len, l2_len = l2_len, l1_len
            l1, l2 = l2, l1
        diff = l1_len - l2_len
        head, carry = add_lists(l1, l2, diff)
        # handle the leftmost carry
        if carry:
            c = ListNode(carry)
            c.next = head
            head = c
        return head
```
