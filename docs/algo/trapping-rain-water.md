---
title: Trapping Rain Water
diff: hard
tags:
  - Array
  - Two Pointers
  - Stack
---

<img class="medium-zoom" src="/algo/trapping-rain-water.png" alt="https://leetcode.com/problems/trapping-rain-water">

## Solution

Solutions evolve from squared to linear runtime, and from multiple to single iteration.

### Brute Force (TLE)

::: theorem Complexity
time: $O(n^2)$  
space : $O(1)$
:::

```py
def trap(self, height: List[int]) -> int:
    res = 0
    n = len(height)
    for i in range(n):
        # calc the max height to the left
        left_max = 0
        for l in range(i):
            left_max = max(left_max, height[l])
        # calc the max height to the right
        right_max = 0
        for r in range(i+1, n):
            right_max = max(right_max, height[r])
        # calc the water height
        water = min(left_max, right_max) - height[i]
        if water > 0: res += water
    return res
```

### DP

::: theorem Complexity
time: $O(n)$  
space : $O(n)$
:::

```py
def trap(self, height: List[int]) -> int:
    if not height: return 0
    res = 0
    n = len(height)
    left_max, right_max = [0 for _ in range(n)], [0 for _ in range(n)]
    # calc the max height to the left
    left_max[0] = height[0]
    for i in range(1, n):
        left_max[i] = max(height[i], left_max[i-1])
    # calc the max height to the right
    right_max[-1] = height[-1]
    for i in range(n-2, -1, -1):
        right_max[i] = max(height[i], right_max[i+1])
    # calc the water height
    for i in range(1, n):
        res += min(left_max[i], right_max[i]) - height[i]
    return res
```

### Stack

We keep a `stack` and iterate over the array. We add the index of the bar to the `stack` if bar $\le$ the bar at top of stack, which means that the current bar is bounded by the previous bar in the stack. If we found a bar longer than that at the top, we are sure that the bar at the top of the stack is bounded by the current bar and a previous bar in the stack, hence, we can pop it and add resulting trapped water to `res`.

::: theorem Complexity
time: $O(n)$ (each bar can be operated at most twice: inserted to and removed from the stack)  
space : $O(n)$
:::

```py
def trap(self, height: List[int]) -> int:
    res = 0
    n = len(height)
    stack = []
    for i in range(n):
        while stack and height[i] > height[stack[-1]]:
            top = stack.pop()
            # will need stack[-1] for the left bar
            if not stack:
                break
            distance = i - stack[-1] - 1
            bounded_height = min(height[i], height[stack[-1]]) - height[top]
            res += distance * bounded_height
        stack.append(i)
    return res
```

### Two Pointers

If there is a larger bar at one end (say right), we are assured that the water trapped would be dependant on height of bar in current direction (from left to right). As soon as we find the bar at other end (right) is smaller, we start iterating in opposite direction (from right to left). We must maintain `left_max` and `right_max` during the iteration, but now we can do it in one iteration using 2 pointers, switching between the two.

::: theorem Complexity
time: $O(n)$  
space : $O(1)$
:::

```py
def trap(self, height: List[int]) -> int:
    res = 0
    n = len(height)
    left, right = 0, n-1
    left_max = right_max = 0
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                res += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                res += right_max - height[right]
            right -= 1
    return res
```
