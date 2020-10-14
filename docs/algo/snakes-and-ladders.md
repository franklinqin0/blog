---
title: Snakes and Ladders
source: LeetCode
diff: medium
tags:
  - BFS
---

<img class="medium-zoom" src="/algo/snakes-and-ladders.png" alt="https://www.leetcode.com/problems/snakes-and-ladders">

## Solution

```py
def snakesAndLadders(self, board: List[List[int]]) -> int:
    N = len(board)

    # flatten 2D board to 1D board_line
    board_line = [-1]
    for i in reversed(range(N)):
        if (N-i) % 2:
            col_range = range(N)
        else:
            col_range = reversed(range(N))
        for j in col_range:
            board_line.append(board[i][j])

    dist = {1:0}
    for i in range(2, N**2+1):
        dist[i] = sys.maxsize
    queue = [1]

    while queue:
        head = queue.pop(0)
        if head == N**2: return dist[head]
        for i in range(1, 7):
            npos = min(head + i, N**2)
            # fly once if snake & ladder exist
            if board_line[npos] != -1:
                npos = board_line[npos]
            # update dist & queue
            if npos <= N**2 and dist[npos] > dist[head] + 1:
                dist[npos] = dist[head] + 1
                queue.append(npos)
    return -1
```
