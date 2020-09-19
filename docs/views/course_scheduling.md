---
title: Course Scheduling Algorithm
date: 2020-09-05
categories:
  - study
tags:
  - tech
---

During the past summer, I worked at a friend's tech startup and established a course scheduling system. I served as a full stack engineer for this task, learned a lot and want to share some ideas and insights.

<!-- more -->

## Data Models

Code should be designed around data instead of the other way around. Thus, building sensible data models is crucial. Given existing data models in `teacher`, `class`, `course` (taught by at most 1 teacher and to at most 1 class), I created a few more models, two most essential of which are `slot` and `schedule`.

`Slot` is a timeslot and has the following information:

- start time
- end time
- school day
- free (`slot` is not available to assign any schedule)

`Schedule` is a weekly session of a course and contains following information:

- course
- teacher
- class
- room
- `slot` (if _false_, no `schedule` can be assigned to this `slot`)

There can be multiple `schedule`s for a `course`.

## Algorithm - Integer Programming (IP)

When I took over the task of high school course scheduling, I immediately realized that I could use the my ORIE knowledge (specifically, integer programming) the first time after my graduation. However, I forgot most of what I learned in _Optimization II_, let alone how to transform the data into code. Through careful review over ORIE 3310 course notes, and help of Cornell professors, I was able to realize the algorithm in code. To guard business secrets, no code will be displayed below, but math can be shared with no concern.

