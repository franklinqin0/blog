---
title: Wood Cut
diff: medium
tags:
  - Binary Search
---

<img class="medium-zoom" src="/algo/wood-cut.png" alt="https://www.lintcode.com/problem/wood-cut">

## Solution

Let $n$ be the length of `L`.

### Binary Search

Initialize `start` and `end` of binary search to be `1` and `max(L)`, respectively. Then do binary search and cut search space in half. Caveat is to choose either `start` or `end` that returns `k` pieces cut.

::: theorem Complexity
time: $O(n\log n)$ (binary search has $O(\log n)$ iterations, `piece` takes )  
space: $O(1)$
:::

```py
def woodCut(self, L, k):
    # helper function, returns # of pieces cut
    def piece(cut_len):
        res = 0
        for l in L:
            res += l//cut_len
        return res

    # edge case: L==[]
    if not L:
        return 0

    # binary search
    start, end = 1, max(L)
    while start+1<end:
        mid = (start+end)//2
        if piece(mid)>=k:
            start = mid
        else:
            end = mid

    # now start+1==end, so choose the one that returns k pieces
    if piece(end) >= k:
        return end
    if piece(start) >= k:
        return start
    return 0
```
