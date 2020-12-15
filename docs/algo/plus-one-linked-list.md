---
title: Plus One Linked List
diff: medium
tags:
  - Linked List
---

<img class="medium-zoom" src="/algo/plus-one-linked-list.png" alt="https://leetcode.com/problems/plus-one-linked-list">

## Solution

There are many other possible solutions, but none is as good as the following one.

Let $n$ be the length of linked list.

### Rightmost Not-Nine Digit

Note:

- `sentinel` node is set to `1` for number is all `9`'s and otherwise `0`
- `not-nine` digit means all the following digits are $9$. So the not-nine digit in `2->9->1->null` is `1`, and in `0->9->9` is sentinel `0`

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def plusOne(self, head):
    sentinel = ListNode(0)
    sentinel.next = head
    # find the rightmost digit != 9
    not_nine = sentinel
    while head:
        if head.val != 9:
            not_nine = head
        head = head.next

    # increase this rightmost not-nine digit by 1
    not_nine.val += 1
    not_nine = not_nine.next

    # set all the following nines to zeros
    while not_nine:
        not_nine.val = 0
        not_nine = not_nine.next

    return sentinel if sentinel.val else sentinel.next
```
