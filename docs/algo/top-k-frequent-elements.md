---
title: Top K Frequent Elements
diff: medium
tags:
  - Heap
  - Quick Select
---

<img class="medium-zoom" src="/algo/top-k-frequent-elements.png" alt="https://www.leetcode.com/problems/top-k-frequent-elements">

## Solution

Let $n$ be the length of the array.

### 1-liner Cheating

Use `Counter`'s `most_common`:

```py
def topKFrequent(self, nums: List[int], k: int) -> List[int]:
    return [num for num, _ in collections.Counter(nums).most_common(k)]
```

### Heap

::: theorem Complexity
time: $O(n\log k)$ ($O(n)$ to build `Counter` and $O(n\log k)$ to push $n$ elts into the heap of size $k$)  
space: $O(k + n)$ (hashmap w/ $\le$ $n$ elts and heap w/ $k$ elts)
:::

```py {7}
def topKFrequent(self, nums: List[int], k: int) -> List[int]:
    if k == len(nums):
        return nums
    cnt = Counter(nums)

    # following lines can be replaced by:
    # return heapq.nlargest(k, cnt.keys(), key=cnt.get)
    heap = []
    for i in cnt.keys():
        heappush(heap, (cnt[i], i))
        if len(heap) > k:
            heappop(heap)
    return [v for _, v in heap]
```

### Quick Select

::: theorem Complexity
time: $O(n)$ (worst case: $O(n^2)$)  
space: $O(n)$
:::

```py
from collections import Counter
from random import randint
def topKFrequent(self, nums: List[int], k: int) -> List[int]:
    cnt = Counter(nums)
    uniq = list(cnt.keys())

    def partition(left, right) -> int:
        # select a random pivot_idx
        pivot_idx = randint(left, right)
        pivot_frequency = cnt[uniq[pivot_idx]]
        # 1. move pivot to end
        uniq[pivot_idx], uniq[right] = uniq[right], uniq[pivot_idx]

        # 2. move all less frequent elements to the left
        i = left
        for j in range(left, right):
            if cnt[uniq[i]] < pivot_frequency:
                uniq[i], uniq[j] = uniq[j], uniq[i]
                i += 1

        # 3. move pivot to its final place
        uniq[right], uniq[i] = uniq[i], uniq[right]

        return i

    def quickSelect(left, right, k) -> None:
        """
        Sort a list within left..right till kth less frequent element
        takes its place.
        """
        # base case: the list contains only one element
        if left == right:
            return

        # find the pivot position in a sorted list
        pivot_idx = partition(left, right)

        # if the pivot is in its final sorted position
        if k == pivot_idx:
                return
        # go left
        elif k < pivot_idx:
            quickSelect(left, pivot_idx - 1, k)
        # go right
        else:
            quickSelect(pivot_idx+1, right, k)

    n = len(uniq)
    quickSelect(0, n-1, n-k)
    # Return top k frequent elements
    return uniq[n-k:]
```

<!-- REDO in Hoare's partition ??? -->
