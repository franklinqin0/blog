---
title: Implement Queue using Stacks
source: LeetCode
diff: easy
tags:
  - Design
  - Stack
  - Queue
---

<img class="medium-zoom" src="/algo/implement-queue-using-stacks.png" alt="https://leetcode.com/problems/implement-queue-using-stacks">

## Solution

Solve using two stacks.

### Vanilla Two Stacks

Code is omitted but here is the explanation:

- `__init__`: initialize `s1` as the main stack and `s2` as auxiliary
- `push`: add the newly pushed element to the bottom of `s1`
  - move all `s1` to `s2`
  - push the new element to `s1`
  - move back old elements from `s2` to `s1`

All other operations are quite straightforward and have constant time and space complexities.

Complexity for `push`:

- time: $O(n)$
- space: $O(n)$ due to additional space taken by `s2`

### Improved Two Stacks

The new element is always pushed to `s1`. Pop elements from `s2`. If `s2` is empty, `_move` all elements from `s1` to `s2`.

Complexity for `pop`:

- time: amortized $O(1)$, worst case $O(n)$
  - normal case: if `s2` is not empty, `pop` from `s2`
  - worst case: if `s2` is empty, `_move` doesn't pop `s1` and append to `s2`
- space: $O(n)$ due to additional space taken by `s2`

All other operations are quite straightforward and have constant time and space complexities.

```py
class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.s1 = []
        self.s2 = []

    def push(self, x: int) -> None:
        """
        Push element x to the back of queue.
        """
        self.s1.append(x)

    def pop(self) -> int:
        """
        Removes the element from in front of queue and returns that element.
        """
        self._move()
        return self.s2.pop()

    def peek(self) -> int:
        """
        Get the front element.
        """
        self._move()
        return self.s2[-1]

    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        return not self.s1 and not self.s2

    def _move(self) -> None:
        if not self.s2:
            while self.s1:
                self.s2.append(self.s1.pop())
```
