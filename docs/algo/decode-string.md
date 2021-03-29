---
title: Decode String
diff: medium
tags:
  - Stack
  - DFS
---

<img class="medium-zoom" src="/algo/decode-string.png" alt="https://leetcode.com/problems/decode-string">

## Solution

Let $n$ be the length of the string `s`.

Both solutions take **linear** time and space.

### Stack

As a bracket may be embedded in another bracket, `res` is generated inside out w/ `stack`.

```py
def decodeString(self, s: str) -> str:
    stack = []
    res = ""
    multi = 0

    for c in s:
        if c == '[':
            stack.append((res, multi))
            res = ""
            multi = 0
        elif c == ']':
            # note that multi is for current res
            last_res, curr_multi = stack.pop()
            res = last_res + curr_multi*res
        elif '0' <= c <= '9':
            multi = 10*multi + int(c)
        else: # c is in a-z
            res += c

    return res
```

### Recursion

Start a new recursion when `s[i] == '['`, and end current recursion when `s[i] == ']'`.

```py
def decodeString(self, s: str) -> str:
    n = len(s)

    def dfs(i):
        res = ""
        multi = 0
        while i < n:
            if s[i] == '[':
                # start a new recursion
                i, temp = dfs(i+1)
                # update res and multi
                res += multi*temp
                multi = 0
            elif s[i] == ']':
                # return res and index i of ']'
                return i, res
            elif '0' <= s[i] <= '9':
                multi = 10*multi + int(s[i])
            else:
                res += s[i]
            i += 1
        return res

    return dfs(0)
```
