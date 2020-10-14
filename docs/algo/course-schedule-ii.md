---
title: Pen Box
source: LintCode
diff: medium
tags:
  - Array
  - Two Pointers
  - DP
related:
  - two-sum
  - best-time-to-buy-and-sell-stock
---

<img class="medium-zoom" src="/algo/course-schedule-ii.png" alt="https://leetcode.com/problems/course-schedule-ii">

## Solution

```py
import heapq
def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
    # 入度 = （未学习的）前置课程的数量

    # 1. 求出所有点的入度（求出前置课程的数量）
    # 2. 从入度为0的点开始bfs
    #     - 如果相邻点的前置课程已经学完，加入队列
    #     - 加入队列的顺序 -> 拓扑序
    # 3. 判断是否上完所有课程，return答案

    # for all prerequisites:
    #     if A -> B:
    #         B的入度+1

    # for 所有入度为0的课程：
    #     加入队列

    # 空的拓扑序的list：order

    # while 队列非空：
    #     弹出一个课程
    #     将课程加入到order里
    #     for 以该课程为前置课程的课now：
    #         课程now所需的前置课程-=1
    #         if 所需的前置课程 == 0：
    #             加入队列

    # 判断 order的长度和numcourses是否相等

    if numCourses == 0:
        return []

    edges = {i : set() for i in range(numCourses)}  # 以每个课程为前置课程的课
    indegrees = [0] * numCourses # 入度


    for i, j in prerequisites:
        if i not in edges[j]:
            indegrees[i] += 1
            edges[j].add(i)



    queue = []

    for i in range(numCourses):
        if indegrees[i] == 0:
            heapq.heappush(queue, i)

    order = []

    while queue:
        now = heapq.heappop(queue)
        order.append(now)
        for i in edges[now]:
            indegrees[i] -= 1
            if indegrees[i] == 0:
                heapq.heappush(queue, i)

    print (order)
    if len(order) != numCourses:
        return []

    return order

    #节点数量：V
    # 边数：E
    # O（V*E)
```
