---
title: Majority Element
diff: easy
tags:
  - Array
  - Randomization
---

<img class="medium-zoom" src="/algo/majority-element.png" alt="https://leetcode.com/problems/majority-element">

## Solution

### HashMap

Return the element w/ max count.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
from collections import Counter
def majorityElement(self, nums: List[int]) -> int:
    cnt = Counter(nums)
    return max(cnt, key=cnt.get)
```

### Quick Select

Find the $\lfloor \dfrac{n}{2} \rfloor$-th element in linear time with randomized algorithm `quickSelect`.

::: theorem Complexity
time: $O(n)$  
space: $O(\log n)$
:::

```py
def majorityElement(self, nums: List[int]) -> int:
    n = len(nums)
    return self.quickSelect(nums, 0, n-1, n//2)

def partition(self, arr, left, right):
    pivot_idx = randint(left, right)
    pivot = arr[pivot_idx]

    arr[right], arr[pivot_idx] = arr[pivot_idx], arr[right]
    store_idx = left

    for i in range(left, right):
        if arr[i] < pivot:
            arr[i], arr[store_idx] = arr[store_idx], arr[i]
            store_idx += 1

    arr[right], arr[store_idx] = arr[store_idx], arr[right]
    return store_idx

def quickSelect(self, arr, left, right, k):
    if left == right:
        return arr[left]
    pivot_idx = self.partition(arr, left, right)
    if k == pivot_idx:
        return arr[k]
    if k < pivot_idx:
        return self.quickSelect(arr, left, pivot_idx-1, k)
    else:
        return self.quickSelect(arr, pivot_idx+1, right, k)
```

## Follow Up

> Could you solve the problem in linear time and constant space?

### Boyer-Moore Voting Algorithm

It's hard to prove the validity of this algorithm in simple ways, but intuitively it makes sense.

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def majorityElement(self, nums: List[int]) -> int:
    cnt = 0
    candidate = None

    for num in nums:
        if cnt == 0:
            candidate = num
        # increment/decrement `cnt`
        if num == candidate:
            cnt += 1
        else:
            cnt -= 1
    return candidate
```
