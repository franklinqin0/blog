---
title: Sparse Matrix Multiplication
source: LeetCode
diff: medium
tags:
  - Array
  - Two Pointers
  - HashMap
---

<img class="medium-zoom" src="/algo/sparse-matrix-multiplication.png" alt="https://leetcode.com/problems/sparse-matrix-multiplication">

## Solution

If `A` is `n` $\times$ `m`, `B` is `m` $\times$ `t`, then C is `n` $\times$ `t`. If we calculate **sparse** matrix multiplication as normal matrix, time complexity is $O(n^3)$.

The best time we could get is $O(n^2)$, assuming number of nonzeros on each row/col of sparse matrices `A` and `B` is constant.

### Brute Force 1

Utilize the following formula to calculate each value of `C`:

$C[i][t] += A[i][j]*B[j][t]$

```py
def multiply(self, A: List[List[int]], B: List[List[int]]) -> List[List[int]]:
    n = len(A)
    m = len(A[0])
    t = len(B[0])
    C = [[0]*t for _ in range(n)]

    for i in range(n):
        for k in range(t):
            vector_sum = 0
            for j in range(m):
                vector_sum += A[i][j]*B[j][k]
            C[i][k] = vector_sum
    return C
```

### Brute Force 2

Could exchange the order to loop over `m` and `t`, so `C` is not calculated by each element, but increasingly.

```py
def multiply(self, A: List[List[int]], B: List[List[int]]) -> List[List[int]]:
    n = len(A)
    m = len(A[0])
    t = len(B[0])
    C = [[0]*t for _ in range(n)]

    for i in range(n):
        for j in range(m):
            for k in range(t):
                C[i][k] += A[i][j]*B[j][k]
    return C
```

### Improve `A`

Based on [bruce force 2](#brute-force-2), could improve time complexity(practical, not asymptotic) if `A[i][j]` is 0.

```py
def multiply(self, A: List[List[int]], B: List[List[int]]) -> List[List[int]]:
    n = len(A)
    m = len(A[0])
    t = len(B[0])
    C = [[0]*t for _ in range(n)]

    for i in range(n):
        for j in range(m):
            if A[i][j]==0:
                continue
            for k in range(t):
                C[i][k] += A[i][j]*B[j][k]
            ### last 4 lines could also be: ###
            # if A[i][j]!=0:
            #     for k in range(t):
            #         C[i][k] += A[i][j]*B[j][k]
    return C
```

### List Comprehension & Two Pointers

Use Python's list comprehension feature to record the indices and nonzero values, then `multi` calculates vector product only if **two pointers** `idx1` and `idx2` have the same value.

```py
def multiply(self, A: List[List[int]], B: List[List[int]]) -> List[List[int]]:
    m = len(A)
    n = len(A[0])
    t = len(B[0])

    row_vector = [
        [
            (j,A[i][j])
            for j in range(n)
            if A[i][j]!=0
        ]
        for i in range(m)
    ]

    col_vector = [
        [
            (j,B[j][k])
            for j in range(n)
            if B[j][k]!=0
        ]
        for k in range(t)
    ]

    C = [
        [
            self.multi(row,col)
            for col in col_vector
        ]
        for row in row_vector
    ]

    return C

def multi(self, row, col):
    i = 0
    j = 0
    res = 0 # value for C[i][j]
    while i<len(row) and j<len(col):
        idx1, val1 = row[i]
        idx2, val2 = col[j]
        if idx1<idx2:
            i += 1
        elif idx2<idx1:
            j += 1
        else:
            res += val1*val2
            i += 1
            j += 1
    return res
```

### HashMap (REDO)

We can also use a HashMap instead of list to store the mappings from indices to nonzero values.

The time and space complexities are similar to [list comprehension & two pointers](#list-comprehension--two-pointers).

```py
def multiply(self, A: List[List[int]], B: List[List[int]]) -> List[List[int]]:
    if A is None or B is None: return None
    m, n = len(A), len(A[0])
    if len(B) != n:
        raise Exception("A's column number must be equal to B's row number.")
    l = len(B[0])
    table_A, table_B = {}, {}
    for i, row in enumerate(A):
        for j, ele in enumerate(row):
            if ele:
                if i not in table_A: table_A[i] = {}
                table_A[i][j] = ele
    for i, row in enumerate(B):
        for j, ele in enumerate(row):
            if ele:
                if i not in table_B: table_B[i] = {}
                table_B[i][j] = ele
    C = [[0 for j in range(l)] for i in range(m)]
    for i in table_A:
        for k in table_A[i]:
            if k not in table_B: continue
            for j in table_B[k]:
                C[i][j] += table_A[i][k] * table_B[k][j]
    return C
```

## Follow Up

There are 2 sparse vectors w/ same dimension. Assume the number of non-zero elements is `n`, how do you calculate the vector product in $O(n)$ time?

The secret to do this lies in preprocessing the input. We can record the `(index, value)` pairs like this:

- `A = [0,0,1]` $\rightarrow$ `[2, 1]`
- `B = [3,0,0]` $\rightarrow$ `[0, 3]`

We can then do `multi` as in solution [list comprehension & two pointers](#list-comprehension-two-pointers)
