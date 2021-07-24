---
title: Merge Intervals
diff: medium
tags:
  - Array
  - Sort
  - Greedy
---

<img class="medium-zoom" src="/algo/merge-intervals.png" alt="https://leetcode.com/problems/merge-intervals">

## Solution

The brute-force solution represents graph as adjacency list.

### Sort

Sort by _start_ time b/c any `interval[i]` which starts before `interval[i+1]` will only overlap with `interval[i+1]` iff end time of `interval[i]` $\ge$ start time of `interval[i+1]`.

::: theorem Complexity
time: $O(n \log n)$  
space: $O(1)$
:::

```py
def merge(self, intervals: List[List[int]]) -> List[List[int]]:
    res = []
    if not intervals: return res
    intervals = sorted(intervals, key=lambda elt : elt[0])

    for interval in intervals:
        if not res or interval[0] > res[-1][1]:
            res.append(interval)
        else:
            res[-1][1] = max(res[-1][1], interval[1])
    return res
```
