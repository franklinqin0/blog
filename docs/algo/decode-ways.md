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

### Iterative DP (linear space)

```py
def numDecodings(self, s: str) -> int:
    if not s:
        return 0
    dp = [0 for _ in range(len(s) + 1)]
    dp[0] = 1
    if s[0] != '0':
        dp[1] = 1
    for i in range(2, len(dp)):
        if s[i-1] != '0':
            dp[i] += dp[i-1]
        two_digits = int(s[i-2:i])
        print(two_digits)
        if two_digits >= 10 and two_digits <= 26:
            dp[i] += dp[i-2]
    return dp[len(s)]
```

### Iterative DP (constant space)

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

<!-- ### Recursive DP (REDO) -->
