---
title: Interview Algorithms
date: 2020-03-10
categories:
  - study
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

## Dijkstra's Algorithm

## A\* Algorithm

[A video explanation](https://youtu.be/mZfyt03LDH4)

[A detailed comparison btw BFS, Dijkstra, and A\*](https://www.redblobgames.com/pathfinding/a-star/introduction.html)

[A clear implementation](https://towardsdatascience.com/a-star-a-search-algorithm-eb495fb156bb)

$F = G + H$, where $F$ is the estimated distance (priority), $G$ is the actual distance travelled from source (depth), and $H$ is the heuristic distance to the target.

## DFS

When to use BFS instead of DFS?

- when key words like **shortest path** or **least times** show up
- traverse in a matrix
- layered traverse
- exponential complexity requires bidirectional BFS to reduce complexity

## Backtracking

a methodology where we mark the current path of exploration, if the path does not lead to a solution, we then revert the change (i.e. backtracking) and try another path.

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

## Morris Traversal

[Algorithm](https://stackoverflow.com/a/5506601/6421652):

- Initialize current as root
- While current is not NULL
  - If current does not have left child
    1. Add current’s value
    2. Go to the right, i.e., current = current.right
  - Else
    1. In current's left subtree, make current the right child of the rightmost node
    2. Go to this left child, i.e., current = current.left

```py

```

## Rabin Karp (RK) Algorithm

```py

```

## KMP

## Manacher's algorithm

## Union Find

The data structure is also called Disjoint Set and consists of two operations: `find` and `union`:

- `find` the root of that component by following the parent nodes until a self loop is reached (a node whose parent is itself)
- `union` two elements: if the root nodes are different make one of the root nodes the parent of the other

### Array

From William Fiset's [code](https://github.com/williamfiset/Algorithms/blob/master/src/main/java/com/williamfiset/algorithms/datastructures/unionfind/UnionFind.java) and [video](https://youtu.be/KbFlZYCpONw):

```java
public class UnionFind {

  // The number of elements in this union find
  private int size;

  // Used to track the size of each of the component
  private int[] sz;

  // id[i] points to the parent of i, if id[i] = i then i is a root node
  private int[] id;

  // Tracks the number of components in the union find
  private int numComponents;

  public UnionFind(int size) {

    if (size <= 0) throw new IllegalArgumentException("Size <= 0 is not allowed");

    this.size = numComponents = size;
    sz = new int[size];
    id = new int[size];

    for (int i = 0; i < size; i++) {
      id[i] = i; // Link to itself (self root)
      sz[i] = 1; // Each component is originally of size one
    }
  }

  // Find which component/set 'p' belongs to, takes amortized constant time.
  public int find(int p) {

    // Find the root of the component/set
    int root = p;
    while (root != id[root]) root = id[root];

    // Compress the path leading back to the root.
    // Doing this operation is called "path compression"
    // and is what gives us amortized time complexity.
    while (p != root) {
      int next = id[p];
      id[p] = root;
      p = next;
    }

    return root;
  }

  // This is an alternative recursive formulation for the find method
  // public int find(int p) {
  //   if (p == id[p]) return p;
  //   return id[p] = find(id[p]);
  // }

  // Return whether or not the elements 'p' and
  // 'q' are in the same components/set.
  public boolean connected(int p, int q) {
    return find(p) == find(q);
  }

  // Return the size of the components/set 'p' belongs to
  public int componentSize(int p) {
    return sz[find(p)];
  }

  // Return the number of elements in this UnionFind/Disjoint set
  public int size() {
    return size;
  }

  // Returns the number of remaining components/sets
  public int components() {
    return numComponents;
  }

  // Unify the components/sets containing elements 'p' and 'q'
  public void unify(int p, int q) {

    // These elements are already in the same group!
    if (connected(p, q)) return;

    int root1 = find(p);
    int root2 = find(q);

    // Merge smaller component/set into the larger one.
    if (sz[root1] < sz[root2]) {
      sz[root2] += sz[root1];
      id[root1] = root2;
    } else {
      sz[root1] += sz[root2];
      id[root2] = root1;
    }

    // Since the roots found are different we know that the
    // number of components/sets has decreased by one
    numComponents--;
  }
}
```

### Pointer

From Tushar Roy's [code](https://github.com/mission-peace/interview/blob/master/src/com/interview/graph/DisjointSet.java) and [video](https://youtu.be/ID00PMy0-vE):

```java
import java.util.HashMap;
import java.util.Map;

/**
 * Disjoint sets using path compression and union by rank
 * Supports 3 operations
 * 1) makeSet
 * 2) union
 * 3) findSet
 *
 * For m operations and total n elements time complexity is O(m*f(n)) where f(n) is
 * very slowly growing function. For most cases f(n) <= 4 so effectively
 * total time will be O(m). Proof in Coreman book.
 */
public class DisjointSet {

    private Map<Long, Node> map = new HashMap<>();

    class Node {
        long data;
        Node parent;
        int rank;
    }

    /**
     * Create a set with only one element.
     */
    public void makeSet(long data) {
        Node node = new Node();
        node.data = data;
        node.parent = node;
        node.rank = 0;
        map.put(data, node);
    }

    /**
     * Combines two sets together to one.
     * Does union by rank
     *
     * @return true if data1 and data2 are in different set before union else false.
     */
    public boolean union(long data1, long data2) {
        Node node1 = map.get(data1);
        Node node2 = map.get(data2);

        Node parent1 = findSet(node1);
        Node parent2 = findSet(node2);

        // if they are part of same set do nothing
        if (parent1.data == parent2.data) {
            return false;
        }

        // else whoever's rank is higher becomes parent of other
        if (parent1.rank >= parent2.rank) {
            //increment rank only if both sets have same rank
            parent1.rank = (parent1.rank == parent2.rank) ? parent1.rank + 1 : parent1.rank;
            parent2.parent = parent1;
        } else {
            parent1.parent = parent2;
        }
        return true;
    }

    /**
     * Finds the representative of this set
     */
    public long findSet(long data) {
        return findSet(map.get(data)).data;
    }

    /**
     * Find the representative recursively and does path
     * compression as well.
     */
    private Node findSet(Node node) {
        Node parent = node.parent;
        if (parent == node) {
            return parent;
        }
        node.parent = findSet(node.parent);
        return node.parent;
    }
}
```
