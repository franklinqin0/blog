---
title: Matrix Restoration
source: LintCode
diff: medium
tags:
  - Array
  - Prefix Sum
---

<img class="medium-zoom" src="/algo/matrix-restoration.png" alt="https://www.lintcode.com/problem/matrix-restoration">

## Solution

Let `grid` be `before`, and `prefix_sum` be `after`.

### Prefix Sum

From:

`prefix_sum[i][j] = prefix_sum[i][j-1] + prefix_sum[i-1][j] + grid[i][j] - prefix_sum[i-1][j-1]`

we get:

`grid[i][j] = prefix_sum[i][j] - prefix_sum[i][j-1] - prefix_sum[i-1][j] + prefix_sum[i-1][j-1]`

```py
def matrixRestoration(self, n, m, prefix_sum):
    """
    @param n: the row of the matrix
    @param m: the column of the matrix
    @param after: the matrix
    @return: restore the matrix
    """
    grid = [[0]*m for _ in range(n)]
    for i in range(n):
        for j in range(m):
            grid[i][j] = prefix_sum[i][j]
            if i>0:
                grid[i][j] -= prefix_sum[i-1][j]
            if j>0:
                grid[i][j] -= prefix_sum[i][j-1]
            if i>0 and j>0:
                grid[i][j] += prefix_sum[i-1][j-1]
    return grid
```
