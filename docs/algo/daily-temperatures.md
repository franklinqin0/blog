---
title: Daily Temperatures
diff: medium
tags:
  - Hash Table
  - Stack
---

<img class="medium-zoom" src="/algo/daily-temperatures.png" alt="https://leetcode.com/problems/daily-temperatures">

## Solution

Let $n$ be the length of the array `T` and $m$ be the length of `dct` ($< 100$).

### Brute Force

Traverse the `T`emperature list in reverse order. For every element `T[i]`, find the minimum index of temperatures from `T[i]+1` to $100$ in `dct`.

::: theorem Complexity
time: $O(nm)$  
space: $O(m)$
:::

```py
def dailyTemperatures(self, T: List[int]) -> List[int]:
    n = len(T)
    res = [0 for _ in range(n)]
    dct = dict()

    for i in reversed(range(n)):
        if T[i]==100: print(dct)
        # the max of t is 101 b/c T[i] can be 100
        warmer_idx = min(dct.get(t, sys.maxsize) for t in range(T[i]+1, 102))
        if warmer_idx < sys.maxsize:
            res[i] = warmer_idx - i
        dct[T[i]] = i

    return res
```

### Monotone Stack

`stack` stores the indices of `T` in descending order of temperature from bottom to top. While the current temperature is larger than the temperature at the top of the stack, pop the stack update index difference in `res`. At the end of the while loop, append the current index.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def dailyTemperatures(self, T: List[int]) -> List[int]:
    n = len(T)
    stack = [0]
    res = [0 for _ in range(n)]


    for i in range(1, n):
        while stack and T[i] > T[stack[-1]]:
            idx = stack.pop()
            res[idx] = i - idx
        stack.append(i)

    return res
```
