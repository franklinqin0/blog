---
title: Course Scheduling Algorithm
date: 2020-09-05
sidebar: "auto"
categories:
  - study
tags:
  - tech
  - research
publish: false
---

During the past summer, I worked at a friend's tech startup and established a course scheduling system. I served as a full stack engineer for backend, frontend, and algorithm. In the following I will share some ideas and insights on the algorithm.

<!-- more -->

## Baloney

1. As informed by Professor [Madeleine Udell](https://people.orie.cornell.edu/mru8/bio.html), [Bill Gates](https://en.wikipedia.org/wiki/Bill_Gates#Early_life) wrote a class scheduling program for his school in exchange for computer time. As [the rumor](https://skeptics.stackexchange.com/a/16906) says, he tweaked the program’s code so that he was placed in classes with mostly female students
2. While I was a [voluntary teacher teaching English](why_vt) in last September, a local teacher complained to me about the hassle of spending so much time scheduling courses for the entire school. Even with cheap pirated software, he still had to manually adjust schedules in order to satisfy various requirements proposed by other teachers. I immediately realized that integer programming should be quite helpful for the algorithm. However, I forgot most of what I learned in _Optimization II_, let alone how to transform the data into code
3. The course scheduling program can be classified into 2 types: high school (fixed timeslots) or college (flexible timeslots), but I will only talk about the 1st, as the system I developed served high schools
4. [It can be proved](http://digitalcommons.calpoly.edu/cgi/viewcontent.cgi?article=1255&context=theses) that the decision problem is NP-complete and the optimization problem is NP-hard. Let `m` be the number of slots and `n` the number of schedules. Since each schedule must be assigned to a slot, there are $m^n$ possible ways to schedule courses (if `m = 40` and `n = 100`, then $40^{100}$ is about $1.607 \times 10^{159}$). Thus, we have to come up with some smart tricks to restrict this astronomical complexity and turn it close to polynomial runtime

## Data Models

Code should be designed around data instead of the other way around. Thus, building sensible data models is crucial. Given existing data models in `teacher`, `class`, `course` (taught by at most 1 teacher and to at most 1 class), I created a few more models, two most essential of which are `slot` and `schedule`.

`Slot` is a timeslot and has the following information:

- start time
- end time
- school day
- free (if _false_, no `schedule` can be assigned to this `slot`)

`Schedule` is 1 weekly session of a course (can be many sessions) and contains following information:

- course
- teacher
- class
- room
- `slot` (refers if assigned to the `slot`)

## Integer Programming (IP)

Through careful review over ORIE 3310 course notes, and help of Cornell professors, I was able to realize the algorithm in code. In the following, I will restrict to the math formulations of IP rather than code.

What is integer programming? According to [Wikipedia](https://en.wikipedia.org/wiki/Integer_programming), _it is a mathematical optimization or feasibility program in which some or all of the variables are restricted to be integers. In many settings, the term refers to **integer linear programming (ILP)**, in which the objective function and the constraints (other than the integer constraints) are linear._

Here is an **linear program** in canonical form:

$$
\begin{array}{ll}
\text{maximize} & \mathbf{c}^{\mathrm{T}} \mathbf{x} \\
\text{subject to} & A \mathbf{x} \le \mathbf{b} \\
& \mathbf{x} \ge \mathbf{0}
\end{array}
$$

An **integer linear program (ILP)** has the additional integrality constraints: $\mathbf{x} \in \mathbb{Z}^{n}$.

A **mixed integer linear program (MILP)** has some variables constrained to be integers, and others not.

In the following math formulations, all decision variables are binary: $0$ or $1$, a special case of integer programming, and a usual practice for [assignment problems](https://developers.google.com/optimization/assignment/overview).

### Complexity

LPs can be solved efficiently (in polynomial time), but ILPs and MILPs are NP-complete due to additional constraints.

### Basic Formulation

Whether assigning a `schedule` to a `slot` is a binary decision and I need a boolean variable to represent it. For each slot $i$ and schedule $j$, a binary decision variable `x[i, j]` is defined. There are `m * n` decision variables and $2^{mn}$ assignment possibilities, where `m` is number of slots and `n` number of schedules.

Further, the core constraint is to **have no conflict** in the timetable, i.e., no more than $1$ `schedule` of each `course`, `teacher`, `class`, or `room` in each `slot`. To represent these in math:

**Boolean Condition**: $0$ means schedule $j$ is not assigned to slot $i$, $1$ means positive.  
$\mathbf{x}_{ij} = 0/1$  
for all slots $i \in [1..m]$ and schedules $j \in [1..n]$

Note that for now, **each course is taught by one and only one teacher**, so the **Unique Course** condition can be satisfied by the below **Unique Teacher** condition.

**Unique Teacher**: for each slot, at most 1 out of all schedules by a teacher is assigned.  
$\sum_{j \in \mathbf{T}} \mathbf{x}_{ij} \le 1$  
for each $i \in [1..m]$, where $T$ is the set of schedules taught by each teacher

**Unique Class**: for each slot, at most 1 out of all schedules from a course is assigned.  
$\sum_{j \in \mathbf{C}} \mathbf{x}_{ij} \le 1$  
for each $i \in [1..m]$, where $C$ is the set of schedules of each class

**Unique Room**: for each slot, at most 1 out of all schedules in a room is assigned.  
$\sum_{j \in \mathbf{R}} \mathbf{x}_{ij} \le 1$  
for each $i \in [1..m]$, where $R$ is the set of schedules in each room

And don't forget! We must **assign each schedule in some slot**.  
$\sum_{i = 1}^{m} \mathbf{x}_{ij} = 1$  
for each $j \in [1..n]$

### Parallel Electives

It should be obvious that for a set of classes (usually a grade), compulsory and elective courses taken by a class should not be scheduled in the same slot. To go one step further, the high school requires the feature "parallel electives", which requires **a set of courses enrolled by a set of classes to be assigned at a same slot**. A student from these classes can thus only choose _at most one_ out of these courses for this semester.

It is enforced that **each schedule can only belong to one parallel elective**.

For the math formulation, I will start with an illustrative example. Say we have three courses, $A$, $B$, $C$, and each has $k$ weekly schedules (same _number of schedules_ is recommended but not required). Therefore, schedules $A_1$, ..., $A_k$, $B_1$, ..., $B_k$, $C_1$, ..., $C_k$ store the same id of a parallel elective. $A$, $B$, $C$ are then zipped and produced $k$ combinations: $[A_1, B_1, C_1]$, ..., $[A_k, B_k, C_k]$. For each combination in a parallel elective, the schedules are either all scheduled in a slot or not:  
$\sum_{j_1, j_2 \in \mathbf{P}, j_1 \ne j_2} x_{ij_1} = x_{ij_2}$  
for each slot $i \in [1..m]$, where $P$ represents the $p$-th combination $[A_p, B_p, C_p]$ and $p \in [1..k]$

### Assigned Schedules

Sometimes the administrator may have assigned some schedules to some slots already, so the algorithm only deals with free schedules. However, we need to satisfy no-conflict constraints with the assigned schedules. There are basically two ways to deal with assigned schedules (say schedule $j$ is assigned to slot $i$):

1. Assign decision variables involving assigned slot and schedule to $1$, so that the free schedules automatically satisfy previous constraints. E.g., set $x[i, j] = 1$
2. All the other schedules with same teacher, class, room as schedule $j$ should not be assigned at slot $i$. E.g., if schedule $j$ is a **physics** course and taught by **Albert** to class **Thoreau**, then decision variable of any free schedule that is a **physics** course or taught by **Albert** or taught to class **Thoreau** is set to $0$ at slot $i$.

The 1st way has the number of decision variables equal to that of all schedules but has less constraints. The 2nd way has the number of decision variables equal to that of only free schedules but has more constraints.

### Further Requirements

Clearly, the administrator was not happy enough with the basic requirements above and wanted to minimize manual adjustments. He proposed two additional needs:

1. Some teachers cannot teach any course in certain slots
2. Assign two consecutive schedules for certain times (max is `floor(# schedules / 2)`) per week

The 1st requirement is easy whereas the 2nd is more tricky.

#### Slot -> Teacher(s)

Say `teacher` $t$ is _not free_ at `slot` $i$:  
$\sum_{j \in \mathbf{T}} x_{ij} = 0$  
for each $i \in [1..m]$, where $T$ is the set of schedules taught by teacher $t$

#### Consecutive Schedules

Say there are 2 schedules $j_1$ and $j_2$ to be assigned to 2 slots $i$ and $i + s$, where $s$ is the number of school days (usually $5$). Thus, `x[i, j_1]` and `x[i + s, j_2]` should both be set to $1$ (**product** of 2 decision variables) to ensure the consecutive condition. In reality, $i$ can be any `slot` $\in [0..m-s]$, and $\text{consecutives}$ is the mapping from a `course` to `# consecutives`.

Here are the _constraints_:  
$\sum_{i = 0}^{m - s} \sum_{j_1, j_2 \in \mathbf{C}, j_1 \neq j_2} x[i, j_1] \times x[i + s, j_2] \le \text{consecutives}[\mathbf{C}]$  
where $C$ is the set of schedules of each course

And the _objective_ is basically to maximize sum of LHS of constraints.

This formulation works theorectically, but it has nonlienar terms(product of 2 decision variables) in both constraints and objective. It is no longer standard IP, and so requires [AddMultiplicationEquality](https://developers.google.com/optimization/reference/python/sat/python/cp_model#addmultiplicationequality) from [CP-SAT solver](https://developers.google.com/optimization/cp/cp_solver) to create a new decision variable for each product of `x`.

## Heuristic Algorithms

Following are some heuristic algorithms that I know of and may also solve the course scheduling problem but undoubtedly inferior to IP.

### Genetic Algorithm (GA)

Before integer programming, I initially used GA for the course scheduling algorithm, as there are more code using GA on GitHub than IP. After 3 weeks of trial and error, I was finally able to come up with a viable implementation of crossover, mutation, and fitness function. Though it is easy to tweak fitness function as requirements add on, it has [so many caveats](https://www.researchgate.net/post/What_are_the_limitations_of_genetic_algorithms_in_solving_problems_with_optimal_solution):

- GAs are not suited for all problems, especially problems which are simple and for which derivative information is available.
- Fitness value is calculated repeatedly which might be computationally expensive for some problems.
- Being stochastic, there are no guarantees on the optimality or the quality of the solution.
- If not implemented properly, the GA may not converge to the optimal solution.
- Stochastic algorithms in general can have difficulty obeying equality constraints.
- GA is sensitive to the initial population used. Wide diversity of feasible solutions is what you want.

Essentially, GA depends heavily on the randomized generated initial population and may be ineffective or inefficient if not operated properly. There is a consensus in academia that GA, though a generic problem solver, is at best the 2nd best way to solve any problem.

Simply put, in terms of course scheduling, GA gives an expedient solution but IP gives an optimal one.

### Manual Simulation

My colleagues remind me of a simple algorithm: simulate the manual way of scheduling courses and tackle by each course/teacher/class. This would gradually reduce the number of free schedules. Though it works for basic cases, it does not work well with more requirements (such as [parallel electives](#parallel-electives) and [consecutive schedules](#consecutive-schedules)).

In short, though intuitive, the algorithm does not go much further than manual scheduling. Unfortunately, like GA, no strict math proof can be given to ensure the existence of a feasible solution.

## Timeline

Following is the timeline for implementation of algorithms: GA and IP.

| Time                   | Description                                                                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| early June             | spent 3 weeks on GA, but does not work well with large number of schedules                                                                         |
| late July - mid August | thought about IP formulations, and read the [assignment example problem](https://developers.google.com/optimization/assignment/assignment_example) |
| 8/14 11:41 a.m.        | got 1st answer from IP to satisfy [basic requirements](#basic-formulation)                                                                         |
| 8/17 11:00 p.m.        | finished [parallel electives](#parallel-electives)                                                                                                 |
| 9/17 3:35 a.m.         | converted from MIP to CP-SAT solver                                                                                                                |
| 9/18 9:42 p.m.         | finished [consecutive schedules](#consecutive-schedules)                                                                                           |

Other times I was doing backend and frontend development.

## Thanks

My great thanks go to many of my friends, who listened to my vague ideas, challenged me with insightful questions, and inspired me to pursue excellence.

My special thanks go to Professor [David Williamson](http://www.davidpwilliamson.net/work), who elegantly taught ORIE 3310 in spring 2017 at Cornell, patiently answered my ignorant questions in emails and suggested to me the extremely useful [Google OR-Tools](https://developers.google.com/optimization).

My [very special thanks go to my mom](https://youtu.be/nBcJlo8QVHc), who persistently helped find so many bugs in my initial system without grudges, and constantly encouraged me to keep on refining it.
