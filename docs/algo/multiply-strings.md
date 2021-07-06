---
title: Multiply Strings
tags:
  - Math
  - String
---

<img class="medium-zoom" src="/algo/multiply-strings.png" alt="https://leetcode.com/problems/multiply-strings">

## Solution

### Int Array

Use an int array to store the result and convert back to string.

::: tip EPI in Python, page 44
We use the grade-school algorithm for multiplication: **multiply the 1st number by each digit of the second**, and then **add all the resulting terms.**

From a space perspective, it is better to **incrementally add the terms** rather than compute all of them individually and then add them up. The **number of digits** required for the product is **at most** $n + m$ for $n$ and $m$ digit operands, so we use an array of size $n + m$ for the result.
:::

`num1[i] * num2[j]` will be placed at indices `[i + j`, `i + j + 1]`.

See graph explanation [here](https://leetcode.com/problems/multiply-strings/discuss/17605/Easiest-JAVA-Solution-with-Graph-Explanation).

```py
def multiply(self, num1: str, num2: str) -> str:
    if (num1=="0" or num2=="0"): return "0"
    prod = [0 for _ in range(len(num1)+len(num2))]
    for i in range(len(num1)-1,-1,-1):
        for j in range(len(num2)-1,-1,-1):
            pos1, pos2 = i+j, i+j+1
            mul = int(num1[i]) * int(num2[j])
            sum = mul + prod[pos2]
            prod[pos1] += sum//10
            prod[pos2] = sum%10

    res = ""
    for i,p in enumerate(prod):
        if not (i == 0 and p == 0):
            res += str(p)

    return res
```

### String as Char Array

We could calculate product of int digits and store in string.

Since `str` object in Python doesn't support item assignment, following solution is in C++:

```cpp
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
