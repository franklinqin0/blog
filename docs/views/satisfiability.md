---
title: Satisfiability
date: 2020-06-12
categories:
 - study
tags:
 - tech
publish: false
---

This blog features the SAT(satisfiability) problem.

<!-- more -->

## Definition of "Satisfy"

Rather than the normal definition of "meet the expectations, needs, or desires of (someone)", *satisfy* actually means "(of a quantity) make (an equation) true".

## Definitions of Problems

**SAT**: given a boolean formula ($\wedge$ AND, $\vee$ OR, $\neg$ NOT) over $n$ variables $x_1, x_2, ... , x_n$, can you set $x_i$'s to make formula true?

**Circuit SAT**: formula is expressed as a DAG circuit of logic gates.

**CNF(conjunctive normal form) SAT**: *formula* is AND of *clauses*, a *clause* is OR of *literals*, a literal is $x_i$ or $\neg x_i$. It can also be viewed as bipartite graph of variables and clauses.

**3SAT**: consists of OR of 3 literals.

**3SAT-5**: each variable occurs in less than 5 clauses.

**Monotone 3SAT**: each clause is all positive or all negative.

**2SAT**: OR clause of 2 literals.
$$a + b = c$$
