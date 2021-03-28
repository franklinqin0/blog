---
title: Jump Game
diff: medium
tags:
  - Array
  - Greedy
---

<img class="medium-zoom" src="/algo/jump-game.png" alt="https://leetcode.com/problems/jump-game">

## Solution

Let $n$ be the length of `nums`.

### Greedy Algorithm

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

#### Front to Back

```py
def canJump(self, nums: List[int]) -> bool:
    n = len(nums)
    max_right = 0
    for i in range(n):
        # if i can be reached, update max_right
        if max_right >= i:
            max_right = max(max_right, i + nums[i])
        # if max_right can reach last element, can jump
        if max_right >= n-1:
            return True
    return False
```

#### Back to Front

```py
def canJump(self, nums: List[int]) -> bool:
    n = len(nums)
    max_left = n-1
    for i in reversed(range(n)):
        # if position i can advance to max_left, update max_left to i
        if max_left <= i + nums[i]:
            max_left = i
    # if max_left is not at 0, cannot jump
    return max_left == 0
```
