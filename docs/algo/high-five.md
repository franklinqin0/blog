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

### HashMap

```py
from collections import defaultdict
def highFive(self, items: List[List[int]]) -> List[List[int]]:
    map = defaultdict(list)
    n = len(items)
    for i in range(n):
        id = items[i][0]
        score = items[i][1]
        map[id].append(score)
    
    res = []
    # for each student, sort grades and get top 5 average
    for id in sorted(map.keys()):
        scores = sorted(map[id], reverse=True)
        score_sum = 0
        for i in range(5):
            score_sum += scores[i]
        avg = score_sum // 5
        res.append([id, avg])
    
    return res
```

### Priority Queue

::: theorem Complexity
time: $O(n\log(n))$  
space: $O(n)$
:::

```py
from collections import defaultdict
from heapq import heappush

def highFive(self, items: List[List[int]]) -> List[List[int]]:
    # transform the nested list into a dict
    dct = defaultdict(list)
    for id, score in items:
        # push in lexicographic order
        heappush(dct[id], score)
        if len(dct[id]) > 5:
            # pop the smallest item
            heappop(dct[id])
    # sort the dictionary and calc top 5 avg score
    res = [[id, sum(dct[id]) // 5] for id in sorted(dct)]
    return res
```
