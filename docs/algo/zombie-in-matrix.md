---
title: Zombie in Matrix
diff: medium
tags:
  - BFS
related:
  - course-schedule-ii
  - number-of-big-islands
  - build-post-office-ii
---

<img class="medium-zoom" src="/algo/number-of-big-islands.png" alt="https://www.lintcode.com/problem/zombie-in-matrix">

## Input & Output

```py
@param grid: a 2D integer grid
@return: an integer
```

## Solution

Let $n$ be the number of rows and $m$ be the number of columns.

### Layered BFS

Note that `queue` is initialized with multiple points.

::: theorem Complexity
time: $O(V + E) = O(nm)$  
space: $O(V + E) = O(nm)$
:::

```py
DIRECTIONS = [(1, 0), (-1, 0), (0, 1), (0, -1)]
def zombie(self, grid):
    n, m = len(grid), len(grid[0])
    queue = []
    res = 0

    # initialize queue
    for i in range(n):
        for j in range(m):
            if grid[i][j] == 1:
                queue.append((i, j))

    # layered BFS
    while queue:
        res += 1
        for i in range(len(queue)):
            x, y = queue.pop(0)
            for dx, dy in DIRECTIONS:
                nx, ny = x+dx, y+dy
                if 0<=nx<n and 0<=ny<m and grid[nx][ny]==0:
                    grid[nx][ny] = 1
                    queue.append((nx, ny))

    # check if all people are turned into zombies
    for i in range(n):
        for j in range(m):
            if grid[i][j] == 0:
                return -1

    # minus the extra step
    return res-1
```
