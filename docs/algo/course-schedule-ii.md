---
title: Course Schedule II
diff: medium
tags:
  - BFS
  - Topological Sort
related:
  - course-schedule
  - course-schedule-iv
---

<img class="medium-zoom" src="/algo/course-schedule-ii.png" alt="https://leetcode.com/problems/course-schedule-ii">

## Solution

### Kahn's Algorithm (BFS)

This problem is similar to the [previous problem](course-schedule), but returns the `order`ed list of courses to take rather than a boolean to decide if courses can be finished.

::: theorem Complexity
time: $O(V + E)$  
space: $O(V + E)$
:::

```py
def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
    # trivial case
    if numCourses == 0:
        return []

    edges = {i : set() for i in range(numCourses)}  # other courses that depend on course i
    indegrees = [0 for _ in range(numCourses)] # number of unlearned prereqs

    # calc indegrees for each course
    for i, j in prerequisites:
        # if A -> B, then B's indegrees + 1
        indegrees[i] += 1
        edges[j].add(i)

    # add courses w/ 0 indegree to queue
    queue = []
    for i in range(numCourses):
        if indegrees[i] == 0:
            queue.append(i)

    # finish courses in queue & update indegrees
    order = []
    while queue:
        now = queue.pop(0)
        order.append(now)
        # all courses that have the finished `now` for prereq decrement indegrees by 1
        for i in edges[now]:
            indegrees[i] -= 1
            # if course `i` has no prereq, add to queue
            if indegrees[i] == 0:
                queue.append(i)

    # check if order has all the courses
    if len(order) != numCourses:
        return []
    return order
```
