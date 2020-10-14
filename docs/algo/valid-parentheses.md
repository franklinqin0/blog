---
title: Valid Parenthesis
tags:
  - String
  - Stack
---

<img class="medium-zoom" src="/algo/valid-parentheses.png" alt="https://leetcode.com/problems/valid-parentheses">

## Solution

The [stack](#stack) solution is preferred over the [string replace](#string-replace) one.

### Stack

In Python, stack is `[]` and dictionary is `{}`.

Add `'('`, `'{'`, `'['` into `stack`, if the corresponding closing sign matches with stack top, pop the stack. Finally, check if stack is empty.

Complexity:

- Time: $O(n)$
- Space: $O(n)$

where `n` is the length of `s`.

```py
def isValid(self, s: str) -> bool:
    # build a dict
    dict = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    stack = []
    for c in s:
        if c in dict:
            stack.append(c)
        elif len(stack) and c==dict.get(stack[-1]):
            stack.pop()
        else:
            return False
    return len(stack)==0
```

### String Replace

Use Python's `str.replace` method, but runtime would be much slower.

```py
def isValid(self, s: str) -> bool:
    while "()" in s or "[]" in s or "{}" in s:
        s = s.replace("()","").replace("[]","").replace("{}","")
    return s==""
```
