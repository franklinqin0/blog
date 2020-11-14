---
title: Implement Stack using Queues
diff: easy
tags:
  - Design
  - Stack
  - Queue
---

<img class="medium-zoom" src="/algo/implement-stack-using-queues.png" alt="https://leetcode.com/problems/implement-stack-using-queues">

## Solution

There is no need to implement using 2 queues, as a queue does not change the order of elements after popping and pushing.

### One Queue

There are 2 similar implementations w/ similar runtime: built-in list `[]` or `collections.deque`.

Complexity:

- time: push $O(1)$, pop $O(n)$
- space: $O(1)$

#### Built-in List

```py
class MyStack:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self._q = []

    def push(self, x: int) -> None:
        """
        Push element x onto stack.
        """
        self._q.append(x)
        for _ in range(1,len(self._q)):
            self._q.append(self._q[0])
            self._q.pop(0)

    def pop(self) -> int:
        """
        Removes the element on top of the stack and returns that element.
        """
        return self._q.pop(0)

    def top(self) -> int:
        """
        Get the top element.
        """
        return self._q[0]

    def empty(self) -> bool:
        """
        Returns whether the stack is empty.
        """
        return not self._q
```

### Deque

```py
from collections import deque

class MyStack:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self._q = deque()

    def push(self, x: int) -> None:
        """
        Push element x onto stack.
        """
        self._q.append(x)
        for _ in range(1,len(self._q)):
            self._q.append(self._q.popleft())

    def pop(self) -> int:
        """
        Removes the element on top of the stack and returns that element.
        """
        return self._q.popleft()

    def top(self) -> int:
        """
        Get the top element.
        """
        return self._q[0]

    def empty(self) -> bool:
        """
        Returns whether the stack is empty.
        """
        return not self._q
```
