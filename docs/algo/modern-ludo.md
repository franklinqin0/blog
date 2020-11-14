---
title: Modern Ludo
diff: medium
tags:
  - BFS
---

<img class="medium-zoom" src="/algo/modern-ludo.png" alt="https://www.lintcode.com/problem/modern-ludo-i">

## Solution

Note:

1. The dice enables positions `2` to `7` to be reached in 1 step from position `1`. It is a bit misleading as the dice has nothing to do w/ probability
2. For each starting point in `connections`, there might be multiple destinations $\rightarrow$ choose a smaller value to store in `dist`
3. A position can reach from `1` to `10` by two connections: `[1, 5]` and `[5, 10]`
4. A node will be revisited and `dist` would update if the new value is smaller. So it's not a traditional BFS requiring a `visited` set.

```py
class Solution:
    """
    @param length: the length of board
    @param connections: the connections of the positions
    @return: the minimum steps to reach the end
    """
    def modernLudo(self, length, connections):
        queue = [1]
        dist = {1: 0}
        for d in range(2, length+1):
            dist[d] = sys.maxsize

        while queue:
            head = queue.pop(0)
            for dx in range(1, 7):
                npos = head + dx
                if npos <= length and dist[npos] > dist[head] + 1:
                    dist[npos] = dist[head] + 1
                    queue.append(npos)

            for k in range(len(connections)):
                if (head == connections[k][0] and dist[head] < dist[connections[k][1]]):
                    dist[connections[k][1]] = dist[head]
                    queue.append(connections[k][1])

        return dist[length]
```
