---
title: Factorization
diff: medium
tags:
  - DFS
---

<img class="medium-zoom" src="/algo/factorization.png" alt="https://lintcode.com/problem/factorization">

## Input & Output

```py
@param n: an integer
@return: a list of combination
```

## Solution

### DFS

```py
from math import sqrt
def getFactors(self, n):
    res = []

    def dfs(index, n, path):
        if len(path) != 0:
            res.append(path[:] + [n])
        for i in range(index, int(sqrt(n)) + 1):
            if n % i == 0:
                path.append(i)
                dfs(i, n//i, path)
                path.pop()

    dfs(2, n, [])
    return res
```
