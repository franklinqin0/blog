---
title: High Five
diff: medium
tags:
  - Array
  - Hash Table
  - Sort
---

<img class="medium-zoom" src="/algo/high-five.png" alt="https://leetcode.com/problems/high-five">

## Solution

### Priority Queue

Complexity:

- time: $O(n)$
- space: $O(n)$

```py
from collections import defaultdict
from heapq import heappush

def highFive(self, items: List[List[int]]) -> List[List[int]]:
    # transform the nested list into a dict
    dct = defaultdict(list)
    for ID, score in items:
        # push in lexicographic order
        heappush(dct[ID], score)
        if len(dct[ID]) > 5:
            # pop the smallest item
            heappop(dct[ID])
    # sort the dictionary and calc top 5 avg score
    res = [[ID, sum(dct[ID]) // 5] for ID in sorted(dct)]
    return res
```
