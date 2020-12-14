---
title: Rotate Image
diff: medium
tags:
  - Array
---

<img class="medium-zoom" src="/algo/rotate-image.png" alt="https://leetcode.com/problems/rotate-image">

## Solution

Do not return anything, modify matrix in-place instead.

### Transpose & Reverse

Complexity:

- time: $O(n^2)$
- space: $O(1)$

```py
def rotate(self, matrix: List[List[int]]) -> None:
    n = len(matrix)
    # transpose
    for i in range(n):
        # each element is transposed only once
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    # reverse each row
    for i in range(n):
        matrix[i].reverse()
```

### Rotate Four Rectangles

Rotate 4 rectangles in a single loop. Should be quite clear once drawing on scratch paper.

Complexity:

- time: $O(n^2)$
- space: $O(1)$

```py
def rotate(self, matrix: List[List[int]]) -> None:
    n = len(matrix)
    for i in range(n//2 + n%2):
        for j in range(n//2):
            tmp = matrix[n-j-1][i]
            matrix[n-j-1][i] = matrix[n-i-1][n-j-1]
            matrix[n-i-1][n-j-1] = matrix[j][n-i-1]
            matrix[j][n-i-1] = matrix[i][j]
            matrix[i][j] = tmp
```
