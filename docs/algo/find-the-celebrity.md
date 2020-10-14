---
title: Find the Celebrity
source: LeetCode
diff: medium
tags:
  - Array
---

<img class="medium-zoom" src="/algo/find-the-celebrity.png" alt="https://leetcode.com/problems/find-the-celebrity">

## Knows API already defined

```py
def knows(a: int, b: int) -> bool:
```

## Solution

Note that it takes $O(n)$ time to check if a person is a celebrity.

### Brute Force

Check if each person is a celebrity.

Complexity:

- time: $O(n^2)$
- space: $O(1)$

```py
def findCelebrity(self, n):
    for i in range(n):
        founded = True
        for j in range(n):
            if i==j:
                continue
            founded = founded and (knows(j,i) and not knows(i,j))
        if founded:
            return i
    return -1
```

### Logical Deduction

Let's ask this question: does A know B? If the answer is yes, then A is defo not a celebrity; o.w., B is not a celebrity. Thus, we could ask this question `n-1` times and get a `candidate` for celebrity.

We then check if everyone else knows the `candidate` and the `candidate` knows no one else.

Complexity:

- time: $O(n)$
- space: \$O(1)

```py
def findCelebrity(self, n):
    candidate = 0

    for i in range(1,n):
        if not knows(i,candidate):
        ### above line could also be: ###
        # if knows(candidate,i):
            candidate = i
    # check if candidate is a celebrity
    for i in range(n):
        if i==candidate:
            continue
        if knows(candidate, i) or not knows(i, candidate):
            return -1
    return candidate
```
