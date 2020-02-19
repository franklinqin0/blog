---
title: Multiply Strings
date: 2020-02-19
categories:
 - study
tags:
 - leetcode
---

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note:

1. The length of both `num1` and `num2` is < 110.
2. Both `num1` and `num2` contain only digits `0-9`.
3. Both `num1` and `num2` do not contain any leading zero, except the number 0 itself.
4. You **must not use any built-in BigInteger library** or **convert the inputs to integer directly**.

<!-- more -->

:::tip

- [problem](https://leetcode.com/problems/multiply-strings/)
- [article](https://leetcode.com/articles/multiply-strings/)
:::

## Solution

### Int Array

Use an int array to store the result and convert back to string.

See explanation at [here](https://leetcode.com/problems/multiply-strings/discuss/17605/Easiest-JAVA-Solution-with-Graph-Explanation).

```python
class Solution:
def multiply(self, num1: str, num2: str) -> str:
    if (num1=="0" or num2=="0"): return "0"
    prod = [0]*(len(num1)+len(num2))
    for i in range(len(num1)-1,-1,-1):
        for j in range(len(num2)-1,-1,-1):
            pos1,pos2 = i+j,i+j+1
            mul = int(num1[i])*int(num2[j])
            sum = mul + prod[pos2]
            prod[pos1] += sum//10
            prod[pos2] = sum%10

    res = ""
    for i,p in enumerate(prod):
        if not (i==0 and p==0):
            res += str(p)

    return res
```

### String as Char Array

We could calculate product of int digits and store in string.

Since `str` object in Python doesn't support item assignment, I found a C++ solution below:

```Cpp
string sum(num1.size() + num2.size(), '0');

for (int i = num1.size() - 1; 0 <= i; --i) {
    int carry = 0;
    for (int j = num2.size() - 1; 0 <= j; --j) {
        int tmp = (sum[i + j + 1] - '0') + (num1[i] - '0') * (num2[j] - '0') + carry;
        sum[i + j + 1] = tmp % 10 + '0';
        carry = tmp / 10;
    }
    sum[i] += carry;
}

size_t startpos = sum.find_first_not_of("0");
if (string::npos != startpos) {
    return sum.substr(startpos);
}
return "0";
```
