---
title: Queue Reconstruction by Height
source: LeetCode
diff: medium
tags:
  - Greedy
---

<img class="medium-zoom" src="/algo/queue-reconstruction-by-height.png" alt="https://www.leetcode.com/problems/queue-reconstruction-by-height">

## Solution

### Greedy

Algorithm:

- sort people:
  - in the descending order by height
  - among the guys of the same height, in the ascending order by k-values
- take guys one by one, and place them in the output array at the indexes equal to their k-values.
- return output array

Basically there are 2 steps. First, we handle the people from tallest (largest `h`) to shortest b/c the short people don't affect `k` of tall ones. People w/ lower `k` are before the higher in `res`ult. Then, we keep inserting to `k`th position the next tallest person.

```py
def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
    res = []
    people.sort(key = lambda elt: (-elt[0], elt[1]))
    for person in people:
        res.insert(person[1], person)
    return res
```

<!-- a solution by CX, still haven't understood -->
<!--
```py
def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
    n = len(people)

    res = [(n, -1) for _ in range(n)]
    people.sort(key = lambda elt: (elt[0], -elt[1]))

    idx = 0
    for i in range(n):
        if res[i][1] != -1: # already filled, continue
            continue
        j = idx
        while j<n:
            if people[j][1] == 0: # find i-th person
                break
            j += 1
        res[i] = people[j]
        for k in range(idx, j):
            # find pos of ppl w/ height <= i-th person
            pos = i
            cnt = 0
            total = people[k][1] - 1
            while cnt < total or res[pos][1] != -1:
                if res[pos][1] == -1:
                    cnt += 1
                pos += 1
            res[pos] = people[k]
        idx = j + 1

    return res
``` -->
