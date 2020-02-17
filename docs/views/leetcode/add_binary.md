---
title: Add Binary
date: 2020-02-17
categories:
 - study
tags:
 - leetcode
---

Given two binary strings, return their sum (also a binary string).

The input strings are both **non-empty** and contains only characters 1 or 0.

:::tip

- [problem](https://leetcode.com/problems/add-binary/)
- [article](https://leetcode.com/articles/add-binary/)
:::

<!-- more -->

## Solution

### Built-in Functions (Cheating)

Use the built-in functions `int` to convert and `format`/[f-strings](https://realpython.com/python-f-strings/) to return a string.

Using `format` function:

```python
def addBinary(self, a, b) -> str:
    return '{0:b}'.format(int(a, 2) + int(b, 2))
```

Using `f-strings`:

```python
def addBinary(self, a: str, b: str) -> str:
    return f'{int(a,2)+int(b,2):b}'
```

::: tip

A tip on `f-strings`. For example: `f'{6:08b}'`.

Starting with `f`, represent int `6` in `8` `b`inary digits with `0`'s padded at front. So the evaluated result is: `'00000110'`.

Equivalently, could do `bin(6)[2:].zfill(8)`, where `zfill` added the `0`'s padded at front.
:::

### Bit-by-bit manipulation

Complexity:

- Time: $O(\max(N,M))$
- Space: $O(\max(N,M))$

```python
def addBinary(self, a, b) -> str:
    n = max(len(a), len(b))
    a, b = a.zfill(n), b.zfill(n)

    carry = 0
    answer = []
    for i in range(n - 1, -1, -1):
        if a[i] == '1':
            carry += 1
        if b[i] == '1':
            carry += 1

        if carry % 2 == 1:
            answer.append('1')
        else:
            answer.append('0')

        carry //= 2

    if carry == 1:
        answer.append('1')
    answer.reverse()

    return ''.join(answer)
```

### Bit Manipulation

See explanation in the [article](https://leetcode.com/articles/add-binary#approach-2-bit-manipulation).

Complexity:

- Time: $O(\max(N,M))$
- Space: $O(\max(N,M))$

```python
def addBinary(self, a, b) -> str:
    x, y = int(a, 2), int(b, 2)
    while y:
        answer = x ^ y
        carry = (x & y) << 1
        x, y = answer, carry
    return bin(x)[2:]
```

An equivalent but even shorter solution:

```python
def addBinary(self, a: str, b: str) -> str:
    x, y = int(a,2), int(b,2)
    while y>0:
        x, y = x^y, (x&y) << 1
    return bin(x)[2:]
```
