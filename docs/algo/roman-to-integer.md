---
title: Roman to Integer
source: LeetCode
diff: easy
tags:
  - Math
  - String
related:
  - integer-to-roman
---

<img class="medium-zoom" src="/algo/roman-to-integer.png" alt="https://leetcode.com/problems/roman-to-integer">

## Solution

All following three solutions take linear time.

### Many if/else Statements w/ Dictionary

I came up w/ the following solution at first:

```py
def romanToInt(self, s: str) -> int:
    dict = {'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000}
    i = len(s)-1
    sum = 0
    while (i>0):
        cur = s[i]
        pre = s[i-1]
        if cur=='V' and pre=='I':
            sum += 4
            i -= 2
        elif cur=='X' and pre=='I':
            sum += 9
            i -= 2
        elif cur=='L' and pre=='X':
            sum += 40
            i -= 2
        elif cur=='C' and pre=='X':
            sum += 90
            i -= 2
        elif cur=='D' and pre=='C':
            sum += 400
            i -= 2
        elif cur=='M' and pre=='C':
            sum += 900
            i -= 2
        else:
            sum += dict[cur]
            i -= 1
    if i==0:
        sum += dict[s[0]]
    return sum
```

### Less if/else Statements w/ Dictionary

Then I had two observations:

1. the final `if` is quite annoying -> iterate `i` from `len(s)-1` to 0, compare `cur` and `next` instead
2. positive number if `cur`>`next`, negative number if `cur`<`next` -> much less `if/else` statements

Despite shorter code and cleaner logic, there is not much difference in runtime.

```py
def romanToInt(self, s: str) -> int:
    dict = {'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000}
    i = len(s)-2
    sum = dict[s[-1]]
    while i>-1:
        cur = s[i]
        nxt = s[i+1]
        if dict[cur]>=dict[nxt]:
            sum += dict[cur]
        else:
            sum -= dict[cur]
        i -= 1
    return sum
```

### Switch Statements w/o Dictionary

We could've used `switch` statements to avoid initializing the `dict` and so many `if/else` statements. Logic needs to update since we had both `cur` and `nxt` rather than 1 var.

Since Python doesn't have `switch` statements, here is a Java solution:

```java
public static int romanToInt(String s) {
    int res = 0;
    for (int i = s.length() - 1; i >= 0; i--) {
        char c = s.charAt(i);
        switch (c) {
        case 'I':
            res += (res >= 5 ? -1 : 1);
            break;
        case 'V':
            res += 5;
            break;
        case 'X':
            res += 10 * (res >= 50 ? -1 : 1);
            break;
        case 'L':
            res += 50;
            break;
        case 'C':
            res += 100 * (res >= 500 ? -1 : 1);
            break;
        case 'D':
            res += 500;
            break;
        case 'M':
            res += 1000;
            break;
        }
    }
    return res;
}
```
