---
title: Add Two Numbers
date: 2020-02-13
categories:
 - study
tags:
 - leetcode
---

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order** and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

:::tip

- [problem](https://leetcode.com/problems/add-two-numbers/)
- [article](https://leetcode.com/articles/add-two-numbers/)
:::

<!-- more -->

## Code Snippet

The following code is before written solution:

```python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
```

## Solution

### Add by ints & Construct ListNode by Modulus

In the 1st while loop, int `sum` is calculated by int addition. In the 2nd while loop, ListNode `ln` is constructed by int modulus.

Please note that one modulus is calculated before 2nd while loop. I had to do this because Python has no do-while loop. However, there is [some workaround](https://stackoverflow.com/a/743186).

Please refer to the [next solution](#listnode-adder) for the dummy head approach to avoid the `do` part before while loop.

Complexity:

- Time: $O(\max(m,n))$
- Space: $O(\max(m,n))$

where `m` is the number of digits in `l1` and `n` is the number of digits in `l2`.

```python
def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
    sum = 0
    power = 1

    while l1 or l2:
        l1_val = l1.val if l1!=None else 0
        l2_val = l2.val if l2!=None else 0
        sum += l1_val*power + l2_val*power
        power *= 10
        l1 = l1.next if l1!=None else None
        l2 = l2.next if l2!=None else None

    # sum transformed from int to ListNode
    ln = ListNode(sum%10)
    sum = sum//10
    end = ln
    while sum:
        node = ListNode(sum%10)
        sum = sum//10
        end.next = node
        end = end.next
    return ln
```

### ListNode Adder

Different from [solution](#add-by-ints--construct-listnode-by-modulus), I DIY an adder to avoid the 2nd while loop and used the dummy head `dummy` to avoid `do` before while loop.

Complexity is the same and runtime is similar, but I like the second one more.

```python
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

## Note

### Division Operators `/` and `//`

The division operators difference in Python 2 and 3 is described [here](https://www.geeksforgeeks.org/division-operator-in-python/).

Python 2 uses `/` for **floor division** if *both arguments*(the dividend and divisor) are *integers*.

Python 2 uses `//` for **floor division** for *both int and float arguments*.

Python 3 uses `/` for **floating point division** for *both int and float arguments*.

Python 3 uses `//` for **floor division** for *both int and float arguments*.

So the behavior of “//” is same for Python 2 and 3.

Personally I like Python 3 for division behavior as it's clearer and causes less confusion.

### Simpler Ways to Calculate Values of ListNode in While Loop

The `if foo!=None then bar` thing looks quite ugly. Please see the [next problem](add_two_numbers_ii) for the while loop with 2 if statements.
