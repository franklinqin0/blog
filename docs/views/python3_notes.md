---
title: Python3 Notes
date: 2020-03-10
categories:
 - study
tags:
 - tech
publish: false
---

While studying for interview problems, I use `Python3` as the PL and feel like concluding its commonly used features.

<!-- more -->

## Data Structures

Sometimes it's not so obvious to see how to use a data structure in `Python3`.

### String (Immutable)

'' or ""

#### f-string

From [https://docs.python.org/3/reference/lexical_analysis.html#f-strings]():

::: tip f-strings
For example: `f'{6:08b}'`.

Starting with `f`, represent int `6` in `8` `b`inary digits with `0`'s padded at front. So the evaluated result is: `'00000110'`.

Equivalently, could do `bin(6)[2:].zfill(8)`, where `zfill` added the `0`'s padded at front.
:::

### HashSet

set()

### HashMap

{}

### Array

[]

### Matrix

[0]*2
[[0] for i in range()]...

### Stack

[]
`from collections import deque` and initialize a stack as `deque()`

### Queue

More at [Queue in Python](https://www.geeksforgeeks.org/queue-in-python/).

### Linked List

[]

### Tuple (Immutable)

()
