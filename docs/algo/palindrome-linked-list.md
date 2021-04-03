---
title: Palindrome Linked List
diff: easy
tags:
  - Math
related:
  - palindrome-number
  - reverse-linked-list
---

<img class="medium-zoom" src="/algo/palindrome-linked-list.png" alt="https://leetcode.com/problems/palindrome-linked-list">

## Definition for Singly-Linked List

```py
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

## Solution

All solutions below take linear time.

### Linear Space

#### Two Pointers

```py
def isPalindrome(self, head: ListNode) -> bool:
    vals = []
    curr = head
    while curr:
        vals.append(curr.val)
        curr = curr.next

    return vals == vals[::-1]
```

#### Recursion

```py
def isPalindrome(self, head: ListNode) -> bool:
    self.front = head

    def check(curr=head):
        if curr:
            if not check(curr.next):
                return False
            if curr.val != self.front.val:
                return False
            self.front = self.front.next
        return True

    return check()
```

## Follow Up

::: theorem
Could you do it in $O(n)$ time and $O(1)$ space?
:::

### Constant Space

#### Fast and Slow Pointers

Need to reverse then 2nd half to save space. As good practice, should reverse it back before return.

```py
def isPalindrome(self, head: ListNode) -> bool:
    if not head:
        return True

    # find tail node of the 1st half
    fst_half_end = self.end_of_fst_half(head)
    # reverse the 2nd half
    snd_half_start = self.reverse_list(fst_half_end.next)

    # check if palindrome
    res = True
    fst, snd = head, snd_half_start
    while res and snd:
        if fst.val != snd.val:
            res = False
        fst, snd = fst.next, snd.next

    # restore linked list
    fst_half_end.next = self.reverse_list(snd_half_start)
    return res

def end_of_fst_half(self, head):
    fast = head
    slow = head
    while fast.next and fast.next.next:
        fast = fast.next.next
        slow = slow.next
    return slow

def reverse_list(self, head):
    prev = None
    curr = head
    while curr:
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    return prev
```
