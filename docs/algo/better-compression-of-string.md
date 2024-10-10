---
title: Better Compression of String
diff: medium
tags:
  - Hash Table
  - String
---

<img class="medium-zoom" src="/algo/better-compression-of-string.png" alt="https://leetcode.com/problems/better-compression-of-string">

## Solution

### Solution 1

This solution does not utilize the fact that count follows character.

```py
from collections import defaultdict

def is_letter(self, c):
    return c >= "a" and c <= "z"
def is_digit(self, c):
    return c >= "0" and c <= "9"

def betterCompression(self, compressed):
    """
    :type compressed: str
    :rtype: str
    """
    curr_char = "" # char
    map = defaultdict(int)
    
    i = 0
    while i <= len(compressed) - 1:
        c = compressed[i]
        if self.is_letter(c):
            curr_char = c
            i += 1

        else:
            cnt = 0
            while i <= len(compressed) - 1:
                c = compressed[i]
                if not self.is_digit(c):
                    break
                cnt = cnt * 10 + int(c)
                i += 1
        
            map[curr_char] += cnt

    res = ""
    for c in sorted(map.keys()):
        res += c
        res += str(map[c])

    return res
```

### Solution 2

This solution takes into account the constraint that count follows character and is much simpler.

```py
from collections import defaultdict

def betterCompression(self, compressed):
    """
    :type compressed: str
    :rtype: str
    """
    # curr_char = "" # char
    map = defaultdict(int)
    i = 0
    n = len(compressed)
    while i < n:
        c = compressed[i]
        start = i + 1
        i = start
        # get count
        while i < n and compressed[i].isdigit():
            i += 1
        cnt = int(compressed[start:i])
        map[c] += cnt
    
    res = ''.join([c+str(map[c]) for c in sorted(map)])
    return res
```
