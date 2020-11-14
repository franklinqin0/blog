---
title: Course Schedule
diff: medium
tags:
  - BFS
  - DFS
  - Topological Sort
---

<img class="medium-zoom" src="/algo/course-schedule.png" alt="https://leetcode.com/problems/course-schedule">

## Solution

Complexity:

- time: $O(V + E)$
- space: $O(V + E)$

```py
def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
    # trivial case
    if numCourses == 0:
        return False

    edges = {i: set() for i in range(numCourses)} # other courses that depend on course i
    indegrees = [0]*numCourses # number of unlearned prereqs

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
    numFinished = 0
    while queue:
        now = queue.pop(0)
        numFinished += 1
        # all courses that have the finished `now` for prereq decrement indegrees by 1
        for i in edges[now]:
            indegrees[i] -= 1
            # if course `i` has no prereq, add to queue
            if indegrees[i] == 0:
                queue.append(i)

    # check if numFinished is all the courses; o.w., the graph is not a DAG
    if numFinished != numCourses:
        return False
    return True
```
