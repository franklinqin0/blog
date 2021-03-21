---
title: Number of Big Islands
diff: medium
tags:
  - BFS
related:
  - course-schedule-ii
  - zombie-in-matrix
  - build-post-office-ii
---

<img class="medium-zoom" src="/algo/number-of-big-islands.png" alt="https://www.lintcode.com/problem/number-of-big-islands">

## Input Parameters

```py
@param grid: a 2d boolean array
@param k: an integer
@return: the number of Islands
```

## Solution

Let $n$ be the number of rows and $m$ be the number of columns.

### BFS

::: theorem Complexity
time: $O(V + E) = O(nm)$  
space: $O(V + E) = O(nm)$
:::

```py
DIRECTIONS = [(1, 0), (-1, 0), (0, 1), (0, -1)]
def numsofIsland(self, grid, k):
    n, m = len(grid), len(grid[0])

    def bfs(i, j):
        queue = [(i, j)]
        size = 0

        while queue:
            x, y = queue.pop(0)
            for dx, dy in DIRECTIONS:
                nx, ny = x+dx, y+dy
                if 0<=nx<n and 0<=ny<m and grid[nx][ny]:
                    size += 1
                    grid[nx][ny] = False
                    queue.append((nx, ny))

        return size

    res = 0
    for i in range(n):
        for j in range(m):
            if grid[i][j] and bfs(i, j) >= k:
                res += 1
    return res
```
