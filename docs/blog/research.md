---
title: CPS Research
date: 2021-06-16
categories:
  - misc
tags:
  - tech
  - research
publish: false
---

## RTOS Scheduling w/ ML

[GNN](https://youtu.be/yFLiiK8c9CU)
[many DL talks](https://www.rle.mit.edu/eems/publications/tutorials/)

[cpp tutorial](https://www.runoob.com/cplusplus/cpp-modifier-types.html)

[How to calculate maximal parallelism in a DAG](https://stackoverflow.com/questions/45810278/how-to-calculate-maximal-parallelism-in-a-dag)

### Perfect Graph

Perfect Graph is a graph in which the **chromatic number** of every induced subgraph equals the order of the largest clique of that subgraph (**clique number**). Equivalently stated in symbolic terms an arbitrary graph $G=(V,E)$ is perfect if and only if for all $S\subseteq V$ we have $\chi(G[S])=\omega(G[S])$.

In all perfect graphs, the _graph coloring problem_, _maximum clique problem_, and _maximum independent set problem_ can all be solved in **polynomial** time. In addition, several important min-max theorems in combinatorics, such as Dilworth's theorem, can be expressed in terms of the perfection of certain associated graphs.

### Chordal Graph

A chordal graph is a simple graph in which every cycle of length greater than three has a chord. Equivalently, the graph contains no induced cycle of length four or more. Thus every induced subgraph of a chordal graph is chordal.

Every chordal graph is perfect.

It is possible to recognize chordal graphs in linear time. Furthermore, a maximum clique of a chordal graph can be found in polynomial time although the problem is NP-complete for general graphs.

[check which C++ version](https://stackoverflow.com/a/51536462/6421652)

[https://en.wikipedia.org/wiki/Lexicographic_breadth-first_search](Lex BFS)

### Kuhn's Algorithm

https://cp-algorithms.com/graph/kuhn_maximum_bipartite_matching.html

### Ordering

A graph $G$ is defined to be chordal if its vertices have a _perfect elimination ordering_, an ordering such that for any vertex $v$ the neighbors that occur later in the ordering form a _clique_. In a chordal graph, the **reverse** of a _lexicographic ordering_ is always a perfect elimination ordering.

| Work             | Task Generation             | Workload    | Deadline | Model      | Scheduling | Preemption | Algorithm |
| ---------------- | --------------------------- | ----------- | -------- | ---------- | ---------- | ---------- | --------- |
| Baruah2012 [3]   | DNE                         | single task | C        | DAG        | G          | -          | EDF       |
| Bonifaci2013 [4] | DNE                         | task set    | A        | DAG        | G          | FP         | EDF, DM   |
| Li2013 [5]       | Cordeiro10                  | task set    | I        | DAG        | G          | FP         | EDF       |
| Qamhieh2013 [6]  | yartiss                     | task set    | C        | DAG        | G          | FP         | EDF       |
| Baruah2014 [7]   | Agrawal13                   | task set    | C        | DAG        | G          | FP         | EDF       |
| Melani2015 [1]   | Melani15                    | task set    | C        | DAG, C-DAG | G          | FP         | EDF, FTP  |
| Serrano2016 [8]  | Melani15                    | task set    | C        | DAG        | G          | LP         | FTP       |
| Fonseca2016 [14] | randfixedsum                | task set    | C        | DAG        | P          | FP         | FTP       |
| Pathan2017 [9]   | Melani15                    | task set    | C        | DAG        | G          | FP         | DM        |
| Fonseca2017 [10] | Melani15                    | task set    | C        | DAG        | G          | FP         | DM        |
| Casini2018 [15]  | Melani15                    | task set    | C        | DAG        | P          | LP         | FTP       |
| Han2019 [11]     | Cordeiro10                  | single task | C        | H-DAG      | G          | \-         | \-        |
| He2019 [12]      | Wang17                      | task set    | C        | DAG        | G          | FP         | EDF, FTP  |
| Fonseca2019 [13] | Melani15                    | task set    | C, A     | DAG        | G          | FP         | EDF, FTP  |
| Nasri2019 [16]   | Melani15, Waters15, STR2RTS | task set    | C        | DAG        | G          | LP         | EDF       |
| Zahaf2020 [17]   | own                         | task set    | C        | HC-DAG     | P          | FP, FNP    | EDF       |

[Melani15]: Alessandra Melani, Marko Bertogna, Vincenzo Bonifaci, Alberto Marchetti-Spaccamela, and Giorgio C. Buttazzo. Response-Time Analysis of Conditional DAG Tasks in Multiprocessor Systems. In Euromicro Conference on Real-Time Systems, (ECRTS), pages 211–221, 2015.

[Wang17]: Y. Wang, N. Guan, J. Sun, M. Lv, Q. He, T. He, and W. Yi, “Benchmarking OpenMP programs for real-time scheduling,” in Proc. IEEE 23rd Int. Conf. Embedded Real-Time Comput. Syst. Appl., 2017, pp. 1–10.

[Cordeiro10]: D. Cordeiro, G. Mounie, S. Perarnau, D. Trystram, J. Vincent, and F. Wagner, “Random graph generation for scheduling simulations,” in Proc. 3rd Int. Conf. Simul. Tools Techn., 2010, Art. no. 60.

[Waters15]: Simon Kramer, Dirk Ziegenbein, and Arne Hamann. Real world automotive benchmark for free. In International Workshop on Analysis Tools and Methodologies for Embedded Real-Time Systems (WATERS), 2015.

[randfixedsum]: P. Emberson, R. Stafford, and R. I. Davis, “Techniques for the synthesis of multiprocessor tasksets,” in WATERS Workshop, 2010, pp. 6–11.

[yartiss]: Y. Chandarli, F. Fauberteau, M. Damien, S. Midonnet, and M. Qamhieh. YARTISS: A Tool to Visualize, Test, Compare and Evaluate Real-Time Scheduling Algorithms. In Proceedings of the 3rd International Workshop on Analysis Tools and Methodologies for Embedded and Real-time Systems (WATERS), Pisa, Italy, 2012.

[Agrawal13]: J. Li, K. Agrawal, C. Lu, and C. D. Gill. Analysis of global EDF for parallel tasks. In Proceedings of the 2013 25th Euromicro Conference on Real-Time Systems, ECRTS ’13, pages 3–13, Paris (France), 2013.
