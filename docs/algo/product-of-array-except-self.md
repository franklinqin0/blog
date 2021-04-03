---
title: Product of Array Except Self
diff: medium
tags:
  - Array
  - Prefix Sum
---

<img class="medium-zoom" src="/algo/product-of-array-except-self.png" alt="https://leetcode.com/problems/product-of-array-except-self">

## Solution

Let $n$ be the length of the array.

### Prefix Sum Array

- `prefix_prod[i]`: products from `nums[0]` to `nums[i-1]`
- `suffix_prod[i]`: products from `nums[n-1]` to `nums[i+1]`

So the product except `nums[i]` is `prefix_prod[i-1]*suffix_prod[i+1]`.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```py
def productExceptSelf(self, nums: List[int]) -> List[int]:
    n = len(nums)
    if n==0:
        return []

    # calculate prefix product
    prefix_prod = [0 for _ in range(n)]
    prefix_prod[0] = nums[0]
    for i in range(1,n):
        prefix_prod[i] = prefix_prod[i-1]*nums[i]

    # calculate prefix product
    suffix_prod = [0 for _ in range(n)]
    suffix_prod[n-1] = nums[n-1]
    for i in reversed(range(n-1)):
        suffix_prod[i] = suffix_prod[i+1]*nums[i]

    # calculate res
    res = [0 for _ in range(n)]
    res[0] = suffix_prod[1]
    res[n-1] = prefix_prod[n-2]
    for i in range(1,n-1):
        res[i] = prefix_prod[i-1]*suffix_prod[i+1]

    return res
```

## Follow Up

::: theorem
Could you solve it with constant space complexity? (The output array **does not** count as extra space for the purpose of space complexity analysis)
:::

### Prefix Sum Variable

We can just accumulate `prefix_prod` and `suffix_prod` as **a number** rather than **an array** and update `res` accordingly.

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def productExceptSelf(self, nums: List[int]) -> List[int]:
    n = len(nums)
    if n==0:
        return []
    res = [1 for _ in range(n)]

    # calculate prefix product from front to back
    prefix_prod = 1
    for i in range(n):
        res[i] = prefix_prod # product of nums[0]..nums[i-1]
        prefix_prod *= nums[i]

    # calculate suffix product from back to front
    suffix_prod = 1
    for i in reversed(range(n)):
        res[i] *= suffix_prod # times product of nums[i+1]..nums[n-1]
        suffix_prod *= nums[i]

    return res
```
