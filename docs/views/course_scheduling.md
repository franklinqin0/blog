---
title: Course Scheduling Problem
date: 2020-09-05
categories:
  - study
tags:
  - tech
---

During the past summer, I worked at a friend's tech startup and established a course scheduling system. I served as a full stack engineer for this task, learned a lot during such process and want to share some ideas and insights on this project.

<!-- more -->

## Data Models

Code should be built around data instead of the other way around. Thus, building a sensible data model is crucial. Given models in teacher, class, course (stores pointer of at most 1 teacher and at most 1 class), I created a few more models, two most essential of which are `slot` and `schedule`. `Slot` has information on the start and end times, which school day, which session on the school day, etc. If a `slot` is not available to assign any schedule, its field `free` is then false. `Schedule` wraps around course (name, teacher, class), room, and of course, `slot`. If a course has multiple lectures during the week, then there are multiple schedules corresponding to the course. If a schedule is assigned to a slot, the `slot` id is then stored.

## Algorithm - Integer Programming (IP)

When I took over the task of high school course scheduling, I was quite excited and immediately realized that I could use the my ORIE knowledge (specifically, integer programming) the first time after my graduation. However, I forgot most of what I learned in ORIE 3310 (Optimization II), let alone how to transform the data into code. But through review over course notes, and help of college professors (my special thanks go to Professor [David Williamson](http://www.davidpwilliamson.net/work), the teacher who taught me ORIE 3310 in spring 2017), I was able to realize the algorithm in code. No code will be displayed below to protect business secrets, but math can be shared with no concern.

What is integer programming? According to [Wikipedia](https://en.wikipedia.org/wiki/Integer_programming), _it is a mathematical optimization or feasibility program in which some or all of the variables are restricted to be integers. In many settings, the term refers to integer linear programming (ILP), in which the objective function and the constraints (other than the integer constraints) are linear._

Here is an integer linear program in canonical form:

$$
\begin{array}{ll}
\text{maximize} & \mathbf{c}^{\mathrm{T}} \mathbf{x} \\
\text{subject to} & A \mathbf{x} \leq \mathbf{b} \\
& \mathbf{x} \geq \mathbf{0} \\
\text {and} & \mathbf{x} \in \mathbb{Z}^{n}
\end{array}
$$

A linear program in canonical form would not require the integrality constraint.

In the following math formulations, the decision variables are binary, either 0 or 1. This is a special case of integer programming, and a usual practice for assignment problems.

### Basic Formulation

Whether I assign a schedule to a slot or not, this is a binary decision and I need a boolean variable to represent it. The decision variable is defined as `x[i, j]`, where `x` is a dictionary whose key is a tuple `(i, j)` and value is boolean. `i` represents a slot, and `j` a schedule. There are `n * m` decision variables, where `n` is number of slots and `m` number of schedules.

Further, the core constraint is to have no conflict in the timetable, i.e., no more than one schedule of each course, teacher, class, or room in each slot. To represent these in math:

$x = 0/1$ (_boolean condition_)

$\sum_{j \in \mathbf{T}} x_{ij} \le 1$ for each slot $i$, where $T$ is the set of schedules taught by each teacher (because we assume each course is taught by one and only one teacher, the _unique course condition_ can be satisfied by this _unique teacher condition_)

$\sum_{j \in \mathbf{C}} x_{ij} \le 1$ for each slot $i$, where $C$ is the set of schedules of each class (_unique class condition_)

$\sum_{j \in \mathbf{R}} x_{ij} \le 1$ for each slot $i$, where $R$ is the set of schedules in each room (_unique room condition_)

$\sum_{i = 0}^{n} x_{ij} = 1$ for each schedule $j$ (easy to forget, but we have to assign a schedule in some slot)

### Parallel Electives

It should be obvious that for a set of classes (usually a grade), compulsory and elective courses taken by a class should not be scheduled in the same slot. To go one step further, the high school requires the feature "parallel electives", which requires a set of courses enrolled by a set of classes to be assigned at a same slot. A student from these classes can thus only choose at most one out of these courses for this semester.

I then created a new data model `parallel elective`, and stores the id's of classes (MongoDB allows an array to be stored in a row). If a course schedule belongs to a parallel elective, it then stores its id. This model is simple and based on the assumption that each schedule can only belong to one parallel elective.

For the math formulation, I will start with an illustrative example. Say we have three courses, $A$, $B$, $C$, and each has $k$ weekly schedules (same _number of schedules_ is recommended but not required). Therefore, schedules $A_1$, ..., $A_k$, $B_1$, ..., $B_k$, $C_1$, ..., $C_k$ store the same id of a parallel elective. $A$, $B$, $C$ are then zipped and produced $k$ combinations: $[A_1, B_1, C_1]$, ..., $[A_k, B_k, C_k]$. For each combination in a parallel elective, the schedules are either scheduled together or not:

$\sum_{j \in P} x_{ij}$ for each slot $i$, where $P$ represents the $p$-th combination $[A_p, B_p, C_p]$ and $p \in [1..k]$

### Assigned Schedules

Sometimes the administrator may have assigned some schedules to some slots already, so the algorithm only deals with free schedules. However, we need to satisfy no-conflict constraints with the assigned schedules. There are basically two ways to deal with assigned schedules (assume schedule $j$ is assigned to slot $i$):

1. Assign decision variables involving assigned slot and schedule to $1$, so that the free schedules automatically satisfy previous constraints. E.g., set $x[i, j] = 1$
2. All the other schedules with same teacher, class, room as schedule $j$ should not be assigned at slot $i$. E.g., if schedule $j$ is a **physics** course and taught by **Albert** to class **Thoreau**, then decision variable of any free schedule that is a **physics** course or taught by **Albert** or taught to class **Thoreau** is set to $0$ at slot $i$.

The 1st way has the number of decision variables equal to that of all schedules but has less constraints. The 2nd way has the number of decision variables equal to that of only free schedules but has more constraints.

### Further Requirements

Clearly, the administrator was not happy enough with the basic requirements above and wanted to minimize manual adjustments. He proposed two additional needs:

1. Some teachers cannot teach any course in some slots.
2. Assign two schedules in a row once per week.

TODO: To be continued.

## More Algorithms

There may be other ways to solve the course scheduling problem but do not work as well as IP.

### Genetic Algorithm (GA)

Before integer programming, I initially used GA for the course scheduling algorithm, as there are more code using GA on GitHub than IP. After three weeks of trial and error, I was finally able to come up with a viable implementation of crossover, mutation, and fitness function. Though it is easy to tweak fitness function as requirements add on, it has [so many inconveniences](https://www.researchgate.net/post/What_are_the_limitations_of_genetic_algorithms_in_solving_problems_with_optimal_solution):

- GAs are not suited for all problems, especially problems which are simple and for which derivative information is available.
- Fitness value is calculated repeatedly which might be computationally expensive for some problems.
- Being stochastic, there are no guarantees on the optimality or the quality of the solution.
- If not implemented properly, the GA may not converge to the optimal solution.
- Stochastic algorithms in general can have difficulty obeying equality constraints.
- GA is sensitive to the initial population used. Wide diversity of feasible solutions is what you want.

Essentially, GA depends heavily on the initial population and may be ineffective or inefficient if not operated properly. Being stochastic, there are no guarantees on the optimality or the quality of the solution. Therefore, there is a consensus in the academia that GA, though a generic problem solver, is at best the 2nd best way to solve any problem.

Simply put, in the case of course scheduling, GA is definitely inferior to IP.

### Divide & Conquer

My colleagues remind me of the usual and manual way of scheduling courses: tackle by each course/teacher/class. This would gradually reduce the number of free schedules. Though it works well for basic cases, but not so much when parallel electives are involved. This algorithm may schedule the parallel electives before normal schedules, but may require additional adjustments after assignment.

In short, the algorithm does not go further than manual scheduling, though seems intuitive. Unfortunately, like GA, no strict math proof can be given to ensure the existence of a feasible solution.
