---
title: Integer to Roman
diff: easy
tags:
  - Math
  - String
related:
  - roman-to-integer
---

<img class="medium-zoom" src="/algo/integer-to-roman.png" alt="https://leetcode.com/problems/integer-to-roman">

## Solution

All following three solutions take linear time.

### Many if/else Statements

A verbose but straightforward solution is done with `while` and `if/else` statements.

```py
def intToRoman(self, num: int) -> str:
    res = ""
    while num>0:
        if num>=1000:
            num -= 1000
            res += "M"
        elif num>=900:
            num -= 900
            res += "CM"
        elif num>=500:
            num -= 500
            res += "D"
        elif num>=400:
            num -= 400
            res += "CD"
        elif num>=100:
            num -= 100
            res += "C"
        elif num>=90:
            num -= 90
            res += "XC"
        elif num>=50:
            num -= 50
            res += "L"
        elif num>=40:
            num -= 40
            res += "XL"
        elif num>=10:
            num -= 10
            res += "X"
        elif num>=9:
            num -= 9
            res += "IX"
        elif num>=5:
            num -= 5
            res += "V"
        elif num>=4:
            num -= 4
            res += "IV"
        else:
            num -= 1
            res += "I"
    return res
```

### Cache into Arrays

There are 2 ways to store the mappings from number to symbol.

#### Cache Corresponding `nums` and `symbols`

```py
def intToRoman(self, num: int) -> str:
    nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    digit = 0
    res = ''
    while num>0:
        times, num = divmod(num, nums[digit])
        for _ in range(times):
            res += symbols[digit]
        digit += 1
    print(res)
    return res
```

#### Cache Remainders of Divisions

```py
def intToRoman(self, num: int) -> str:
    M = ["", "M", "MM", "MMM"]
    C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    return M[num//1000] + C[(num%1000)//100] + X[(num%100)//10] + I[num%10]
```
