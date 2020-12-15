---
title: Shortest Path to the Destination
diff: easy
tags:
  - BFS
---

<img class="medium-zoom" src="/algo/shortest-path-to-the-destination.png" alt="https://www.lintcode.com/problem/shortest-path-to-the-destination">

## Solution

### BFS

Note:

1. constants are separately stored
2. var `DIRECTIONS` moves `x` or `y` by $1$
3. method `is_valid` checks if a position `(x,y)` is valid

::: theorem Complexity
time: $O(mn)$ ($O(V+E)$ for BFS)  
space: $O(mn)$
:::

```py
WALL = 1
DESTINATION = 2
DIRECTIONS = [[0,-1], [0,1], [-1,0], [1,0]]

class Solution:
    """
    @param targetMap: [[int]]
    @return: nothing
    """
    def shortestPath(self, targetMap):
        if not targetMap or not targetMap[0]:
            return -1

        # initialize queue and visited set
        queue = []
        queue.append((0,0))
        visited = set()
        visited.add((0,0))
        step = 0

        while queue:
            n = len(queue)
            for _ in range(n):
                x,y = queue.pop(0)
                if targetMap[x][y]==DESTINATION:
                    return step

                for direction in DIRECTIONS:
                    next_x = direction[0] + x
                    next_y = direction[1] + y
                    if self.is_valid(next_x, next_y, targetMap, visited):
                        queue.append((next_x, next_y))
                        visited.add((next_x, next_y))
            step += 1
        return -1

    def is_valid(self, x, y, targetMap, visited):
        if not 0<=x<len(targetMap) or not 0<=y<len(targetMap[0]):
            return False
        return targetMap[x][y]!=WALL and (x,y) not in visited
```
