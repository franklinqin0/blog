---
title: Perfect Squares
diff: medium
tags:
  - Math
  - DP
  - DFS
---

<img class="medium-zoom" src="/algo/perfect-squares.png" alt="https://leetcode.com/problems/perfect-squares">

## Solution

### Brute Force (TLE)

Exponential runtime. TLE on `55`.

```py
from math import sqrt
def numSquares(self, n: int) -> int:
    square_nums = [i**2 for i in range(1, int(sqrt(n))+1)]

    def minNumSquares(k: int) -> int:
        if k in square_nums:
            return 1
        min_num = sys.maxsize
        # find the minimal value among all possible solutions
        for square in square_nums:
            if k < square:
                break
            min_num = min(min_num, minNumSquares(k-square) + 1)
        return min_num

    return minNumSquares(n)
```
