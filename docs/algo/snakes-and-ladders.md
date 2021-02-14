---
title: Snakes and Ladders
diff: medium
tags:
  - BFS
related:
  - modern-ludo
---

<img class="medium-zoom" src="/algo/snakes-and-ladders.png" alt="https://leetcode.com/problems/snakes-and-ladders">

## Solution

Let $n$ be the length of `board`.

### Implicit Graph

::: theorem Complexity
time: $O(n^2)$  
space: $O(n^2)$
:::

```py
def snakesAndLadders(self, board: List[List[int]]) -> int:
    n = len(board)

    # flatten 2D board to 1D board_line
    board_line = [-1]
    for i in reversed(range(n)):
        if (n-i) % 2:
            col_range = range(n)
        else:
            col_range = reversed(range(n))
        for j in col_range:
            board_line.append(board[i][j])

    dist = {1:0}
    for i in range(2, n**2+1):
        dist[i] = sys.maxsize
    queue = [1]

    while queue:
        head = queue.pop(0)
        if head == n**2: return dist[head]
        for i in range(1, 7):
            npos = min(head + i, n**2)
            # fly once if snake & ladder exist
            if board_line[npos] != -1:
                npos = board_line[npos]
            # update dist & queue
            if npos <= n**2 and dist[npos] > dist[head] + 1:
                dist[npos] = dist[head] + 1
                queue.append(npos)
    return -1
```
