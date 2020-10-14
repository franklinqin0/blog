---
title: Implement strstr
source: LeetCode
diff: easy
tags:
  - Two Pointers
  - String
related:
  - shortest-palindrome
---

<img class="medium-zoom" src="/algo/implement-strstr.png" alt="https://leetcode.com/problems/implement-strstr">

This is the pure string matching problem.

I previously did the [shortest palindrome](shortest_palindrome) problem in multiple ways. But in a real interview, I think I will just use the RK algo.

## Solution

### Built-in Function

Can use the built-in function `find` or `index` in `str`. Remember to check the empty string.

```py
def strStr(self, haystack: str, needle: str) -> int:
    if needle=="": return 0
    return haystack.find(needle)
```

### RK algo

Pretty standard RK algo. Note the usages of `lambda`(anonymous function) and `ord`(returns Unicode code point for a one-character string).

```py
def strStr(self, haystack: str, needle: str) -> int:
    h,n = len(haystack),len(needle)
    if h<n:
        return -1

    base = 26
    mod = 1000000007
    hash_h, hash_n = 0, 0

    haystack_to_int = lambda i: ord(haystack[i])-ord('a')
    needle_to_int = lambda i: ord(needle[i])-ord('a')

    for i in range(n):
        hash_n = (base*hash_n + needle_to_int(i)) % mod
        hash_h = (base*hash_h + haystack_to_int(i)) % mod
    if hash_n==hash_h and needle == haystack[:n]:
        return 0

    power = pow(base, n, mod)
    for start in range(1, h-n+1):
        hash_h = (hash_h*base - power*haystack_to_int(start-1) + haystack_to_int(start+n-1)) % mod
        if hash_n==hash_h and needle==haystack[start:start+n]:
            return start
    return -1
```

### KMP (REDO)

### Z-algo

https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/
