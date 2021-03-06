---
title: Add Binary
diff: easy
tags:
  - Math
  - String
---

<img class="medium-zoom" src="/algo/add-binary.png" alt="https://leetcode.com/problems/add-binary">

## Solution

Let $m$ be the length of `a` and $n$ be the length of `b`.

### Convert to Int (trivial)

Use the built-in functions `int` to convert and `format`/[f-strings](https://realpython.com/python-f-strings/) to return a string.

Using `format` function:

```py
def addBinary(self, a: str, b: str) -> str:
    return '{0:b}'.format(int(a, 2) + int(b, 2))
```

Using `f-strings`:

```py
def addBinary(self, a: str, b: str) -> str:
    return f'{int(a,2)+int(b,2):b}'
```

### RCA (Ripple Carry Adder)

::: theorem Complexity
time: $O(\max(m, n))$  
space: $O(\max(m, n))$
:::

```py
def addBinary(self, a: str, b: str) -> str:
    n = max(len(a), len(b))
    a, b = a.zfill(n), b.zfill(n)

    carry = 0
    answer = []
    for i in reversed(range(n)):
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

This solution requires previous knowledge, or supreme ingenuity.

Use `x` to store the sum (XOR of 2 binaries) and `y` to store the carry (AND of 2 binaries and left shifted by 1). Keep doing this until carry is 0.

::: theorem Complexity
time: $O(\max(m, n))$  
space: $O(\max(m, n))$
:::

```py
def addBinary(self, a: str, b: str) -> str:
    x, y = int(a, 2), int(b, 2)
    while y:
        answer = x ^ y
        carry = (x & y) << 1
        x, y = answer, carry
    return bin(x)[2:]
```

An equivalent but even shorter solution is to replace the while loop content with:

```py
x, y = x ^ y, (x & y) << 1
```
