## RTOS Scheduling w/ ML

[GNN](https://youtu.be/yFLiiK8c9CU)
[many DL talks](https://www.rle.mit.edu/eems/publications/tutorials/)

[cpp tutorial](https://www.runoob.com/cplusplus/cpp-modifier-types.html)

[How to calculate maximal parallelism in a DAG](https://stackoverflow.com/questions/45810278/how-to-calculate-maximal-parallelism-in-a-dag)

### Perfect Graph

graph in which the **chromatic number** of every induced subgraph equals the order of the largest clique of that subgraph (**clique number**). Equivalently stated in symbolic terms an arbitrary graph $G=(V,E)$ is perfect if and only if for all $S\subseteq V$ we have $\chi(G[S])=\omega(G[S])$.

In all perfect graphs, the _graph coloring problem_, _maximum clique problem_, and _maximum independent set problem_ can all be solved in **polynomial** time. In addition, several important min-max theorems in combinatorics, such as Dilworth's theorem, can be expressed in terms of the perfection of certain associated graphs.

### Chordal Graph

A chordal graph is a simple graph in which every cycle of length greater than three has a chord. Equivalently, the graph contains no induced cycle of length four or more. Thus every induced subgraph of a chordal graph is chordal.

Every chordal graph is perfect.

It is possible to recognize chordal graphs in linear time. Furthermore, a maximum clique of a chordal graph can be found in polynomial time although the problem is NP-complete for general graphs.

[check which C++ version](https://stackoverflow.com/a/51536462/6421652)
