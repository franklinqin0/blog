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

## Solution

Let $n$ be the number of rows and $m$ be the number of columns. BFS takes $O(V + E) = O(nm)$ time and space.

### Layered BFS

首次遍历网格统计房屋数量，visit_numi 统计当前位置能够联通的房屋数量，只能 visit_numi=house_num 时，该处才可以设置邮局。
针对每个空地，采用朴素的 bfs 搜索即可，disnx = disnx + now.dis + 1;实现(nx,ny)点距离和的更新。
now.dis+1 每次实现当前两点间距离的更新

只不过只有一个 zombie 即 post office 但此题难点在于需要逆向考虑 逆向思维从 house 开始 BFS 否则从 empty 开始会 TLE 还是有点费脑子的 这个题告诉我们 当 TLE 时候 去集合中找找其他部分数量少的 来进行操作 尤其对这种单一操作 BFS 时间消耗大的题目

对每个 house 做 BFS， 记录每个 empty： 1. 能被多少个 house 触及 2. 这些能触及的 house 到达这个 empty 的总步数之和

如果最后每个 empty 都无法被所有 house 触及 (即不等于 house 个数)，则返回 -1 如果有能被所有 house 触及的 empty，取其最小的返回

```py
DIRECTIONS = [(1, 0), (-1, 0), (0, 1), (0, -1)]
class Solution:
    """
    @param grid: a 2D grid
    @return: An integer
    """
    def shortestDistance(self, grid):
        n, m = len(grid), len(grid[0])
        num_houses = 0
        res = sys.maxsize
        dist = [[sys.maxsize for _ in range(m)] for _ in range(n)]
        counts = [[0 for _ in range(m)] for _ in range(n)]

        def bfs(i, j):
            visited = [[False for _ in range(m)] for _ in range(n)]
            queue = [(i, j)]
            step = 0

            while queue:
                for _ in range(len(queue)):
                    x, y = queue.pop(0)

                    if dist[x][y] == sys.maxsize:
                        dist[x][y] = 0
                    dist[x][y] += step

                    for dx, dy in DIRECTIONS:
                        nx, ny = x+dx, y+dy
                        if 0<=nx<n and 0<=ny<m and visited[nx][ny]==False and grid[nx][ny]==0:
                            visited[nx][ny] = True
                            counts[nx][ny] += 1
                            # dist[nx][ny] += step
                            queue.append((nx, ny))
                # step increments by 1
                step += 1

        # BFS from houses
        for i in range(n):
            for j in range(m):
                # point is a house
                if grid[i][j]==1:
                    bfs(i, j)
                    num_houses += 1

        for i in range(n):
            for j in range(m):
                if counts[i][j]==num_houses and dist[i][j]<res:
                    res = dist[i][j]

        return res if res!=sys.maxsize else -1
```
