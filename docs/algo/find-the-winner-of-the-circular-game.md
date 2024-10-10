---
title: Find the Winner of the Circular Game
diff: medium
tags:
  - DFS
  - Backtracking
---

<img class="medium-zoom" src="/algo/find-the-winner-of-the-circular-game.png" alt="https://leetcode.com/problems/find-the-winner-of-the-circular-game">

## Solution

### Simulation with Queue

::: theorem Complexity
time: $O(n k)$  
space: $O(n)$
:::


```py
from collections import deque

class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        # init deque w/ n friends
        circle = deque(range(1, n+1))

        # perform eliminations while more than 1 player remains
        while len(circle) > 1:
            # process the 1st k-1 friends w/o eliminating them
            for _ in range(k-1):
                circle.append(circle.popleft())
            circle.popleft()
        
        return circle[0]
```

### Recursion

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

$$f(n, k) = (f(n-1, k) + k) \mod n$$

```py
class Solution:
    def winnerHelper(self, n, k):
        if n == 1:
            return 0
        return (self.winnerHelper(n-1, k) + k) % n

    def findTheWinner(self, n: int, k: int) -> int:
        return 1 + self.winnerHelper(n, k)
```

### Iteration

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        # return 1 + self.winnerHelper(n, k)
        num = res = 0
        while num < n:
            num += 1
            res = (res + k) % num
            
        return res + 1
```
