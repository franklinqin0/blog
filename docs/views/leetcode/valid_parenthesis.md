---
title: Valid Parenthesis
date: 2020-02-14
categories:
 - study
tags:
 - leetcode
---

Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

:::tip

- [problem](https://leetcode.com/problems/valid-parentheses/)
- [article](https://leetcode.com/articles/valid-parentheses/)
:::

<!-- more -->

## Solution

### Stack (REC)

In Python, stack is `[]` and dictionary is `{}`.

Add `'('`, `'{'`, `'['` into `stack`, if the corresponding closing sign matches with stack top, pop the stack. Finally, check if stack is empty.

Complexity:

- Time: $O(n)$
- Space: $O(n)$

where `n` is the length of `s`.

```python
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

### String Replace (XREC)

Use Python's `str.replace` method, but runtime would be much slower.

```python
def isValid(self, s: str) -> bool:
    while "()" in s or "[]" in s or "{}" in s:
        s = s.replace("()","").replace("[]","").replace("{}","")
    return s==""
```
