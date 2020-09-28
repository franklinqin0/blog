---
title: Python3 Features
date: 2020-03-10
categories:
  - study
tags:
  - tech
publish: false
---

While studying for interview problems, I use `Python3` as the PL and feel like concluding its commonly used features.

<!-- more -->

- elegant and clear
- high-readability

## Int

The # bits of number `n` is $\log n$.

## Modular Arithmatic

$(n+m)^k \mod n = m$

### Bit Manipulation

`n & (n-1)` would eliminate the rightmost 1-bit.

### Overflow

Basically, Python doesn't need to worry about integer overflow.

Following are from [_EPI in Python_](https://www.amazon.com/Elements-Programming-Interviews-Python-Insiders/dp/1537713949).

Integers:

::: theorem
Integers in Python3 are **unbounded**-the _maximum integer_ representable is _a function of the available memory_. The constant `sys.maxsize` can be used to find the word-size; specifically, it's the maximum value integer that can be stored in the word, e.g., $2**63 - L$ on a `64`-bit machine. Bounds on floats are specified in `sys.float-info`.
:::

Float:

::: theorem
Unlike integers, floats are not infinite precision, and it's convenient to refer to infinity as `float('inf ')` and `float('-inf ')`. These values are comparable to integers, and can be used to create pseudo max-int and pseudo min-int.
:::

### bin

From [https://docs.python.org/3/library/functions.html#bin]():

::: tip bin
`bin` converts an integer number to a binary string prefixed with “0b”. `[2:]` takes away `0b` and returns the binary int as a string.
:::

If `n` is an integer, `int(bin(n)[2:],2)` would return the original `n`.

## Division

`divmod`

### Division Operators `/` and `//`

The division operators difference in Python 2 and 3 is described [here](https://www.geeksforgeeks.org/division-operator-in-python/).

Python 2 uses `/` for **floor division** if _both arguments_(the dividend and divisor) are _integers_.

Python 2 uses `//` for **floor division** for _both int and float arguments_.

Python 3 uses `/` for **floating point division** for _both int and float arguments_.

Python 3 uses `//` for **floor division** for _both int and float arguments_.

So the behavior of “//” is same for Python 2 and 3.

Personally I like Python 3 for division behavior as it's clearer and causes less confusion.

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
`get(self, key, default=None)` returns the value for key if key is in the dictionary, else default.

Dictionary associates values with immutable keys which means you cannot use lists as keys.

### Array

[]

### Matrix

`[0]*2`
`[[0 for j in range(num_cols)] for i in range(num_rows)]`
Since `i` and `j` are not used, can simplify the above to:
`[[0]*num_cols for _ in range(num_rows)]`

### Stack

[]
`from collections import deque` and initialize a stack as `deque()`

### Queue

More at [Queue in Python](https://www.geeksforgeeks.org/queue-in-python/).

### Linked List

[]

### Tuple (Immutable)

()

### List Cannot be Hashed

A list adding to a set would cause error "list objects are unhashable" b/c **list is mutable** but elements in set are not supposed to change after being added and hashed. Instead of `list`, I could add a `tuple` to the set, as described in [this Stack Overflow answer](https://stackoverflow.com/a/1306653/6421652).

### defaultdict of defaultdict

```py
defaultdict(lambda: defaultdict(int))
```

The argument of a defaultdict (in this case is lambda: defaultdict(int)) will be called when you try to access a key that doesn't exist. The return value of it will be set as the new value of this key, which means in our case the value of d[Key_doesnt_exist] will be defaultdict(int).

If you try to access a key from this last defaultdict i.e. d[Key_doesnt_exist][key_doesnt_exist] it will return 0, which is the return value of the argument of the last defaultdict i.e. int().

To iterate:

```py
for _, courses in schedulesByPECourses.items():
    pe = []
    for _, sc in courses.items():
        pe.append(sc)
```

## Algorithms

Prefix Sum can look for subarray sum O(1) every time
前缀和：多次查询区间和 O(1)/次

- 前缀和是⼀种思想，可以⽤于许多的减少时间复杂度的地⽅
- 我们不⼀定会使⽤前缀“和”，可能是其他⽐如积，最⼤值，最⼩值这样 的值。主要还是要根据题⽬来考虑使⽤什么。
- 哈希表是⼀种⼯具，与前缀和配套使⽤可以达到“⽤空间换时间”的⽬ 的。

双指针：根据区间和调整区间
树状数组：单点修改，区间查询
线状树：区间修改

Two Pointers is used interchangbly w/ sliding window, as the way of thinking is more important than name and style.

95% of the time, summing over a window requires prefix sum. Exceptions: 线状树, 互动数组

Edge cases to watch for:

1. 0, empty input of string/array/any ds
2. TLE / infinite loop

`csum` means cumulative sum.

隐式图：没有明确的点和边的关系（不会定义 Node 等）

矩阵就是⼀种经典的隐式图问题
