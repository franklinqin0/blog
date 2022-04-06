---
title: Safe CPS Seminar - RL Teacher Advice
date: 2022-01-11
categories:
  - study
tags:
  - tech
publish: false
---

<!-- more -->

<!-- auROC
the computer-checked coordinates of each stage of a flight or sea journey

urban50
manhanttan 32

belief sharing
remote learning

actuating unstable RL

RL teacher advice

---

remember if not understand math
concept, contribution
2 survey papers
3 papers, 2015-2019, present: where from, conference/journal(impact factor), author, when, # citations

connection btw arxiv & conference
num citations, normalize by popularity of field, need fundamental understanding of field
watch out for plagiarism

build competitive advantage at the beginning is hard, later has better feeling in what to go into
different from others, or hard enough problem

next session:
Nov 30
some slides

before Christmas: Dec 14
construct slides
Rp's presentation

last session: Feb 9

3 pages:

1. metadata
2. concepts
3. personal opinion

human teacher advice
safe reinforcement learning
after 2015

Taylor + Zhan, Christiano, MacGlashan, high-level
e.g. how good should a teacher need to be
prob go for TAMER
find 1-2 papers citing the core papers
presentation expands concepts

final presentation
Jan 26

next presentation
Jan 12 -->

Goal of RL: optimize policy to maximize future rewards

## Policy

$$
\pi(s, a) = Pr(a = a | s = s)
$$

### Policy Iteration

typically converges in fewer iterations than [value iteration](value-iteration).

