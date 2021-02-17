---
title: Longest Substring Without Repeating Characters
diff: medium
tags:
  - Hash Table
  - Two Pointers
  - String
---

<img class="medium-zoom" src="/algo/longest-substring-without-repeating-characters.png" alt="https://leetcode.com/problems/longest-substring-without-repeating-characters">

## Solution

Let $n$ be size of the string, $m$ the size of the charset/alphabet, and $k$ the size of the hashset, which is upper bounded by $n$ and $m$.

### Brute Force

The brute force solution is not shown.

::: theorem Complexity
time: $O(n^3)$ (a nested for loop for the sliding window and to check if unique takes $O(n)$ time)  
space: $O(\min(m,n))$ ($O(k)$ space for the sliding window)
:::

### Sliding Window Using HashSet

The idea is to use a sliding window to locate a substring, and a `hashset` to see if the new char is already seen previously.

Sliding window logic: `i` is the left boundary and `j` the right boundary. Increase `j` by 1 if `s[j]` has not occurred in the current subarray. Increase `i` if `s[j]` has occurred.

Invariant: `i`<=`j`

::: theorem Complexity
time: $O(n)$ (worst case: $O(2n)$, all characters are the same and each will be visited by both $i$ and $j$)  
space: $O(\min(m,n))$
:::

```py
def lengthOfLongestSubstring(self, s: str) -> int:
    if not s: return 0
    n = len(s)
    hashset = set()
    i = j = 0
    res = 1
    while i<n and j<n:
        if s[j] not in hashset:
            hashset.add(s[j])
            j += 1
            res = max(res, j-i)
        else:
            hashset.remove(s[i])
            i += 1
    return res
```

### Sliding Window Using HashMap

If having seen the new char in existing window, could update the left boundary to `d[val]+1` ($1$ + index of last duplicate in the window).

Several optimizations:

1. `start` and `idx` rather than `i` and `j` to refer to left and right boundaries of window
2. `enumerate` `idx` and `val`
3. `dct` to store the mapping from `val` to `idx`

::: theorem Complexity
time: $O(n)$  
space: $O(\min(m,n))$
:::

```py
def lengthOfLongestSubstring(self, s: str) -> int:
    res = 0
    start = 0
    dct = {}
    for idx, val in enumerate(s):
        if s[idx] in dct:
            start = max(start, dct[val]+1)
        res = max(res, idx-start+1)
        dct[val] = idx
    return res
```
