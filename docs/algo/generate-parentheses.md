---
title: Generate Parentheses
diff: medium
tags:
  - String
  - DFS
  - Backtracking
related:
  - valid-parentheses
---

<img class="medium-zoom" src="/algo/generate-parentheses.png" alt="https://www.leetcode.com/problem/generate-parentheses">

## Solution

Complexity is bounded by the `n`-th Catalan number $\frac{1}{n+1} \binom{2n}{n} \le \frac{4^n}{\sqrt{n}}$.

::: theorem Complexity
time: $O(\frac{4^n}{\sqrt{n}})$  
space: $O(\frac{4^n}{\sqrt{n}})$ (due to implicit stack space)
:::

### Backtracking

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
        # use a left parenthesis
        if l > 0:
            dfs(l - 1, r, path + '(')
        # use a right parenthesis
        if r > 0:
            dfs(l, r - 1, path + ')')

    dfs(n, n, '')
    return res
```

### Closure Number

Consider the _closure number_ of a valid parentheses sequence `S`: the least `index >= 0` so that `S[0]`, `S[1]`, $\cdots$, `S[2*index+1]` is valid. Clearly, every parentheses sequence has a unique _closure number_. We can try to enumerate them individually.

Algorithm: For each closure number `c`, we know the starting and ending brackets must be at index `0` and `2*c + 1`. Then, the `2*c` elements between must be a valid sequence, plus the rest of the elements must be a valid sequence.

```py
def generateParenthesis(self, n: int) -> List[str]:
    if n == 0: return ['']
    res = []
    for i in range(n):
        for left in self.generateParenthesis(i):
            for right in self.generateParenthesis(n-1-i):
                res.append('({}){}'.format(left, right))
    return res
```
