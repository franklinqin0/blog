---
title: Fraction to Recurring Decimal
diff: medium
tags:
  - Hash Table
  - Math
  - String
---

<img class="medium-zoom" src="/algo/fraction-to-recurring-decimal.png" alt="https://leetcode.com/problems/fraction-to-recurring-decimal">

## Solution

### HashMap

```py
class Solution:
    def fractionToDecimal(self, numerator: int, denominator: int) -> str:
        if numerator == 0:
            return "0"
        res = []
        
        if (numerator < 0) != (denominator < 0):
            res.append("-")
        n = abs(numerator)
        d = abs(denominator)
        # calc the integer part
        res.append(str(n // d))
        r = n % d
        if r == 0:
            return "".join(res)
        # n = r

        res.append(".")
        hashmap = {}
        while r != 0:
            if r in hashmap:
                res.insert(hashmap[r], "(")
                # div = 
                res.append(")")
                break
            
            hashmap[r] = len(res)
            r *= 10
            res.append(str(r // d))
            r %= d
        
        return "".join(res)
```
