---
title: Decode Ways
diff: medium
tags:
  - String
  - DP
---

<img class="medium-zoom" src="/algo/decode-ways.png" alt="https://leetcode.com/problems/decode-ways">

## Solution

Both solutions take linear runtime.

### Recursive DP

```py
class Solution:
    @lru_cache(maxsize=None)
    def helper(self, idx, s):
        if idx == len(s):
            return 1
        if s[idx] == "0":
            return 0
        if idx == len(s)-1:
            return 1        
        res = self.helper(idx+1, s)
        if int(s[idx : idx+2]) <= 26:
            res += self.helper(idx+2, s)
        return res

    def numDecodings(self, s: str) -> int:
        return self.helper(0, s)
```

### Iterative DP

#### Linear Space

```py
def numDecodings(self, s: str) -> int:
    n = len(s)
    dp = [0 for _ in range(n+1)]

    dp[0] = 1 # to start the process
    dp[1] = 0 if s[0] == '0' else 1

    for i in range(2, len(dp)):
        if s[i - 1] != '0':
            dp[i] = dp[i-1]
        
        two_digits = int(s[i-2 : i])
        if two_digits >= 10 and two_digits <= 26:
            dp[i] += dp[i-2]
    return dp[n]
```

#### Constant Space

```py
def numDecodings(self, s: str) -> int:
    if not s:
        return 0

    fst, snd = 1, 0
    if s[0] != '0':
        snd = 1

    for i in range(2, len(s) + 1):
        temp = snd
        if s[i-1] == '0':
            snd = 0
        two_digits = int(s[i-2:i])
        if two_digits >= 10 and two_digits <= 26:
            snd += fst
        fst = temp
    return snd
```
