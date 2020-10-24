---
title: Sieve Prime Numbers
date: 2020-10-23
categories:
  - study
tags:
  - tech
---

Define the generator functions `nats` and `sieve`.

```py
def nats(n):
    yield n
    yield from nats(n + 1)

def sieve(s):
    n = next(s)
    yield n
    yield from sieve(i for i in s if i % n != 0)
```

Print the first 10 prime numbers.

```py
a = sieve(nats(2))
for _ in range(10):
    print(next(a))
```
