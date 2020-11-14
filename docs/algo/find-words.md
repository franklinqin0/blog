---
title: Find Words
diff: medium
tags:
  - String
  - Prefix Sum
  - Binary Search
---

<img class="medium-zoom" src="/algo/find-words.png" alt="https://www.lintcode.com/problem/find-words">

## Solution

Let $n$ be length of `str` and $m$ length of `dict`. There are two pointers, `i` in `str` and `j` in `dict`.

Brute force solution is to compare 2 pointers until `i` gets to end of `str`. This is not time efficient especially when `str` is long. So we need to preprocess w/ data structures such as matrix or HashMap.

The first method is best among the following three.

### Matrix

Go from back to front, `nextpos[i][j]` is the next position of char `j` after `str[i]`. If `str[i]==j`, then `nextpos[i][j] = i`.

Complexity:

- time: $O(\max(n,m))$
- space: $O(n)$

```py
def findWords(self, str, dict):
    if not str or not dict:
        return []
    n, res = len(str), []
    nextpos = [[n]*26 for _ in range(n+1)]
    # preprocessing
    for i in reversed(range(n)):
        for j in range(26):
        nextpos.setdefault(str[i], []).append(i)
            nextpos[i][j] = nextpos[i+1][j]
            if ord(str[i]) - ord('a') == j:
                nextpos[i][j] = i
    # `nextpos` can also be dict
    # nextpos = {}
    # for i in range(n):
    #     nextpos.setdefault(str[i], []).append(i)

    # 2 pointers comparision
    for word in dict:
        # i points in str, j points in dict
        i, j, m = 0, 0, len(word)
        while i<n and j<m:
            i = nextpos[i][ord(word[j]) - ord('a')]
            if i==n: # word not found in str
                break
            i += 1
            j += 1
        if j == m:
            res.append(word)
    return res
```

### Finite Automaton

`index` records the matched position of words in `dict`. Search across `str`, if `index[j]` is at least as long as length of current word, then word is already matched. Else if char `str[i]` is equal to next char of word `j`, increment `index[j]` by 1. Note that we can't just append word to `res` as soon as `index[j] >= len(dict[j])`, as the problem requires `res` to be in dictionary order.

Complexity:

- time: $O(n*m)$
- space: $O(n)$

```py
def findWords(self, str, dict):
    n = len(dict)
    index = [0]*n
    for i in range(len(str)):
        for j in range(n):
            if index[j] >= len(dict[j]):
                continue
            if dict[j][index[j]] == str[i]:
                index[j] += 1
    res = []
    for j in range(n):
        if index[j] >= len(dict[j]):
            res.append(dict[j])
    return res
```

### HashMap & Binary Search

Helper function `binary_search` searches for `cur_index` in sorted `char_list` and returns the larger value.

`mapping` stores mappings from char in `str` to char position. For each word in `dict`, binary searches for `char` in `char_list`.

Complexity:

- time: $O(n*m)$
- space: $O(n)$

```py
def findWords(self, str, dict):
    if not str or not dict:
        return []
    mapping = collections.defaultdict(list)
    for i in range(len(str)):
        mapping[str[i]].append(i)
    res = []
    for word in dict:
        cur_index = -1
        for i in range(len(word)):
            char = word[i]
            if char not in mapping:
                break
            char_list = mapping[char]
            pos = self.binary_search(char_list, cur_index)
            if pos == -1:
                break
            cur_index = pos
            if i == len(word) - 1:
                res.append(word)
    return res

def binary_search(self, char_list, cur_index):
    if not char_list:
        return -1
    start, end = 0, len(char_list) - 1
    while start + 1 < end:
        mid = start + (end - start) // 2
        if char_list[mid] <= cur_index:
            start = mid
        else:
            end = mid
    if char_list[start] > cur_index:
        return char_list[start]
    if char_list[end] > cur_index:
        return char_list[end]
    return -1
```
