---
title: Largest Rectangle in Histogram
diff: hard
tags:
  - Array
  - Stack
---

<img class="medium-zoom" src="/algo/largest-rectangle-in-histogram.png" alt="https://www.leetcode.com/problems/largest-rectangle-in-histogram">

## Solution

Let $n$ be the length of the array.

All the following solutions have linear space complexity.

### Width Enumeration

Expand horizontally around each width.

```py
def largestRectangleArea(self, heights: List[int]) -> int:
    n = len(heights)
    res = 0
    for left in range(n):
        min_height = sys.maxsize
        for right in range(left, n):
            min_height = min(min_height, heights[right])
            res = max(res, (right-left+1)*min_height)

    return res
```

### Height Enumeration

Expand vertically around each height.

```py
def largestRectangleArea(self, heights: List[int]) -> int:
    n = len(heights)
    res = 0
    for i in range(n):
        height = heights[i]
        left = right = i
        while left-1>=0 and heights[left-1]>=height:
            left -= 1
        while right+1<=n-1 and heights[right+1]>=height:
            right += 1
        res = max(res, (right-left+1)*height)
    return res
```

The above 2 solutions take squared time, whereas the following solutions using monotone stack take only linear time.

### Vanilla Monotone Stack

`left`: 1st coordinate to the **left** with height `heights[left] < heights[i]`.  
`right`: 1st coordinate to the **right** with height `heights[right] < heights[i]`.

Sentinel nodes of `-1` and `n` are added to `stack`.

```py
def largestRectangleArea(self, heights: List[int]) -> int:
    n = len(heights)
    left = [0 for _ in range(n)]
    right = [0 for _ in range(n)]
    res = 0

    stack = [-1]
    for i in range(n):
        while len(stack)>1 and heights[stack[-1]]>=heights[i]:
            stack.pop()
        left[i] = stack[-1]
        stack.append(i)

    stack = [n]
    for i in reversed(range(n)):
        while len(stack)>1 and heights[stack[-1]]>=heights[i]:
            stack.pop()
        right[i] = stack[-1]
        stack.append(i)

    for i in range(n):
        res = max(res, (right[i]-left[i]-1)*heights[i])

    return res
```

### Optimized Monotone Stack

when `right` is enumerated, `left` is popped from the stack.

```py
def largestRectangleArea(self, heights: List[int]) -> int:
    # ensure inv: current height < the height on stack
    heights.append(0)
    n = len(heights)
    res = 0

    stack = [-1]
    for i in range(n):
        while len(stack)>1 and heights[i] <= heights[stack[-1]]:
            # 1st height higher than current height
            left = stack.pop()
            height = heights[left]
            width = i - stack[-1] - 1
            # update the area
            res = max(res, height*width)
        stack.append(i)

    return res
```
