---
title: First Unique Character in a String
diff: easy
tags:
  - Hash Table
  - String
  - Queue
---

<img class="medium-zoom" src="/algo/first-unique-character-in-a-string.png" alt="https://leetcode.com/problems/first-unique-character-in-a-string">

## Solution

### HashMap

```py
class Solution(object):
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        from collections import defaultdict
        cnt = defaultdict(int)

        for c in s:
            cnt[c] += 1
        
        for i in range(len(s)):
            if cnt[s[i]] == 1:
                return i
        
        return -1
```
