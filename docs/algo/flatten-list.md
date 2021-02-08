---
title: Flatten List
diff: easy
tags:
  - Recursion
---

<img class="medium-zoom" src="/algo/flatten-list.png" alt="https://www.lintcode.com/problem/flatten-list">

## Solution

Both solutions take linear time and space.

### Recursion

```py
def flatten(self, nestedList):
    res = []
    def helper(nestedList):
        for item in nestedList:
            if isinstance(item, list):
                helper(item)
            else:
                res.append(item)
    helper(nestedList)
    return res
```

### Iteration w/ Stack

```py
def flatten(self, nestedList):
    stack = [nestedList]
    res = []
    while stack:
        top = stack.pop()
        if isinstance(top, list):
            stack.extend(reversed(top))
        else:
            res.append(top)
    return res
```
