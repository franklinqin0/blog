---
title: Min Stack
diff: easy
tags:
  - Design
  - Stack
related:
  - max-stack
---

<img class="medium-zoom" src="/algo/min-stack.png" alt="https://leetcode.com/problems/min-stack">

See the harder related problem [Max Stack](max_stack).

## Driver Code

```py
obj = MinStack()
obj.push(val)
obj.pop()
param_3 = obj.top()
param_4 = obj.getMin()
```

## Solution

Note the requirement in the prompt: `constant time`. So need to come up w/ `getMin` in $O(1)$ time.

::: theorem Complexity
time: $O(1)$ for all operations  
space: $O(n)$
:::

### Stack of val $\rightarrow$ min Pairs

Since `current_min` is only the minimum seen below current elt and never above, we could store the value/minimum pair into the stack. Note the `not self.stack` base case.

```py
class MinStack:
    def __init__(self):
        self.stack = []

    def push(self, x: int) -> None:
        # base case
        if not self.stack:
            self.stack.append([x,x])
            return
        current_min = self.stack[-1][1]
        self.stack.append([x,min(current_min,x)])

    def pop(self) -> None:
        self.stack.pop()

    def top(self) -> int:
        return self.stack[-1][0]

    def getMin(self) -> int:
        return self.stack[-1][1]
```

### Two Stacks

Since the minimums would have many duplicates, we could instead use the `self.min_stack` to store the minima.

Note that we should also store when x equals current min. Consider this case: `self.stack` is `[2,1,1]`. If we don't store the 2nd `1` to `self.min_stack`, `getMin` on `[2,1]` would be `2`.

```py
class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, x: int) -> None:
        self.stack.append(x)
        # should also store when x equals current min
        if not self.min_stack or x<=self.min_stack[-1]:
            self.min_stack.append(x)

    def pop(self) -> None:
        if self.stack[-1]==self.min_stack[-1]:
            self.min_stack.pop()
        self.stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_stack[-1]
```

### Improved Two Stacks

We could further improve the [two stacks solution](#two-stacks) by combining the duplicates into a count.

Note that `self.min_stack` stores the `[minimum, count]` pairs.

```py
class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, x: int) -> None:
        self.stack.append(x)
        if not self.min_stack or x < self.min_stack[-1][0]:
            self.min_stack.append([x,1])
        elif x == self.min_stack[-1][0]:
            self.min_stack[-1][1]+=1

    def pop(self) -> None:
        if self.stack[-1]==self.min_stack[-1][0]:
            if self.min_stack[-1][1]>1:
                self.min_stack[-1][1]-=1
            else:
                self.min_stack.pop()
        self.stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_stack[-1][0]
```
