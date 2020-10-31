---
title: Drop Eggs
source: LintCode
diff: easy
tags:
  - Math
  - Recursion
related:
  - super-egg-drop
---

<img class="medium-zoom" src="/algo/drop-eggs.png" alt="https://www.lintcode.com/problem/drop-eggs">

## Solution

See [this video](https://youtu.be/mLV_vOet0ss) for perfect explanation on this problem and [the next harder problem](super-egg-drop).

### Math

The first egg is dropped to minimize the search area, with intervals $n, n-1, n-2, \cdots, 1$. The second egg is dropped to test the exact location. In this way, the total number of drops is a constant, `x`.

```py
import math

def dropEggs(self, n):
    x = int(math.sqrt(2 * n))
    while x * (x + 1) / 2 < n:
        x += 1
    return x
```
