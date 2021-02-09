---
title: Substring With At Least K Distinct Characters
diff: medium
tags:
  - String
  - Two Pointers
---

<img class="medium-zoom" src="/algo/substring-with-at-least-k-distinct-characters.png" alt="https://www.lintcode.com/problem/1375">

## Solution

Let $n$ be the length of `s`.

### Two Pointers

If the window `s[left:right]` satisfy the loop invariant: has at least `k` distinct characters, then add `n - right` to `res` (b/c these substrings definitely count), increment `left` by $1$, and see if the loop invariant still holds. If not, increment `right` by 1.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
from collections import defaultdict

class Solution:
    """
    @param s: a string
    @param k: an integer
    @return: the number of substrings there are that contain at least k distinct characters
    """
    def kDistinctCharacters(self, s, k):
        # Write your code here
        n = len(s)
        hm = defaultdict(int)
        left = 0
        res = 0

        for right in range(n):
            right_char = s[right]
            hm[right_char] += 1
            while len(hm) >= k:
                res += n - right
                left_char = s[left]
                hm[left_char] -= 1
                if hm[left_char] == 0:
                    hm.pop(left_char)
                left += 1

        return res
```
