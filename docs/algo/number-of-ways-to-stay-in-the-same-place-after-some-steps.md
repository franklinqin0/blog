---
title: Number of Ways to Stay in the Same Place After Some Steps
source: LeetCode
diff: hard
tags:
  - DP
  - DFS
---

<img class="medium-zoom" src="/algo/number-of-ways-to-stay-in-the-same-place-after-some-steps.png" alt="https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps">

## Solution

First of all, that's a long title :joy:

This problem is actually `hard` if done in DP, but DFS is easier.

### DFS

::: danger fail on LeetCode
There is a [similar problem on LintCode](https://www.lintcode.com/problem/number-of-ways-to-stay-in-the-same-place-after-some-steps-i) but would pass b/c the `steps` is only upto `15`. However, on LeetCode, **the DFS solution would fail** as `steps` is upto `500`.
:::

Base conditions for DFS recursion:

- `pos` out of array, return `0`
- `steps` is 0 and return `pos==0` (could further be simplified to: `if pos==steps: return 1`)
- `pos>steps`, not enough steps to go back to starting point, return `0` (this condition prunes some branches and would avoid TLS at input `steps=15`, `arrLen=8`)

If we don't have the condition `if pos>steps` to eliminate branches, would TLS on input `steps=15`, `arrLen=8`.

Complexity:

- time: $O(3^n)$ where `n` is `steps`
- space: $O(3^n)$ (implicit stack space is the max width of tree)

```py
def numWays(self, steps: int, arrLen: int) -> int:
    MOD = 10**9 + 7

    def dfs(steps, pos) -> int:
        if pos<0 or pos>=arrLen:
            return 0
        if steps==0:
            return pos==0
        # can't get back
        if pos>steps:
            return 0
        return (dfs(steps-1, pos) + dfs(steps-1, pos-1) + dfs(steps-1, pos+1))%MOD

    return dfs(steps,0)
```

### Recursive DP - Cheating

Basically the same as [DFS](#dfs), but cache the calculated values using decorator `lru_cache` in `functools` to store some branches' result.

Import:

```py
from functools import lru_cache
```

Use:

```py
@lru_cache(None)
def dfs(steps, pos) -> int:
# same as before
```

### Recursive DP (REDO)

C++
https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/discuss/436117/C%2B%2B-Recursive-DP-(Memoization)

Python
https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/discuss/436677/Python-DP
