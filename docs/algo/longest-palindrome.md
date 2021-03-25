---
title: Longest Palindrome
diff: easy
tags:
  - Hash Table
---

<img class="medium-zoom" src="/algo/longest-palindrome.png" alt="https://leetcode.com/problems/longest-palindrome">

## Solution

The answer is the count of characters that has **even** number of appereances. For characters that has **odd** number of appereances, their appereances **minus 1** will make their apperances even. And finally we can put an unused character in the middle of the palindrome.

All the following three solutions have linear time and space.

### HashMap

Store the counts of chars in `hashmap`. For each char in `hashmap`, only plus an even count, then plus 1 if the char `hashmap[i]` is odd and `res` is even.

```py
def longestPalindrome(self, s: str) -> int:
    hashmap = {}
    res = 0
    for c in s:
        hashmap[c] = hashmap.get(c, 0) + 1
    for c in hashmap:
        res += (hashmap[c] // 2) * 2
        if hashmap[c] % 2 == 1 and res % 2 == 0:
            res += 1
    return res
```

Or simply use `Counter`:

```py
def longestPalindrome(self, s: str) -> int:
    res = 0
    for v in collections.Counter(s).values():
        res += v // 2 * 2
        if res % 2 == 0 and v % 2 == 1:
            res += 1
    return res
```

### HashSet

Only store chars w/ odd counts in a HashSet `hashset`. Calculate result by `len(s) - len(hashset)`, and further subtract `1` if `len(hashset)>0` (chars w/ odd counts).

```py
def longestPalindrome(self, s: str) -> int:
    hashset = set()
    for c in s:
        if c in hashset:
            hashset.remove(c)
        else:
            hashset.add(c)
    remove = len(hashset)
    if remove > 0:
        remove -= 1
    return len(s) - remove
```
