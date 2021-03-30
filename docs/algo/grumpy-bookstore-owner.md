---
title: Grumpy Bookstore Owner
diff: medium
tags:
  - Array
  - Sliding Window
---

<img class="medium-zoom" src="/algo/grumpy-bookstore-owner.png" alt="https://leetcode.com/problems/grumpy-bookstore-owner">

## Solution

Both solutions have linear time and space.

### Unsatisfied Customers (TLE)

Two loops would TLE.

```py
def maxSatisfied(self, customers: List[int], grumpy: List[int], X: int) -> int:
    n = len(customers)

    # unsatisfied customers at instant i
    unsatisfied = [0 for _ in range(n)]
    for i in range(n):
        unsatisfied[i] = 0 if grumpy[i]==0 else customers[i]

    # find max continuous sum of unsatisfied customers
    secret_sum = 0
    for i in range(n+1-X):
        secret_sum = max(secret_sum, sum(unsatisfied[i:i+X]))

    # return the # of satisfied customers
    return sum(customers) - sum(unsatisfied) + secret_sum
```

### Sliding Window

`base` is the number of customers satisfied if not grumpy. `bonus` is the number of customers gained if owner is not grumpy during `X`.

```py
def maxSatisfied(self, customers: List[int], grumpy: List[int], X: int) -> int:
    n = len(customers)
    base = bonus = window = 0

    for i in range(n):
        # satisfied already
        base += (1-grumpy[i])*customers[i]
        # unsatisfied customers if grumpy during X
        window += grumpy[i]*customers[i]
        # maintain the sliding window
        if i >= X:
            window -= grumpy[i-X]*customers[i-X]
        bonus = max(bonus, window)

    # originally satisfied + max bonus if not grumpy during X
    return base + bonus
```
