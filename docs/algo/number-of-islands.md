---
title: Number of Islands
diff: medium
tags:
  - BFS
  - DFS
  - Union Find
related:
  - number-of-islands-ii
---

<img class="medium-zoom" src="/algo/number-of-islands.png" alt="https://leetcode.com/problems/number-of-islands">

## Solution

Let $n$ be the number of rows and $m$ be the number of columns.

### BFS

::: theorem Complexity
time: $O(V + E) = O(nm)$  
space: $O(V + E) = O(nm)$
:::

```py {13}
DIRECTIONS = [(1, 0), (-1, 0), (0, 1), (0, -1)]
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        n, m = len(grid), len(grid[0])
        queue = []
        res = 0

        def bfs(i, j):
            queue = [(i, j)]
            grid[i][j] = '0'

            while queue:
                x, y = queue.pop(0)
                for dx, dy in DIRECTIONS:
                    nx, ny = x+dx, y+dy
                    if 0<=nx<n and 0<=ny<m and grid[nx][ny]=='1':
                        grid[nx][ny] = '0'
                        queue.append((nx, ny))

        for i in range(n):
            for j in range(m):
                if grid[i][j] == '1':
                    bfs(i, j)
                    res += 1
        return res
```

### DFS

::: theorem Complexity
time: $O(V + E) = O(nm)$  
space: $O(V + E) = O(nm)$
:::

```py {13}
DIRECTIONS = [(1, 0), (-1, 0), (0, 1), (0, -1)]
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        n, m = len(grid), len(grid[0])
        queue = []
        res = 0

        def dfs(i, j):
            queue = [(i, j)]
            grid[i][j] = '0'

            while queue:
                x, y = queue.pop()
                for dx, dy in DIRECTIONS:
                    nx, ny = x+dx, y+dy
                    if 0<=nx<n and 0<=ny<m and grid[nx][ny]=='1':
                        grid[nx][ny] = '0'
                        queue.append((nx, ny))

        for i in range(n):
            for j in range(m):
                if grid[i][j] == '1':
                    dfs(i, j)
                    res += 1
        return res
```
