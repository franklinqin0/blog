---
title: Sliding Puzzle
diff: hard
tags:
  - BFS
  - Implicit Graph
related:
  - sliding-puzzle-ii
  - word-ladder
---

<img class="medium-zoom" src="/algo/sliding-puzzle.png" alt="https://www.lintcode.com/problem/sliding-puzzle">

## Solution

### Layered BFS

```py
DIRECTIONS = [(-1, 0), (1, 0), (0, -1), (0, 1)]
TARGET_STATE = "123450"
class Solution:
    """
    @param board: the given board
    @return:  the least number of moves required so that the state of the board is solved
    """
    def slidingPuzzle(self, board):
        start = self.matrixToString(board)
        queue = [start]
        vis = set()
        res = 0

        while queue:
            for _ in range(len(queue)):
                state = queue.pop(0)
                if state == TARGET_STATE:
                    return res
                for next_state in self.getNext(state):
                    if next_state not in vis:
                        vis.add(next_state)
                        queue.append(next_state)
            res += 1
        return -1

    def matrixToString(self, state_mat):
        state_str = ""
        for i in range(2):
            for j in range(3):
                state_str += str(state_mat[i][j])
        return state_str

    def getNext(self, state):
        pos = state.find('0')
        x, y = pos // 3, pos % 3
        next_states = []
        for dx, dy in DIRECTIONS:
            nx, ny = x + dx, y + dy
            if 0<=nx<2 and 0<=ny<3:
                npos = 3*nx + ny
                mn, mx = min(pos, npos), max(pos, npos)
                nstate = state[:mn] + state[mx] + state[mn+1:mx] + state[mn] + state[mx+1:]
                next_states.append(nstate)
        return next_states
```
