---
title: Longest Common Prefix
diff: easy
tags:
  - String
---

<img class="medium-zoom" src="/algo/longest-common-prefix.png" alt="https://leetcode.com/problems/longest-common-prefix">

## Solution

Let `lcp` mean "longest common prefix" and $S$ be the summed length of all strings.

### Horizontal Scanning

Initialize `lcp` as `strs[0]`, then iterate thru `strs[1:]` and truncate `lcp` by ending char if not found.

The commented line handles the case when only 1 string is in list. Not needed for this solution, but important for following ones.

::: theorem Complexity
time: $O(S)$

- best case: there are at most $n \cdot minLen$ comparisons ($minLen$ is the length of the shortest string in the array)
- worst case: all `n` strings are the same

space: $O(1)$
:::

```py
def longestCommonPrefix(self, strs: List[str]) -> str:
    if not strs: return ""
    # if len(strs) == 1: return strs[0]

    lcp = strs[0]
    for i in range(1,len(strs)):
        while strs[i].find(lcp)!=0:
            lcp = lcp[:-1]
    return lcp
```

### Vertical Scanning

Vertically scan thru `strs[1:]` to see if each string has the `i`th char is the same as `strs[0][i]`. If not, return `strs[0][:i]`. After nested for loop, return the `lcp` as `strs[0]`.

Similar to [horizontal scanning](#horizontal-scanning), vertical scanning has same time & space complexity.

::: theorem Complexity
time: $O(S)$

- best case: `strs[0] == ""`
- worst case: all `n` strings are the same (same as that in [Horizontal Scanning](#horizontal-scanning))

space: $O(1)$
:::

```py
def longestCommonPrefix(self, strs: List[str]) -> str:
    if not strs: return ""
    if len(strs) == 1: return strs[0]

    for i in range(0,len(strs[0])):
        c = strs[0][i]
        for j in range(1, len(strs)):
            if i==len(strs[j]) or strs[j][i] != c:
                return strs[0][:i]
    return strs[0]
```

### Sort & Compare 1st and last

Sort `strs` s.t. elements are in alphabetical order. Then `zip` the 1st and last strings to extract the `lcp`. Very elegant solution!

::: theorem Complexity
time: $O(n \log n)$  
space: $O(1)$
:::

```py
def longestCommonPrefix(self, strs: List[str]) -> str:
    if not strs: return ""
    if len(strs) == 1: return strs[0]

    strs.sort()
    lcp = ""

    for s,t in zip(strs[0], strs[-1]):
        if s == t: lcp += s
        else: break
    return lcp
```
