---
title: Pick Apples
diff: medium
tags:
  - Prefix Sum
---

<img class="medium-zoom" src="/algo/pick-apples.png" alt="https://lintcode.com/problem/pick-apples">

## Solution

### Prefix Sum

Divide the array `A` into two parts and find the max sum of left and current right sum. Alice and Bob could be either left or right.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def PickApples(self, A, K, L):
    n = len(A)
    prefix_sum = [0 for _ in range(n+1)]
    for i in range(n):
        prefix_sum[i+1] = prefix_sum[i] + A[i]

    res = -1

    # if Alice takes left and Bob takes right
    A_left = B_right = 0
    for i in range(K, n+1-L):
        A_left = max(A_left, prefix_sum[i] - prefix_sum[i-K])
        B_right = prefix_sum[i+L] - prefix_sum[i]
        res = max(res, A_left + B_right)

    # if Bob takes left and Alice takes right
    B_left = A_right = 0
    for i in range(L, n+1-K):
        B_left = max(B_left, prefix_sum[i] - prefix_sum[i-L])
        A_right = prefix_sum[i+K] - prefix_sum[i]
        res = max(res, B_left + A_right)

    return res
```
