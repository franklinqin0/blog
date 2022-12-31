---
title: Literature Review on "Why Did I Fail?"
date: 2022-12-20
sidebar: "auto"
categories:
  - study
tags:
  - tech
  - research
publish: false
---

The following review is based on [^1].

<!-- and [^2] -->

## Cause-effect Model

Learn a causal Bayesian network.

Need a large amount of data -> simulated environment

An action is characterized by a set of RVs: $X = {X_1, X_2, \cdots, X_n}$. Potential causes $C \subset X$, outcome/effect vars $E \subset X$. Causal inference: effect of $C$ on $E$.

Bayesian networks are defined via a DAG, where vertices are $X$ and edges are dependencies. Markov property, joint prob distr -> local prob distr

### Structure Learning

constraint-based-algorithms use statistical tests to learn conditional independence relations (constraints) from the data.

### Parameter Learning

MLE is used to fit the params.

## Causal Explanations

Generate contrastive explanations upon task failures using BFS.

[^1]: Diehl, Maximilian, and Karinne Ramirez-Amaro. "Why did I fail? A Causal-based Method to Find Explanations for Robot Failures." arXiv preprint arXiv:2204.04483 (2022).
[^2]: Diehl, Maximilian, and Karinne Ramirez-Amaro. "A Causal-based Approach to Explain, Predict and Prevent Failures in Robotic Tasks." arXiv preprint arXiv:2209.05255 (2022).
