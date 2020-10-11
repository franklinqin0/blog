---
title: Interview Algorithms
date: 2020-03-10
tags:
  - tech
publish: false
---

This blog features some of the most commonly used algorithms.

<!-- more -->

Thanks to:

- Walker M. White and Lillian Lee, teacher of CS1110: _Intro to Programming in Python_
- David Gries, teacher of CS2110: _OOP in Java_
- Michael Clarkson, teacher of CS3110: _FP in OCaml_
- Eva Tardos, teacher of CS4820: _Intro to Algorithms_

who taught me the core CS courses to help me write, categorize and understand the following algorithms.

## Import Libraries

```py
import random
```

## BFS

## DFS

### Note

Consider what happens to the root, leaf, and other nodes respectively. Define the entrance and exit clearly.

### Why

Search for answers in a tree. Enumerate all the possibilities.

### Shortcomings

High time complexity(all nodes). Recursion can be hard to understand.

## Input Size, Runtime, Algorithm

We could guess the types of algorithms from given input size.

A chip could run about $10^9$ operations in a second. Given input size, we could deduce the runtime, and thus the algorithm:

$n = 10^7$ $\rightarrow$ $O(n)$
$n = 10^4~10^6$ $\rightarrow$ $O(n\log n)$
$n = 10^3$ $\rightarrow$ $O(n^2)$
$n <= 20$ $\rightarrow$ $O(2^n)$ (DFS)

## Dutch National Flag

```py
def dnf(b, h, k):
    """Returns: Partition points for the Dutch National Flag

    The Dutch National Flag algorithm arranges the elements of b[h..k]
    so that negatives are first, then 0s, then positives. It returns a
    tuple (i,j)  representing the two partition points.

    Parameter b: The list to rearrange
    Precondition: b is a mutable sequence (e.g. a list).

    Parameter h: The starting point to sort
    Precondition: h is an int and a valid position in b

    Parameter k: The ending poing to sort
    Precondition: k is an int and a valid position in b
    """
    assert type(b) == list, `b`+' is not a list'
    assert 0 <= h and h < len(b), `h`+' is not a valid position in the list'
    assert 0 <= k and k < len(b), `k`+' is not a valid position in the list'

    # Loop variables to satisfy the invariant
    t = h
    j = k
    i= k+1

    # inv: b[h..t-1] < 0, b[t..i-1] unknown, b[i..j] = 0, and b[j+1..k] > 0
    while t < i:
        if b[i-1] < 0:
            _swap(b,i-1,t)
            t = t+1
        elif b[i-1] == 0:
            i = i-1
        else:
            _swap(b,i-1,j)
            i = i-1
            j = j-1

    # post: b[h..i-1] < 0, b[i..j] = 0, and b[j+1..k] > 0
    # Return dividers as a tuple
    return (i, j)
```

# NOTE: This uses a DIFFERENT invariant than the lab

def partition(b, h, k):
"""Returns: The new position of pivot in partitioned list b[h..k].

    The pivot is the initial value x = b[h].  This function rearranges the
    list so that elements <= x are before the pivot and elements >= x are
    after the pivot.

    Parameter b: The list to rearrange
    Precondition: b is a mutable sequence (e.g. a list).

    Parameter h: The starting point to sort
    Precondition: h is an int and a valid position in b

    Parameter k: The ending poing to sort
    Precondition: k is an int and a valid position in b
    """
    assert type(b) == list, `b`+' is not a list'
    assert 0 <= h and h < len(b), `h`+' is not a valid position in the list'
    assert 0 <= k and k < len(b), `k`+' is not a valid position in the list'

    # position i is end of first paritition range
    i = h
    # position j is BEFORE beginning of second partition range
    j = k

    # Find the first element in the list.
    x = b[h]

    # invariant: b[h..i-1] < x, b[i] = x, b[i+1..j] unknown, and  b[j+1..k] >= x
    while i < j:
        if b[i+1] >= x:
            # Move this to the end of the block.
            _swap(b,i+1,j)
            j = j - 1
        else:   # b[i+1] < x
            _swap(b,i,i+1)
            i = i + 1

    # post: b[h..i-1] < x, b[i] is x, and b[i+1..k] >= x
    return i

# HELPER FUNCTION

def \_swap(b, h, k):
"""Procedure swaps b[h] and b[k]

    Parameter b: The list to rearrange
    Precondition: b is a mutable sequence (e.g. a list).

    Parameter h: The first position to swap
    Precondition: h is an int and a valid position in b

    Parameter k: The second position to swap
    Precondition: k is an int and a valid position in b
    """
    # We typically do not enforce preconditions on hidden helpers
    temp = b[h]
    b[h] = b[k]
    b[k] = temp

# Linear search

def linear_search(b,c):
"""Returns: index of first occurrence of c in b; -1 if not found.

    Parameter b: The sequence to search
    Precondition: b is a sequence

    Parameter c: The value to search for
    Precondition: NONE (c can be any value)"""
    # Quick way to check if a sequence
    assert len(b) >= 0, `b`+' is a not a sequence (list, string, or tuple)'

    # Store in i the index of the first c in b[0..]
    i = 0

    # invariant: c is not in b[0..i-1]
    while i < len(b) and b[i] != c:
        i = i + 1;

    # post: b[i] == c OR (i == len(b) and c is not in b[0..i-1])
    return i if i < len(b) else -1

