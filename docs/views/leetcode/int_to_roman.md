---
title: Int to Roman
date: 2020-02-15
categories:
 - study
tags:
 - leetcode
---

Not as interesting as the reversed [Roman to Int](int_to_roman) problem.

<!-- more -->

:::tip

- [problem](https://leetcode.com/problems/integer-to-roman/)
- [article](https://leetcode.com/articles/integer-to-roman/)
:::

## Solution

### Many if/else Statements

A verbose but straightforward solution is done with `while` and `if/else` statements.

```python
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

### Less if/else Statements

Cache remainders of divisions into string arrays.

Despite shorter code and cleaner logic, there is not much difference in runtime.

```python
def intToRoman(self, num: int) -> str:
    M = ["", "M", "MM", "MMM"]
    C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    return M[num//1000] + C[(num%1000)//100] + X[(num%100)//10] + I[num%10]
```
