---
title: Longest Substring Without Repeating Characters
date: 2020-02-19
categories:
 - study
tags:
 - leetcode
---

Given a string, find the length of the longest substring without repeating characters.

<!-- more -->

:::tip

- [problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- [article](https://leetcode.com/articles/longest-substring-without-repeating-characters/)
:::

## Solution

### Brute Force

The brute force solution is not shown.

Complexity:

- Time: $O(n^3)$ 
  - a nested for loop for the window and to check if unique takes $O(n)$ time
- Space: $O(\min(m,n))$
  - need O(k)O(k) space for the sliding window, where kk is the size of the Set. The size of the Set is upper bounded by the size of the string nn and the size of the charset/alphabet $m$

### Sliding Window Using HashSet

The idea is to use a sliding window (HashSet/HashMap) to see if the new char is already seen previously.

Complexity:

- Time: $O(2n) = O(n)$
  - in the worst case each character will be visited twice by $i$ and $j$
- Space: $O(\min(m,n))$
  - same as the previous approach

```python
def lengthOfLongestSubstring(self, s: str) -> int:
    if not s: return 0
    n = len(s)
    st = set()
    i = j = 0
    res = 1
    while i<n and j<n:
        if s[j] not in st:
            st.add(s[j])
            j += 1
            res = max(res, j-i)
        else:
            st.remove(s[i])
            i += 1
    return res
```

### Sliding Window Using HashMap

If having seen the new char in existing window, could update the left boundary to `d[elt]+1` (`1 + index of last duplicate in the window`).

How do we update more quickly?

Several optimizations:

1. stop using `i` and `j` to refer to left and right boundaries of window, but `start` and `idx`
2. `enumerate` could save `s[idx]` into `elt`
3. to store the **index as value** in addition to element as key in the dictionary

```python
def lengthOfLongestSubstring(self, s: str) -> int:
    res = 0
    start = 0
    d = {}
    for idx,elt in enumerate(s):
        if s[idx] in d:
            start = max(start,d[elt]+1)
        res = max(res,idx-start+1)
        d[elt] = idx
    return res
```
