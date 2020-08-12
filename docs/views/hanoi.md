---
title: Tower of Hanoi
date: 2020-08-09
categories:
  - study
tags:
  - tech
sidebar: false
---

A few weeks ago, I was invited to a friend's house. On the table I saw the **Tower of Hanoi** game. I immediately realized with intuition that the total number of steps to move should be exponential to the number of disks, but I could not think of a proof at the time. Thus, I write this blog to explain this interesting ancient problem.

<!-- more -->

## Origin

French mathematician Édouard Lucas invented this puzzle in 1883. Some legend said that in a temple there were three rods and 64 disks. When the last move of the puzzle is completed, the world will end. The location of the temple or monastery was various and said to be in different parts of the world, including Hanoi, Vietnam, hence the name of the puzzle.

## Problem

Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

1. Only one disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
3. No disk may be placed on top of a smaller disk.

## Solution

Let's say the 3 rods are called `A`, `B`, `C`. At first, `n=4`, `from_rod = A`, `to_rod = B`, `aux_rod = C`. For every `n` disks, our strategy is to first move all `n - 1` disks from `A` to `B`, move the `n`th disk from `A` to `C`, and at last move `n - 1` disks from `B` to `C`. To move the `n-1` disks from `A` to `B`, we should first move `n-2` disks from `A` to `C`, move the `n-1`th disk from `A` to `B`, and at last move `n-2` disks from `C` to `B`. We follow such pattern recursively, until there is only 1 disk left. As the following code shows:

### Recursion

```py
def TowerOfHanoi(n , from_rod, to_rod, aux_rod):
    if n == 1:
        print("Move disk 1 from rod",from_rod,"to rod",to_rod)
    return TowerOfHanoi(n-1, from_rod, aux_rod, to_rod)
    print("Move disk",n,"from rod",from_rod,"to rod",to_rod)
    TowerOfHanoi(n-1, aux_rod, to_rod, from_rod)
```

### Driver code

```py
n = 4 # can be any positive integer
TowerOfHanoi(n, 'A', 'C', 'B')
```

## Proof for Exponential Number of Steps

Let $h_n$ be the number of steps with $n$ disks. Here is the proof:

$$h_n = 2h_{n-1} + 1$$
$$h_1 = 1$$

Solving the above two equations gives $h_n = 2^n - 1$, i.e., the [Mersenne primes](https://en.wikipedia.org/wiki/Mersenne_prime).

Now back to the legend. If the priests were able to move disks at a rate of one per second, using the smallest number of moves it would take them $2^{64} − 1$ seconds or roughly 585 billion years to finish, which is about 42 times the current age of the universe.

## Further

Following are interesting ways to go deeper but I am good for now.

- Iterative solutions
- Relation to Hamiltonian path
- Solutions to more than 3 rods

## References

The [Chinese wikipedia explanation](https://zh.wikipedia.org/wiki/%E6%B1%89%E8%AF%BA%E5%A1%94) is more terse and insightful than the [English one](https://en.wikipedia.org/wiki/Tower_of_Hanoi).

[This geeksforgeeks post](https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi) offers the [recursive solution](#recursion) code above, and a pretty good descriptive video.

[Wolfram Mathworld](https://mathworld.wolfram.com/TowerofHanoi.html) gives more math insights.
