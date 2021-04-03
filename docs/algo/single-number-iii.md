---
title: Single Number III
diff: medium
tags:
  - Bit
related:
  - single-number
  - single-number-ii
---

<img class="medium-zoom" src="/algo/single-number-iii.png" alt="https://www.lintcode.com/problem/single-number-iii">

## Solution

### Bit Manipulation

Let 2 single numbers be `A` and `B`, then `xor_cum`, the cumulation of XOR over `nums`, is `A ^ B`. Take `last_one` as the least significant set bit of `xor_cum`. Separate the numbers w/ `1` on `last_one` from `0`. Each of the 2 single numbers belongs to one category so we can XOR to obtain.

```py
def singleNumber(self, nums: List[int]) -> List[int]:
    xor_cum = 0
    res = [0, 0]
    for num in nums:
        xor_cum ^= num

    # take any 1, in this case just last 1
    last_one = xor_cum & -xor_cum
    for num in nums:
        if last_one & num:
            res[0] ^= num
        else:
            res[1] ^= num
    return res
```
