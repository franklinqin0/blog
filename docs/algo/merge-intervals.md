---
title: Merge Intervals
source: LeetCode
diff: medium
tags:
  - Array
  - Sort
---

<img class="medium-zoom" src="/algo/merge-intervals.png" alt="https://leetcode.com/problems/merge-intervals">

## Solution

The brute-force solution represents graph as adjacency list.

### Sort

Note the use of `lamdba` function to sort by **start** time in `sorted` method.

Complexity:

- time: $O(n\log n)$
- space: $O(1)$

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
