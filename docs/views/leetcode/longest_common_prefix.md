---
title: Longest Common Prefix
date: 2020-02-13
categories:
 - study
tags:
 - leetcode
---

## Problem

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

- [problem](https://leetcode.com/problems/longest-common-prefix/)
- [article](https://leetcode.com/articles/longest-common-prefix/)

## Solution

### Horizontal Scanning

Initialize `lcp` as `strs[0]`, then go thru `strs[1]` to `strs[-1]` and truncate `lcp` if not found.

Complexity:

- Time: `O(S)`
- Space: `O(1)`

where `S` is the sum of all characters in all strings.

- best case: there are at most $n \cdot minLen$ comparisons where $minLen$ is the length of the shortest string in the array
- worst case: all `n` strings are the same

```python
def longestCommonPrefix(self, strs: List[str]) -> str:
    """
    :type strs: List[str]
    :rtype: str
    """
    if not strs: return ""
    # if len(strs) == 1: return strs[0]

    lcp = strs[0]
    for i in range(1,len(strs)):
        while strs[i].find(lcp)!=0:
            lcp = lcp[:-1]
    return lcp
```

### Vertical Scanning

- best case: `strs[0] == ""`
- worst case: same as that in [Horizontal Scanning](#horizontal-scanning).

```python
def longestCommonPrefix(self, strs: List[str]) -> str:
    """
    :type strs: List[str]
    :rtype: str
    """
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

Complexity:

- Time: `O($n \log n$)`
- Space: `O(1)`

```python
def longestCommonPrefix(self, strs: List[str]) -> str:
    """
    :type strs: List[str]
    :rtype: str
    """
    if not strs: return ""
    if len(strs) == 1: return strs[0]

    strs.sort()
    lcp = ""

    for s,t in zip(strs[0], strs[-1]):
        if s == t: lcp += s
        else: break
    return lcp
```