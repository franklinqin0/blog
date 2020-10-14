---
title: Generate Parentheses
source: LeetCode
diff: medium
tags:
  - String
  - DFS
  - Backtracking
related:
  - valid-parentheses
---

<img class="medium-zoom" src="/algo/generate-parentheses.png" alt="https://www.lintcode.com/problem/generate-parentheses">

## Solution

Complexity (bounded by the `n`-th Catalan number $\frac{1}{n+1} \binom{2n}{n} \le \frac{4^n}{\sqrt{n}}$):

- time: $O(\frac{4^n}{\sqrt{n}})$
- space: $O(\frac{4^n}{\sqrt{n}})$ due to implicit stack space

```py
def generateParenthesis(self, n: int) -> List[str]:
    res = []

    def dfs(l, r, path):
        # exit when running out of left/right parentheses
        if l == 0 and r == 0:
            res.append(path)
            return
        # error if # of ')' more than # of '('
        if r < l:
            return
        # Use a left parenthesis
        if l > 0:
            dfs(l - 1, r, path + '(')
        # Use a right parenthesis
        if r > 0:
            dfs(l, r - 1, path + ')')

    dfs(n, n, '')
    return res
```

<!-- other ways to solve: iteration, closure number, see lc's solution -->
