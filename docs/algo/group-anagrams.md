---
title: Group Anagrams
diff: medium
tags:
  - String
  - DP
---

<img class="medium-zoom" src="/algo/group-anagrams.png" alt="https://leetcode.com/problems/group-anagrams">

## Solution

Let $n$ be the length of `strs`, and $k$ the maximum length of a string in `strs`.

### Categorize by Sorted String

Sorting each string takes $O(k \log k)$ time. The for loop does it $n$ times.

Complexity:

- time: $O(nk \log k)$
- space: $O(nk)$

```py
from collections import defaultdict
def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
    dct = defaultdict(list)
    # make sure the key string is sorted
    for s in strs:
        dct[tuple(sorted(s))].append(s)
    return dct.values()
```

### Categorize by Count

Counting each string is $O(k)$. The for loop does it $n$ times.

Complexity:

- time: $O(nk)$
- space: $O(nk)$

```py
from collections import defaultdict
def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
    dct = defaultdict(list)
    # make sure the key string is sorted
    for s in strs:
        count = [0] * 26
        for c in s:
            count[ord(c) - ord('a')] += 1
        dct[tuple(count)].append(s)
    return dct.values()
```
