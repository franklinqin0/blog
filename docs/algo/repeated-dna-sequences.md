---
title: Repeated DNA Sequence
tags:
  - Hash Table
  - Bit Manipulation
  - Two Pointers
---

<img class="medium-zoom" src="/algo/repeated-dna-sequences.png" alt="https://leetcode.com/problems/repeated-dna-sequences">

## Solution

All the following 3 solutions have the same complexities:

::: theorem Complexity
time: $O(n-L) = O(n)$ for $L=10$  
space: $O(n-L) = O(n)$ for $L=10$
:::

### Sliding Window & HashSet

Move a sliding window of length `L==10` along the string of length `n`. In the sliding window, if the `seq`ence is not seen yet, add to `seen`; otherwise, add to `output`. At the end of for loop, return `output`.

```py
def findRepeatedDnaSequences(self, s: str) -> List[str]:
    L, n = 10, len(s)
    seen, output = set(), set()

    for i in range(n-L+1):
        seq = s[i:i+L]
        if seq not in seen:
            seen.add(seq)
        else:
            output.add(seq)
    return output
```

### RK

```py
def findRepeatedDnaSequences(self, s: str) -> List[str]:
    L, n = 10, len(s)
    # edge case
    if n<L:
        return []
    seen, res = set(), set()
    dct = {'A': 0, 'C': 1, 'G': 2, 'T': 3}
    hash_s = 0
    s_to_int = lambda i: dct[s[i]]
    base = 4
    mod = 10**9 + 7
    power = pow(base, L, mod)

    # compute hash of s[0:L] and add to seen
    for i in range(L):
        hash_s = hash_s*base + s_to_int(i)
    seen.add(hash_s)

    for i in range(1, n-L+1):
        # compute current hash by multiplying base, subtracting prev*power and adding next
        hash_s = hash_s*base - s_to_int(i-1)*power + s_to_int(i+L-1)
        if hash_s in seen:
            res.add(s[i:i+L])
        else:
            seen.add(hash_s)
    return res
```

### Bit Manipulation

Similar to [RK](#rk), we encode the strings in terms of bits, i.e., `A` as `00`, `C` as `01`, `G` as `10`, and `T` as `11`. We then use bitmask to store encoding of current chars in sliding window into `seen` if not seen before, and add to `output` if seen.

```py
def findRepeatedDnaSequences(self, s: str) -> List[str]:
    L, n = 10, len(s)
    if n <= L:
        return []

    # convert string to the array of 2-bits integers:
    # 00_2, 01_2, 10_2 or 11_2
    to_int = {'A': 0, 'C': 1, 'G': 2, 'T': 3}
    nums = [to_int.get(s[i]) for i in range(n)]

    bitmask = 0
    seen, output = set(), set()
    # iterate over all sequences of length L
    for start in range(n - L + 1):
        # compute bitmask of the sequence in O(1) time
        if start != 0:
            # left shift to free the last 2 bit
            bitmask <<= 2
            # add a new 2-bits number in the last two bits
            bitmask |= nums[start + L - 1]
            # unset first two bits: 2L-bit and (2L + 1)-bit
            bitmask &= ~(3 << 2 * L)
        # compute bitmask of the first sequence in O(L) time
        else:
            for i in range(L):
                bitmask <<= 2
                bitmask |= nums[i]
        if bitmask in seen:
            output.add(s[start:start + L])
        seen.add(bitmask)
    return output
```