What is integer programming? According to [Wikipedia](https://en.wikipedia.org/wiki/Integer_programming), _it is a mathematical optimization or feasibility program in which some or all of the variables are restricted to be integers. In many settings, the term refers to integer linear programming (ILP), in which the objective function and the constraints (other than the integer constraints) are linear._

Here is an **integer linear program** in canonical form:

$$
\begin{array}{ll}
\text{maximize} & \mathbf{c}^{\mathrm{T}} \mathbf{x} \\
\text{subject to} & A \mathbf{x} \le \mathbf{b} \\
& \mathbf{x} \ge \mathbf{0} \\
\text {and} & \mathbf{x} \in \mathbb{Z}^{n}
\end{array}
$$

A **linear program** in canonical form is similar but omits the integrality constraint.

In the following math formulations, the decision variables are binary, either 0 or 1. This is a special case of integer programming, and a usual practice for assignment problems.

### Basic Formulation

Whether assigning a `schedule` to a `slot` is a binary decision and I need a boolean variable to represent it. For each slot $i$ and schedule $j$, a binary decision variable `x[i, j]` is defined. There are `n * m` decision variables, where `m` is number of slots and `n` number of schedules.

Further, the core constraint is to have **no conflict** in the timetable, i.e., no more than $1$ `schedule` of each `course`, `teacher`, `class`, or `room` in each `slot`. To represent these in math:

$x[i, j] = 0/1$ for all slots $i \in [1..m]$ and schedules $j \in [1..n]$ (_boolean condition_: $0$ means schedule $j$ is not assigned to slot $i$, $1$ means positive)

$\sum_{i = 1}^{m} \sum_{j \in \mathbf{T}} x_{ij} \le 1$, where $T$ is the set of schedules taught by each teacher (_unique teacher condition_: for each slot $i$, at most 1 out of all schedules in $T$ is assigned)

$\sum_{i = 1}^{m} \sum_{j \in \mathbf{C}} x_{ij} \le 1$, where $C$ is the set of schedules of each class (_unique class condition_: for each slot $i$, at most 1 out of all schedules in $C$ is assigned)

$\sum_{i = 1}^{m} \sum_{j \in \mathbf{R}} x_{ij} \le 1$, where $R$ is the set of schedules in each room (_unique room condition_: for each slot $i$, at most 1 out of all schedules in $R$ is assigned)

$\sum_{j = 1}^{n} \sum_{i = 1}^{m} x_{ij} = 1$ (have to assign each schedule in some slot)

Currently, each course is taught by one and only one teacher, the _unique course condition_ can be satisfied by this _unique teacher condition_.

### Parallel Electives

It should be obvious that for a set of classes (usually a grade), compulsory and elective courses taken by a class should not be scheduled in the same slot. To go one step further, the high school requires the feature "parallel electives", which requires _a set of courses enrolled by a set of classes to be assigned at a same slot_. A student from these classes can thus only choose _at most one_ out of these courses for this semester.

It is enforced that each schedule can only belong to one parallel elective.

For the math formulation, I will start with an illustrative example. Say we have three courses, $A$, $B$, $C$, and each has $k$ weekly schedules (same _number of schedules_ is recommended but not required). Therefore, schedules $A_1$, ..., $A_k$, $B_1$, ..., $B_k$, $C_1$, ..., $C_k$ store the same id of a parallel elective. $A$, $B$, $C$ are then zipped and produced $k$ combinations: $[A_1, B_1, C_1]$, ..., $[A_k, B_k, C_k]$. For each combination in a parallel elective, the schedules are either all scheduled in a slot or not:

$\sum_{j \in \mathbf{P}} x_{ij} = 0/k$ for each slot $i$, where $P$ represents the $p$-th combination $[A_p, B_p, C_p]$ and $p \in [1..k]$

### Assigned Schedules

Sometimes the administrator may have assigned some schedules to some slots already, so the algorithm only deals with free schedules. However, we need to satisfy no-conflict constraints with the assigned schedules. There are basically two ways to deal with assigned schedules (say schedule $j$ is assigned to slot $i$):

1. Assign decision variables involving assigned slot and schedule to $1$, so that the free schedules automatically satisfy previous constraints. E.g., set $x[i, j] = 1$
2. All the other schedules with same teacher, class, room as schedule $j$ should not be assigned at slot $i$. E.g., if schedule $j$ is a **physics** course and taught by **Albert** to class **Thoreau**, then decision variable of any free schedule that is a **physics** course or taught by **Albert** or taught to class **Thoreau** is set to $0$ at slot $i$.

The 1st way has the number of decision variables equal to that of all schedules but has less constraints. The 2nd way has the number of decision variables equal to that of only free schedules but has more constraints.

### Further Requirements

Clearly, the administrator was not happy enough with the basic requirements above and wanted to minimize manual adjustments. He proposed two additional needs:

1. Some teachers cannot teach any course in certain slots
2. Assign two consecutive schedules for certain times (max is `floor(# schedules / 2)`) per week

The 1st requirement is easy to implement, say there is a relationship between `slot` $i$ and `teacher` $t$:

$\sum_{j \in \mathbf{T}} x_{ij} = 0$, where $T$ is the set of schedules taught by teacher $t$

The 2nd requirement is indeed a bit tricky. Say there are 2 schedules $j_1$ and $j_2$ to be assigned to 2 slots $i$ and $i + s$, where $s$ is the number of school days (usually $5$). Thus, setting `x[i, j_1]` and `x[i + s, j_2]` both to 1 would ensure the consecutive condition. In reality, however, the $i$ cannot be determined, and _consecutives_ is given, i.e., the mapping from a `course` to `# consecutives`.

Here are the constraints:

$\sum_{i = 0}^{m - s} \sum_{j_1, j_2 \in \mathbf{C}, j_1 \neq j_2} x[i, j_1] * x[i + s, j_2] \le \text{consecutives}[\mathbf{C}]$, where $C$ is the set of schedules of each course

And the objective is basically to maximize sum of LHS of constraints.

This formulation works theorectically, but it has nonlienar terms(product of 2 decision variables) in both constraints and objective. It is no longer standard IP, and so requires [AddMultiplicationEquality](https://developers.google.com/optimization/reference/python/sat/python/cp_model#addmultiplicationequality) from [CP-SAT solver](https://developers.google.com/optimization/cp/cp_solver) to create a new decision variable for each product of `x`.

## More Algorithms

There are other possible ways to solve the course scheduling problem but do not work as well as IP.

### Genetic Algorithm (GA)

Before integer programming, I initially used GA for the course scheduling algorithm, as there are more code using GA on GitHub than IP. After 3 weeks of trial and error, I was finally able to come up with a viable implementation of crossover, mutation, and fitness function. Though it is easy to tweak fitness function as requirements add on, it has [so many caveats](https://www.researchgate.net/post/What_are_the_limitations_of_genetic_algorithms_in_solving_problems_with_optimal_solution):

- GAs are not suited for all problems, especially problems which are simple and for which derivative information is available.
- Fitness value is calculated repeatedly which might be computationally expensive for some problems.
- Being stochastic, there are no guarantees on the optimality or the quality of the solution.
- If not implemented properly, the GA may not converge to the optimal solution.
- Stochastic algorithms in general can have difficulty obeying equality constraints.
- GA is sensitive to the initial population used. Wide diversity of feasible solutions is what you want.

Essentially, GA depends heavily on the initial population and may be ineffective or inefficient if not operated properly. Being stochastic, it cannot guarantee on the optimality or the quality of the solution. Therefore, there is a consensus in academia that GA, though a generic problem solver, is at best the 2nd best way to solve any problem.

Simply put, in terms of course scheduling, GA gives an expedient solution but IP gives a feasible one.

### Manual Simulation

My colleagues remind me of a simple algorithm: simulate the manual way of scheduling courses: tackle by each course/teacher/class. This would gradually reduce the number of free schedules. Though it works well for basic cases, but not so much when parallel electives are involved. This algorithm may schedule the parallel electives before normal schedules, but may require additional adjustments after assignment.

In short, the algorithm does not go further than manual scheduling, though seems intuitive. Unfortunately, like GA, no strict math proof can be given to ensure the existence of a feasible solution.

## Thanks

My special thanks go to Professor [David Williamson](http://www.davidpwilliamson.net/work), who elegantly taught ORIE 3310 in spring 2017 at Cornell, patiently answered my ignorant questions in emails and suggested to me the vastly useful [Google OR-Tools](https://developers.google.com/optimization).
