---
title: Substring With At Least K Distinct Characters
diff: medium
tags:
  - String
  - Two Pointers
---

<img class="medium-zoom" src="/algo/substring-with-at-least-k-distinct-characters.png" alt="https://www.lintcode.com/problem/substring-with-at-least-k-distinct-characters">

## Input Parameters

```py
@param s: a string
@param k: an integer
@return: the number of substrings there are that contain at least k distinct characters
```

## Solution

Let $n$ be the length of the string `s`.

### Two Pointers

If the window `s[left:right]` satisfy the loop invariant: has at least `k` distinct characters, then add `n - right` to `res` (b/c these substrings definitely count), increment `left` by $1$, and see if the loop invariant still holds. If not, increment `right` by $1$.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
from collections import defaultdict
def kDistinctCharacters(self, s, k):
    n = len(s)
    hashmap = defaultdict(int)
    left = 0
    res = 0

    for right in range(n):
        right_char = s[right]
        hashmap[right_char] += 1
        while len(hashmap) >= k:
            res += n - right
            left_char = s[left]
            hashmap[left_char] -= 1
            if hashmap[left_char] == 0:
                hashmap.pop(left_char)
            left += 1

    return res
```
