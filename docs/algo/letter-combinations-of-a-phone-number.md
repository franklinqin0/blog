---
title: Letter Combinations of a Phone Number
diff: medium
tags:
  - DFS
  - Backtracking
---

<img class="medium-zoom" src="/algo/letter-combinations-of-a-phone-number.png" alt="https://leetcode.com/problems/letter-combinations-of-a-phone-number">

## Solution

### Backtracking

```py
def letterCombinations(self, digits: str) -> List[str]:
    phone = {'2': ['a', 'b', 'c'],
             '3': ['d', 'e', 'f'],
             '4': ['g', 'h', 'i'],
             '5': ['j', 'k', 'l'],
             '6': ['m', 'n', 'o'],
             '7': ['p', 'q', 'r', 's'],
             '8': ['t', 'u', 'v'],
             '9': ['w', 'x', 'y', 'z']}
    res = []

    def dfs(comb, nxt):
        # if there is no more digits to check
        if len(nxt) == 0:
            # the combination is done
            res.append(comb)
        # if there are still digits to check
        else:
            # iterate over all letters which map the next available digit
            for letter in phone[nxt[0]]:
                # append the current letter to the combination
                # and proceed to the next digits
                dfs(comb + letter, nxt[1:])

    if digits:
        dfs('', digits)
    return res
```
