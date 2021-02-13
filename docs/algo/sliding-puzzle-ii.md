---
title: Sliding Puzzle II
diff: hard
tags:
  - BFS
  - Implicit Graph
related:
  - sliding-puzzle-i
  - word-ladder
---

<img class="medium-zoom" src="/algo/sliding-puzzle-ii.png" alt="https://www.lintcode.com/problem/sliding-puzzle-ii">

## Solution

Let $n$ be the number of rows and $m$ be the number of columns.

### Layered BFS

1. states are like nodes in implicit graph, while `getNext` helps find the neighbor nodes
2. convert state from matrix to string

::: theorem Complexity
time: $O(nm \cdot (nm)!)$  
space: $O(nm \cdot (nm)!)$
:::

where $V < E$ and $V$ is at most $9!$.

```py
DIRECTIONS = [(-1, 0), (1, 0), (0, -1), (0, 1)]
class Solution:
    """
    @param init_state: the initial state of chessboard
    @param final_state: the final state of chessboard
    @return: return an integer, denote the number of minimum moving
    """
    def minMoveStep(self, init_state, final_state):
        init_state_str = self.matrixToString(init_state)
        final_state_str = self.matrixToString(final_state)
        queue = [init_state_str]
        vis = set()
        res = 0
        while queue:
            for _ in range(len(queue)):
                state = queue.pop(0)
                if state == final_state_str:
                    return res
                for next_state in self.getNext(state):
                    if next_state not in vis:
                        vis.add(next_state)
                        queue.append(next_state)
            res += 1
        return -1

    def matrixToString(self, state_mat):
        """
        @param state_mat: 3 by 3 state matrix
        @return: state string of 9 chars
        """
        state_str = ''
        for i in range(3):
            for j in range(3):
                state_str += str(state_mat[i][j])
        return state_str

    def getNext(self, state):
        """
        @param state: the current state of board
        @return: a list of next states
        """
        next_states = []
        pos = state.find('0')
        x, y = divmod(pos, 3)

        for dx, dy in DIRECTIONS:
            nx, ny = x + dx, y + dy
            if not 0<=nx<3 or not 0<=ny<3:
                continue
            npos = 3*nx + ny
            mn, mx = min(npos, pos), max(npos, pos)
            nstate = state[0:mn] + state[mx] + state[mn + 1:mx] + state[mn] + state[mx + 1:]
            next_states.append(nstate)
        return next_states
```

## Follow Up

> Can you solve it with A\* algorithm?

### A\* algorithm

```py
class Solution(object):
    def slidingPuzzle(self, board):
        R, C = len(board), len(board[0])
        start = tuple(itertools.chain(*board))
        target = tuple(range(1, R*C) + [0])
        target_wrong = tuple(range(1, R*C-2) + [R*C-1, R*C-2, 0])
        pq = [(0, 0, start, start.index(0))]
        cost = {start: 0}

        expected = {(C*r+c+1) % (R*C) : (r, c)
                    for r in xrange(R) for c in xrange(C)}
        def heuristic(board):
            ans = 0
            for r in xrange(R):
                for c in xrange(C):
                    val = board[C*r + c]
                    if val == 0: continue
                    er, ec = expected[val]
                    ans += abs(r - er) + abs(c - ec)
            return ans

        while pq:
            #f = estimated distance (priority)
            #g = actual distance travelled (depth)
            f, g, board, zero = heapq.heappop(pq)
            if board == target: return g
            if board == target_wrong: return -1
            if f > cost[board]: continue

            for delta in (-1, 1, -C, C):
                nei = zero + delta
                if abs(zero / C - nei / C) + abs(zero % C - nei % C) != 1:
                    continue
                if 0 <= nei < R*C:
                    board2 = list(board)
                    board2[zero], board2[nei] = board2[nei], board2[zero]
                    board2t = tuple(board2)
                    ncost = g + 1 + heuristic(board2t)
                    if ncost < cost.get(board2t, float('inf')):
                        cost[board2t] = ncost
                        heapq.heappush(pq, (ncost, g+1, board2t, nei))

        return -1
```
