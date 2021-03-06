---
title: Factorial Trailing Zeroes
diff: medium
tags:
  - String
  - Prefix Sum
  - Binary Search
---

<img class="medium-zoom" src="/algo/factorial-trailing-zeroes.png" alt="https://leetcode.com/problems/factorial-trailing-zeroes">

## Solution

Brute force solution is to calculate $n!$ and keep dividing by and count number of $10$'s.

### Number of 5's

Factor a number: $60 = 2 \cdot 2 \cdot 3 \cdot 5$. We can see $60$ only has 1 trailing zero b/c the number of pair of $2$ and $5$ is 1.

For a factorial, the number of `2`'s is definitely more than that of `5`'s.

Thus, the number of `5`'s $=$ the number of `10`'s $=$ the number of trailing zeros.

::: theorem Complexity
time: $O(\log n)$  
space: $O(1)$
:::

```py
def trailingZeroes(self, n: int) -> int:
    cnt = 0
    while n>0:
        n //= 5
        cnt += n
    return cnt
```
