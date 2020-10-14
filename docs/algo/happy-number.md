---
title: Happy Number
source: LeetCode
diff: easy
tags:
  - Math
  - Hash Table
  - Linked List
related:
  - linked-list-cycle
  - linked-list-cycle-ii
---

<img class="medium-zoom" src="/algo/happy-number.png" alt="https://leetcode.com/problems/happy-number">

## Solution

First we need to realize that `n` will not go to infinity after experimented w/ $9...9$.

So there are only 2 cases for `n`:

1. eventually gets to 1
2. stuck in a cycle

So we need to detect if there is a cycle.

### Detect Cycles w/ HashSet

Complexity:

- time: $O(\log n)$
- space: $O(\log n)$ due to the HashSet

```py
def isHappy(self, n: int) -> bool:
    def get_next(n):
        csum = 0
        while n > 0:
            n, digit = divmod(n, 10)
            csum += digit**2
        return csum

    st = set()
    while n != 1 and n not in st:
        st.add(n)
        n = get_next(n)
    return n==1
```

### Floyd's Cycle-Finding Algorithm

Repeatedly calling `get_next(n)` is like a linked list but we don't have to store nodes and pointers.

Floyd's Cycle-Finding Algorithm has _2 runners_: `slow` and `fast`. For each step, `slow` goes forward by 1 number and `fast` by 2.

If `n` is a happy number, `fast` will eventually get to `1`. Else, `slow` and `fast` will equal.

Complexity:

- time: $O(\log n)$
- space: $O(1)$

```py
def isHappy(self, n: int) -> bool:
    def get_next(n):
        csum = 0
        while n > 0:
            n, digit = divmod(n, 10)
            csum += digit**2
        return csum

    slow = n
    fast = get_next(n)
    while fast!=1 and slow!=fast:
        slow = get_next(slow)
        fast = get_next(get_next(fast))
    return fast==1
```
