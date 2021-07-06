---
title: Find the Duplicate Number
diff: medium
tags:
  - Array
  - Two Pointers
  - Binary Search
  - Bit
---

<img class="medium-zoom" src="/algo/find-the-duplicate-number.png" alt="https://leetcode.com/problems/find-the-duplicate-number">

## Solution

See more at this [LeetCode post](https://leetcode-cn.com/problems/find-the-duplicate-number/solution/xun-zhao-zhong-fu-shu-by-leetcode-solution).

### Built-in Types

#### Counter

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def findDuplicate(self, nums: List[int]) -> int:
    cnt = Counter(nums)
    return max(cnt, key=cnt.get)
```

#### Sorting

::: theorem Complexity
time: $O(n \log n)$  
space: $O(n)$
:::

```py
def findDuplicate(self, nums: List[int]) -> int:
    n = len(nums)
    nums.sort()

    for i in range(1, n):
        if nums[i] == nums[i-1]:
            return nums[i]
```

#### Set

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def findDuplicate(self, nums: List[int]) -> int:
    hashset = set()
    for num in nums:
        if num in hashset:
            return num
        hashset.add(num)
```

## Follow Up

::: theorem
How can we prove that at least one duplicate number must exist in nums?
:::

Proving that at least one duplicate must exist in nums is simple application of the [pigeonhole principle](https://en.wikipedia.org/wiki/Pigeonhole_principle). Here, each number in nums is a "pigeon" and each distinct number that can appear in nums is a "pigeonhole". Because there are $n + 1$ numbers are $n$ distinct possible numbers, the pigeonhole principle implies that at least one of the numbers is duplicated.

::: theorem
Can you solve the problem using only $O(1)$ extra space?
:::

### Binary Search

$cnt[i]$ represents number of elements in `nums` $\le i$

Say the duplicate is $target$, then all elements in $[1, target-1]$ satisfy $cnt[i]\le i$, and all elements in $[target, n]$ satisfy $cnt[i] > i$.

Thus, use binary search to find $target$ according to the **monotone** $cnt$.

::: theorem Complexity
time: $O(n \log n)$  
space: $O(1)$
:::

```py
def findDuplicate(self, nums: List[int]) -> int:
    n = len(nums)
    res = 0
    left = 1
    right = n-1

    while left <= right:
        mid = (left + right) >> 1
        cnt = 0
        for i in range(n):
            if nums[i] <= mid:
                cnt += 1
        if cnt <= mid:
            left = mid + 1
        else:
            right = mid - 1
            res = mid

    return res
```

### Bit Mask

For the `i`th bit, there are $x$ elements in `nums[1..n]` having it as $1$, and there are $y$ elements in `[1.n]` it as $1$. The $target$ has the `i`th bit as $1$ iff $x > y$.

::: theorem Complexity
time: $O(n \log n)$  
space: $O(1)$
:::

```py
def findDuplicate(self, nums: List[int]) -> int:
    n = len(nums)
    res = 0
    bit_max = 31
    while not (n - 1) >> bit_max:
        bit_max -= 1
    for bit in range(bit_max+1):
        x = y = 0
        for i in range(n):
            if nums[i] & 1 << bit:
                x += 1
            if i>=1 and i&(1<<bit):
                y += 1
        if x > y:
            res |= 1 << bit
    return res
```

### Floyd's Cycle-Finding Algorithm

Form a graph against `nums`. Every index has an edge $i \rightarrow nums[i]$. As there exists a duplicate $target$, so at least 2 edges point to such a target. Thus, the graph has a cycle and $target$ is the entrance of the cycle.

See more at the similar problem [Linked List Cycle II](linked-list-cycle-ii.md#floyd-s-cycle-finding-algorithm).

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def findDuplicate(self, nums: List[int]) -> int:
    n = len(nums)
    fast = slow = nums[0]

    # do-while loop
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break

    # find the entrance to the cycle
    fast = nums[0]
    while slow != fast:
        fast = nums[fast]
        slow = nums[slow]

    return fast
```
