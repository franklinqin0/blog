---
title: Single Number
diff: easy
tags:
  - Math
  - Hash Table
  - Bit Manipulation
related:
  - single-number-ii
---

<img class="medium-zoom" src="/algo/single-number.png" alt="https://leetcode.com/problems/single-number">

## Solution

B/c duplicates are unwanted, we should recognize the correct data structure to use: `set`, as used in solutions [HashSet](#hashset) and [Math](#math).

The [bit manipulation](#bit-manipulation) solution is most elegant.

### HashSet

Add to `set` if `num` is not seen yet, o.w. remove it. At the end, `set` only has 1 element, so just `pop` it.

Complexity:

- time: $O(n)$
- space: $O(n)$ b/c of `set`

```py
def singleNumber(self, nums: List[int]) -> int:
    st = set()
    for num in nums:
        if num not in st:
            st.add(num)
        else:
            st.remove(num)
    return st.pop()
```

### Math

Say `c` is the single number while `a` and `b` appear twice. Then $2*(a+b+c)−(a+a+b+b+c)=c$.

Complexity:

- time: $O(n)$
- space: $O(n)$ b/c of `set`

```py
def singleNumber(self, nums: List[int]) -> int:
    return 2*sum(set(nums)) - sum(nums)
```

### Bit Manipulation

`^` is the associative & communicative XOR operator. These are its features:

- `0^a = a`
- `a^a = 0`
- `a^b^a = (a^a)^b = 0^b = b`

Complexity:

- time: $O(n)$
- space: $O(1)$

```py
def singleNumber(self, nums: List[int]) -> int:
    res = 0
    for num in nums:
        res ^= num
    return res
```
