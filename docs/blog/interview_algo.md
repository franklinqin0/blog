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

## Import Libraries

```py
import random
from heapq improt heappush, heappop
```

## Graph & Tree

### Trie

Trie (we pronounce "try") or prefix tree is a tree data structure, which is used for retrieval of a key in a dataset of strings. There are various applications of this very efficient data structure such as:

1. autocomplete
2. spell checker
3. IP routing (Longest prefix matching)
4. T9 predictive text
5. solving word games

There are several other data structures, like balanced trees and hash tables, which give us the possibility to search for a word in a dataset of strings. Then why do we need trie? Although hash table has $O(1)$ time complexity for looking for a key, it is not efficient in the following operations:

- finding all keys with a common prefix.
- enumerating a dataset of strings in lexicographical order.

Another reason why trie outperforms hash table, is that as hash table increases in size, there are lots of hash collisions and the search time complexity could deteriorate to $O(n)$, where $n$ is the number of keys inserted. Trie could use less space compared to Hash Table when storing many keys with the same prefix. In this case using trie has only $O(m)$ time complexity, where mm is the key length. Searching for a key in a balanced tree costs $O(m\log n)$ time complexity.

[Here](https://leetcode.com/discuss/general-discussion/1066206/introduction-to-trie) is a nice article explaining the implementation in both Java and Python.

### BFS

### DFS

When to use BFS instead of DFS?

- when key words like **shortest path** or **least times** show up
- traverse in a matrix
- layered traverse
- exponential complexity requires bidirectional BFS to reduce complexity

### Dijkstra's Algorithm

### A\* Algorithm

[A video explanation](https://youtu.be/mZfyt03LDH4)

[A detailed comparison btw BFS, Dijkstra, and A\*](https://www.redblobgames.com/pathfinding/a-star/introduction.html)

[A clear implementation](https://towardsdatascience.com/a-star-a-search-algorithm-eb495fb156bb)

$F = G + H$, where $F$ is the estimated distance (priority), $G$ is the actual distance travelled from source (depth), and $H$ is the heuristic distance to the target.

### Jump Point Search

[paper](http://users.cecs.anu.edu.au/~dharabor/data/papers/harabor-grastien-aaai11.pdf)

### Backtracking

a methodology where we mark the current path of exploration, if the path does not lead to a solution, we then revert the change (i.e. backtracking) and try another path.

#### Note

Consider what happens to the root, leaf, and other nodes respectively. Define the entrance and exit clearly.

#### Why

Search for answers in a tree. Enumerate all the possibilities.

#### Shortcomings

High time complexity(all nodes). Recursion can be hard to understand.

## Input Size, Runtime, Algorithm

We could guess the types of algorithms from given input size.

A chip could run about $10^9$ operations in a second. Given input size, we could deduce the runtime, and thus the algorithm:

$n = 10^7$ $\rightarrow$ $O(n)$
$n = 10^4~10^6$ $\rightarrow$ $O(n \log n)$
$n = 10^3$ $\rightarrow$ $O(n^2)$
$n <= 20$ $\rightarrow$ $O(2^n)$ (DFS)

## Array Search

### Linear Search

```py
def linear_search(arr, c):
    """Returns: index of first occurrence of c in b; -1 if not found."""
    # Store in i the index of the first c in arr[0..]
    i = 0

    # inv: c is not in arr[0..i-1]
    while i < len(arr) and arr[i] != c:
        i = i + 1;
    # post: arr[i] == c OR (i == len(arr) and c is not in arr[0..i-1])

    return i if i < len(arr) else -1
```

### Binary Search

```py
def binary_search(arr, c):
    """Returns: index of first occurrence of c in b; -1 if not found."""
    # Store in i the value BEFORE beginning of range to search
    i = 0
    # Store in j the end of the range to search (element after)
    j = len(arr)
    # The middle position of the range
    mid = (i+j)//2

    # invariant; arr[0..i-1] < c, arr[i..j-1] unknown, arr[j..] >= c
    while j > i:
        if arr[mid] < c:
            i = mid+1
        else: # arr[mid] >= c
            j = mid

        # Compute a new middle.
        mid = (i+j)//2
    # post: i == j and arr[0..i-1] < c and arr[j..] >= c

    return i if (i < len(arr) and arr[i] == c) else -1
```

## Array Sorting

### Dutch National Flag

The Dutch National Flag algorithm arranges the elements of `arr[left..right]` so that negatives are first, then $0$'s, then positives.

The following function returns a tuple `(i, j)` representing the two partition points.

```py
def dnf(arr, left, right):
    # Loop variables to satisfy the invariant
    t = left
    j = right
    i = right+1

    # inv: arr[left..t-1] < 0, arr[t..i-1] unknown, arr[i..j] = 0, and arr[j+1..right] > 0
    while t < i:
        if arr[i-1] < 0:
            arr[i-1], arr[t] = arr[t], arr[i-1]
            t += 1
        elif arr[i-1] == 0:
            i -= 1
        else:
            arr[i-1], arr[j] = arr[j], arr[i-1]
            i -= 1
            j -= 1
    # post: arr[left..i-1] < 0, arr[i..j] = 0, and arr[j+1..right] > 0

    return (i, j)
```

### Partition

There are many existing partition schemes. Apart from the one similar to DNF, the two usual ones used in [quick sort](#quick-sort) and [quick select](#quick-select) are **Lomuto** and **Hoare**.

The drawback of Lomuto's partition is it fails with duplicates.

Hoare's partition is more efficient than Lomuto's partition because it does three times fewer swaps on average, and creates efficient partitions even when all values are equal.

#### DNF Partition

Returns the new position of pivot in partitioned list `arr[left..right]`.

The pivot is the initial value `x = arr[left]`. This function rearranges the list so that elements $\le$ x are before the pivot and elements $\ge$ `x` are after the pivot.

```py
def partition(arr, left, right):
    # position i is end of first paritition range
    i = left
    # position j is BEFORE beginning of second partition range
    j = right

    # find the first element in the list.
    x = arr[left]

    # inv: arr[left..i-1] < x, arr[i] = x, arr[i+1..j] unknown, and  arr[j+1..right] >= x
    while i < j:
        if arr[i+1] >= x:
            # move this to the end of the block
            arr[i+1], arr[j] = arr[j], arr[i+1]
            j -= 1
        else: # arr[i+1] < x
            arr[i], arr[i+1] = arr[i+1], arr[i]
            i += 1
    # post: arr[left..i-1] < x, arr[i] is x, and arr[i+1..right] >= x

    return i
```

#### Lomuto Partition

Algorithm:

- move pivot at the end of the array using swap
- set the pointer at the beginning of the array `i = left`
- iterate over the array and move all elements $\le$ `pivot` to the left. Move `i` one step to the right after each swap.
- move the pivot to its final place, and return this index

```py
def partition(arr, left, right):
    pivot_idx = randint(left, right)
    pivot = arr[pivot_idx]

    # move pivot to end
    arr[right], arr[pivot_idx] = arr[pivot_idx], arr[right]
    store_idx = left

    # move more close elements to the left
    for i in range(left, right):
        if arr[i] < pivot:
            arr[i], arr[store_idx] = arr[store_idx], arr[i]
            store_idx += 1

    # move pivot to its final place
    arr[right], arr[store_idx] = arr[store_idx], arr[right]

    return store_idx
```

#### Hoare Partition

Algorithm:

- takes first element as pivot (can be any random element)
- places all the elements $\lt$ pivot on the left side and all the elements $\gt$ pivot on the right side
- returns the index of the last element on the smaller side

```py
def partition(arr, left, right) -> int:
    pivot = arr[left]
    i, j = left - 1, right + 1

    while True:
        # find leftmost element >= pivot
        while True:
            i += 1
            if arr[i] >= pivot:
                break
        # find rightmost element <= pivot
        while True:
            j -= 1
            if arr[j] <= pivot:
                break
        # if two pointers meet
        if i >= j:
            return j
        # o.w., swap arr[i] and arr[j]
        arr[i], arr[j] = arr[j], arr[i]
```

### Quick Sort

Sorts the array arr[left..right] in $O(n \log n)$ average time.

```py
def quickSort(arr, left, right):
    # base case
    if left >= right:
        return

    # arr[left..pivot-1] <= arr[pivot] <= arr[pivot+1..right]
    pivot = partition(arr, left, right)
    # sort arr[left..pivot-1]
    quickSort(arr, left, j-1)
    # sort arr[pivot+1..right]
    quickSort(arr, j+1, right)
```

See a well implemented `quickSort` [here](https://www.techiedelight.com/quick-sort-using-hoares-partitioning-scheme).

### Quick Select

`quickSelect` finds the kth largest element in a given unsorted array.

```py
def quickSelect(arr, left, right, k):
    # if the list contains only one element, return that element
    if left == right:
        return arr[left]

    # find the pivot position in a sorted list
    pivot_idx = partition(arr, left, right)

    # if the pivot is in its final sorted position
    if k == pivot_idx:
        return arr[k]

    # if `k` is less than the pivot index, go left
    if k < pivot_idx:
        return quickSelect(arr, left, pivot_idx-1, k)
    # if `k` is more than the pivot index, go right
    else:
        return quickSelect(arr, pivot_idx+1, right, k)
```

See a well implemented `quickSelect` [here](https://www.techiedelight.com/quickselect-algorithm).

### Selection Sort

Selection Sort sorts the array arr in $O(n^2)$ time.

```py
def ssort(arr):
    # start from beginning of list
    i = 0

    # inv: arr[0..i-1] sorted
    while i < len(arr):
        mi = _min_index(arr,i)
        arr[i], arr[index] = arr[index], arr[i]
        i = i+1
    # post: arr[0..len(arr)-1] sorted

# returns the index of the minimum value in arr[left..]
def _min_index(arr, left):
    # start from position h
    i = left
    index = left

    # inv: index position of min in arr[left..i-1]
    while i < len(arr):
        if arr[i] < arr[index]:
            index = i
        i += 1
    # post: index position of min in arr[left..len(arr)-1]

    return index
```

### Insertion Sort

Insertion Sort sorts the array in $O(n^2)$ time.

```py
def isort(arr):
    # start from beginning of list
    i = 0

    # inv: arr[0..i-1] sorted
    while i  < len(arr):
        _push_down(arr, i)
        i = i + 1
    # post: arr[0..len(arr)-1] sorted

# moves element at position k into its sorted position in arr[0..right-1]
def _push_down(arr, k):
    # start from position k
    j = k

    # inv: arr[j..k] is sorted
    while j > 0:
        if arr[j-1] > arr[j]:
            arr[j-1], arr[j] = arr[j], arr[j-1]
        j = j - 1
    # post: arr[0..k] is sorted
```

## Morris Traversal

[Morris Traversal Using Threaded Tree for Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/148939/CPP-Morris-Traversal)

[Fantastic Algorithms and Where To Find Them](https://youtu.be/YA-nB2wjVcI)

Morris Traversal created sth similar to a [threaded binary tree](https://en.wikipedia.org/wiki/Threaded_binary_tree).

```py {12,18}
def morrisTraversal(self, root: TreeNode) -> List[int]:
    res = []
    pre = None

    while root:
        if root.left:
            pre = root.left
            while pre.right and pre.right != root:
                pre = pre.right

            if not pre.right:
                # res.append(root.val) # PREORDER
                # `pre.right` points to root
                pre.right = root
                # traverse left subtree
                root = root.left
            else: # left subtree is done traversing
                res.append(root.val) # INORDER
                # cut connection
                pre.right = None
                root = root.right
        else:
            res.append(root.val)
            root = root.right
    return res
```

## Rabin Karp (RK) Algorithm

## KMP

## Manacher's algorithm

## Union Find

The data structure is also called _Disjoint Set_ and consists of two operations: `find` and `union`:

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

## Thanks

My thanks go to:

- Walker M. White and Lillian Lee, teacher of CS1110: _Intro to Programming in Python_
- David Gries, teacher of CS2110: _OOP in Java_
- Michael Clarkson, teacher of CS3110: _FP in OCaml_
- Eva Tardos, teacher of CS4820: _Intro to Algorithms_

and in general, all of my great friends at Cornell.
