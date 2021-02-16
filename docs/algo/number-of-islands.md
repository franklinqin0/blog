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

### Union Find

See more at: [Union Find in Java](/blog/interview_algo.md#union-find)

```py
DIRECTIONS = [(1, 0), (-1, 0), (0, 1), (0, -1)]
class UnionFind:
    def __init__(self, grid):
        n, m = len(grid), len(grid[0])
        self.count = 0
        self.parent = [-1 for _ in range(n*m)]
        self.rank = [0 for _ in range(n*m)]
        for i in range(n):
            for j in range(m):
                if grid[i][j] == '1':
                    self.parent[m*i+j] = m*i+j
                    self.count += 1

    def find(self, i):
        # path compression
        if self.parent[i] != i:
            self.parent[i] = self.find(self.parent[i])
        return self.parent[i]

    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py: return

        if self.rank[px] >= self.rank[py]:
            self.parent[py] = px
            if self.rank[px] == self.rank[py]:
                self.rank[px] += 1
        else:
            self.parent[px] = py
        self.count -= 1

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        n, m = len(grid), len(grid[0])
        union_find = UnionFind(grid)
        n, m = len(grid), len(grid[0])

        for i in range(n):
            for j in range(m):
                if grid[i][j] == '1':
                    for di, dj in DIRECTIONS:
                        ni, nj = i+di, j+dj
                        if 0<=ni<n and 0<=nj<m and grid[ni][nj]=='1':
                            union_find.union(m*i+j, m*ni+nj)

        return union_find.count
```

<!-- https://leetcode.com/problems/number-of-islands-ii (REDO) -->
