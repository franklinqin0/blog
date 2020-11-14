---
title: Max Stack
diff: medium
tags:
  - Design
  - Stack
  - Heap
  - TreeMap
related:
  - min-stack
---

<img class="medium-zoom" src="/algo/max-stack.png" alt="https://leetcode.com/problems/max-stack">

See the easier related problem [Min Stack](min_stack.md).

## Solution

### Two Stacks

It's actually **not that straightforward** to generalize from the [vanilla min stack solution](min_stack#stack-of-val-min-pairs), as the additional function `popMax` requires storing elements above the max into `tmp` and pushing back after popping the max.

Complexity:

- time: $O(n)$
- space: $O(n)$

```py
class MaxStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []

    def push(self, x: int) -> None:
        if not self.stack:
            self.stack.append([x,x])
        else:
            self.stack.append([x,max(x,self.stack[-1][1])])

    def pop(self) -> int:
        return self.stack.pop()[0]

    def top(self) -> int:
        return self.stack[-1][0]

    def peekMax(self) -> int:
        return self.stack[-1][1]

    def popMax(self) -> int:
        max_val = self.peekMax()
        tmp = []
        while max_val != self.stack[-1][0]:
            tmp.append(self.pop())

        # IMPT: remove the max value from the stack
        self.pop()
        # ???: can't get this to work
        # map(self.push, reversed(tmp))
        while tmp:
            self.push(tmp.pop())
        return max_val
```

### Heap/TreeMap (REDO)

will come back once doing `heap`

- https://leetcode.com/problems/max-stack/discuss/140017/Fast-and-Simple-Python-Solution-(lazy-updates-beating-100)
- https://leetcode.com/problems/max-stack/discuss/309621/Python-using-stack-%2B-heap-%2B-set-with-explanation-and-discussion-of-performance