# Binary search

def binary_search(b,c):
"""Returns: index of first occurrence of c in b; -1 if not found.

    Parameter b: The sequence to search
    Precondition: b is a SORTED sequence

    Parameter c: The value to search for
    Precondition: NONE (c can be any value)"""
    # Quick way to check if a sequence; CANNOT easily check sorted
    assert len(b) >= 0, `b`+' is a not a sequence (list, string, or tuple)'

    # Store in i the value BEFORE beginning of range to search
    i = 0
    # Store in j the end of the range to search (element after)
    j = len(b)
    # The middle position of the range
    mid = (i+j)/2

    # invariant; b[0..i-1] < c, b[i..j-1] unknown, b[j..] >= c
    while j > i:
        if b[mid] < c:
            i = mid+1
        else:     # b[mid] >= c
            j = mid

        # Compute a new middle.
        mid = (i+j)/2

    # post: i == j and b[0..i-1] < c and b[j..] >= c
    return i if (i < len(b) and b[i] == c) else -1

def isort(b):
"""Insertion Sort: Sorts the array b in n^2 time

    Parameter b: The sequence to sort
    Precondition: b is a mutable sequence (e.g. a list)."""
    assert type(b) == list, `b`+' is not a list'

    # Start from beginning of list
    i = 0

    # inv: b[0..i-1] sorted
    while i  < len(b):
        _push_down(b,i)
        i = i + 1

    # post: b[0..len(b)-1] sorted

# HELPER FUNCTION

def \_push_down(b, k):
"""Moves the value at position k into its sorted position in b[0.k-1].

    Parameter b: The list to rearrange
    Precondition: b is a list, with b[0..k-1] sorted

    Parameter k: The position to push down into b[0..k-1]
    Precondition: k is an int and a valid position in b"""
    # We typically do not enforce preconditions on hidden helpers

    # Start from position k
    j = k

    # inv: b[j..k] is sorted
    while j > 0:
        if b[j-1] > b[j]:
            _swap(b,j-1,j)
        j = j - 1
    # post: b[0..k] is sorted

def ssort(b):
"""Selection Sort: Sorts the array b in n^2 time

    Parameter b: The sequence to sort
    Precondition: b is a mutable sequence (e.g. a list)."""
    assert type(b) == list, `b`+' is not a list'

    # Start from beginning of list
    i = 0

    # inv: b[0..i-1] sorted
    while i < len(b):
        index = _min_index(b,i);
        _swap(b,i,index)
        i = i+1
    # post: b[0..len(b)-1] sorted

# HELPER FUNCTION

def \_min_index(b, h):
"""Returns: The index of the minimum value in b[h..]

    Parameter b: The sequence to search
    Precondition: b is a mutable sequence (e.g. a list)."""
    # We typically do not enforce preconditions on hidden helpers

    # Start from position h
    i = h
    index = h;

    # inv: index position of min in b[h..i-1]
    while i < len(b):
        if b[i] < b[index]:
            index = i
        i = i+1

    # post: index position of min in b[h..len(b)-1]
    return index

def qsort(b):
"""Quick Sort: Sorts the array b in n log n average time

    Parameter b: The sequence to sort
    Precondition: b is a mutable sequence (e.g. a list)."""
    assert type(b) == list, `b`+' is not a list'

    # Send everything to the recursive helper
    _qsort_helper(b,0,len(b)-1)

def \_qsort_helper(b, h, k):
"""Quick Sort: Sorts the array b[h..k] in n log n average time

    Parameter b: The sequence to sort
    Precondition: b is a mutable sequence (e.g. a list).

    Parameter h: The starting point to sort
    Precondition: h is an int and a valid position in b

    Parameter k: The ending poing to sort
    Precondition: k is an int and a valid position in b
    """
    # We typically do not enforce preconditions on hidden helpers
    if k-h < 1:            # BASE CASE
        return

    # RECURSIVE CASE
    j = partition(b, h, k)
    # b[h..j-1] <= b[j] <= b[j+1..k]
    # Sort b[h..j-1]  and  b[j+1..k]
    _qsort_helper(b, h, j-1)
    _qsort_helper(b, j+1, k)

def roll(p):
"""Returns: a random int in 0..len(p)-1; i returned with prob p[i].

    Parameter p: The die value distribution
    Precondition: p a list of positive floats that sum to at least 1."""
    # Do not assert precondition; too complicated

    r = random.random()     # r in [0,1)
    # Think of interval [0,1] as divided into segments of size p[i]
    # Store into i the segment number in which r falls.
    i = 0
    sum_of = p[0]
    while r >= sum_of:
        sum_of = sum_of + p[i+1]
        i = i + 1

    return i

def scramble(b):
"""Scrambles the list to resort again

    Parameter b: The list to scramble
    Precondition: b is a mutable sequence (e.g. a list)."""
    assert type(b) == list, `b`+' is not a list'

    # Start from the beginning
    i = 0

    # inv: b[0..i-1] is scrambled

    while i < len(b):
        size = len(b)-i
        pos  = int(random.random()*size)
        _swap(b,i,i+pos)
        i = i+1
    # post: b[0..len(b)] is scrambled
