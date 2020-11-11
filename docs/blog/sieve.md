---
title: Sieve Prime Numbers
date: 2020-10-23
categories:
  - study
tags:
  - tech
publish: false
---

## Prerequisites

### Iterator

Iterator in python is an object that is used to iterate over iterable objects like lists, tuples, dicts and sets. Iterator object is initialised using the `iter()` method. It uses the `next()` method for iteration.

1. `__iter(iterable)__` method that is called for initialization of an iterator. This returns an iterator object
2. next ( `__next__` in Python 3) The next method returns the next value for the iterable. When we use a for loop to traverse any iterable object, internally it uses the iter() method to get an iterator object which further uses next() method to iterate over. This method raises a `StopIteration` to signal the end of the iteration.

### Yield

**Return** sends a specified value back to its caller whereas **Yield** can produce a sequence of values. We should use yield when we want to iterate over a sequence, but don’t want to store the entire sequence in memory.

Yield are used in Python **generators**. A generator function is defined like a normal function, but whenever it needs to generate a value, it does so with the `yield` keyword rather than return. If the body of a def contains yield, the function automatically becomes a generator function.

### Generator

### Generator Function

A generator function is defined like a normal function, but whenever it needs to generate a value, it does so with the `yield` keyword rather than `return`. If the body of a def contains yield, the function automatically becomes a generator function.

### Generator Object

A generator function returns a generator object. Generator objects are used either by calling the next method on the generator object or using the generator object in a “for in” loop (as shown in the above program).

### Yield From

`yield from` establishes a **transparent bidirectional** connection between the caller and the sub-generator. More info in [here](https://stackoverflow.com/a/26109157/6421652).

## Sieve the Primes

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

Iterate and print the first 10 prime numbers.

```py
a = sieve(nats(2))
for _ in range(10):
    print(next(a))
```