$$
\begin{aligned}
V_{\pi}(s) &= \mathbb{E} (R(s', s, \pi(s)) + \gamma V_{\pi}(s')) \\
&= \sum_{s} P(s' | s, \pi(s)) (R(s', s, \pi(s)) + \gamma V_{\pi}(s'))
\end{aligned}
$$

$$
\pi(s) = \underset{a}{\arg \max} \, \mathbb{E} [R(s', s, a) + \gamma V_{\pi}(s')]
$$

## Value

$$
V_{\pi} (s) = \mathbb{E} \left[\sum_{t} \gamma^{t} r_{t} \middle| s_{0} = s \right]
$$

### Bellman's Equation

Dynamic Programming (by Richard Bellman): solve multi-step optimization problems by breaking into smaller recursive sub-problems.

DP is closely related to Divide and Conquer, which relies on problem being non-overlapping and non-recursive.

$$
\begin{aligned}
V(s) &= \underset{\pi}{\max} \, \mathbb{E} \left[\sum_{t} \gamma^{t} r_{t} \middle| s_{0} = s \right] \\
&= \underset{\pi}{\max} \, \mathbb{E} \left[r_{0} + \sum_{t} \gamma^{t} r_{t} \middle| s_{0} = s \right] \\
&= \underset{\pi}{\max} \, \mathbb{E} \left[r_{0} + \gamma V(s') \right]
\end{aligned}
$$

extract policy from value function:

$$
\pi = \underset{\pi}{\arg \max} \, \mathbb{E} [r_{0} + \gamma V(s')]
$$

### Value Iteration

rewrite Bellman's equation

$$
V(s) = \underset{a}{\max} \, \sum_{s'} P(s' | s, a) (R(s', s, a) + \gamma V(s'))
$$

$$
\pi(s, a) = \underset{a}{\arg \max} \, \sum_{s} P(s' | s, a) (R(s', s, a) + \gamma V(s'))
$$

## Quality Function

$$
\begin{aligned}
Q(s, a) &= \text{quality of state/action pair} \\
&= E[R(s', s, a) + \gamma V(s')] \\
&= \sum_{s'} P(s' | s, a) (R(s', s, a) + \gamma V(s'))
\end{aligned}
$$

$$
V(s) = \underset{a}{\max} Q(s, a)
$$

$$
\pi(s, a) = \underset{a}{\arg \max} Q(s, a)
$$

### Q-Learning

predicts best action $a$ in state $s$ in order to maximize a cumulative reward.

This function can be estimated using **Q-learning**, which iteratively updates $Q(s, a)$ using the **Bellman Equation**:

$$
Q(s, a) = r + \gamma \, \underset{a'}{\max} Q(s', a')
$$

where $r$ is the immediate reward and $\gamma \underset{a'}{\max} Q(s', a')$ is the future reward.

## Q - Action Value

expected reward when the action is taken

$$
q_{*}(a) \doteq \mathbb{E}\left[R_{t} \mid A_{t}=a\right]
$$

### Sample-average Method

$$
Q_{t}(a) \doteq \frac{\text { sum of rewards when } a \text { taken prior to } t}{\text { number of times } a \text { taken prior to } t}=\frac{\sum_{i=1}^{t-1} R_{i} \cdot \mathbb{1}_{A_{i}=a}}{\sum_{i=1}^{t-1} \mathbb{1}_{A_{i}=a}}
$$

### Greedy Action Selection

$$
A_{t} \doteq \underset{a}{\arg \max } \, Q_{t}(a)
$$

### Incremental Update Rule

`NewEstimate = OldEstimate + StepSize(Target - OldEstimate)`

$$
Q_{n+1} = Q_{n} + \frac{1}{n} (R_{n} - Q{n})
$$

### Decaying past rewards

use a constant step size $\alpha$

$$
\begin{aligned}
Q_{n+1} &= \\
=& Q_{n}+\alpha\left[R_{n}-Q_{n}\right] \\
=& \alpha R_{n}+(1-\alpha) Q_{n} \\
=& \alpha R_{n}+(1-\alpha)\left[\alpha R_{n-1}+(1-\alpha) Q_{n-1}\right] \\
=& \alpha R_{n}+(1-\alpha) \alpha R_{n-1}+(1-\alpha)^{2} Q_{n-1} \\
=& \alpha R_{n}+(1-\alpha) \alpha R_{n-1}+(1-\alpha)^{2} \alpha R_{n-2}+\\
& \quad \cdots+(1-\alpha)^{n-1} \alpha R_{1}+(1-\alpha)^{n} Q_{1} \\
=&(1-\alpha)^{n} Q_{1}+\sum_{i=1}^{n} \alpha(1-\alpha)^{n-i} R_{i}
\end{aligned}
$$

## Exploration vs Exploitation

_Exploration_: **improve knowledge** for **long**-term benefit  
_Exploitation_: **exploit profit** for **short**-term benefit

The agent wants to explore the environment to **learn** as much about it as possible about the various actions. That way once it knows every arm's **true value** it can choose the best one for the rest of the time.

How to choose between exploration and exploitation?  
A simple method is to choose randomly.

### Epsilon-Greedy Action Selection

behave greedily (actions are those that look best at present) most of the time, but with small probability $\epislon$, instead select randomly from among all the actions with equal probability, independently of the action-value estimates (force to try non-greedy actions).

### Optimistic Initial Values

Limitations:

- optimistic initial values only **drive early exploration**
- they are not well-suited for **non-stationary problems**
- we may not know what the optimistic initial value should be

### Upper-Confidence Bound action

$$
A_{t} \doteq \underset{a}{\arg \max }\left[Q_{t}(a)+c \sqrt{\frac{\ln t}{N_{t}(a)}}\right]
$$

where $N_t(a)$ denotes the number of times that action $a$ has been selected prior to time $t$, and the number $c > 0$ controls the degree of exploration. If $N_t(a) = 0$, then $a$ is considered to be a maximizing action.

- uses **uncertainty** in the value estimates to balance exploration and exploitation

## Model-free vs. Model-based

Model-free is when an AI can directly derive an optimal policy from its interactions with the environment without needing to create a model beforehand.

Q learning is a **model-free** learning technique that can be used to find the **optimal action-selection** policy using a **Q function**.

[](https://youtu.be/aCEvtRtNO-M)

## MDP (Markov Decision Process)

formalize a wide variety of decision making problems.

The **goal** of an agent is to **maximize the expected return**.

In **episodic tasks**, the agent-environment interaction breaks up into **episodes**.

Reward hypothesis: all of what we mean by goals and purposes can be well thought of as the maximization of the expected value of the cumulative sum of a received scalar signal (called reward).
