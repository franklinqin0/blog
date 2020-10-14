---
title: Functional Programming in Java
date: 2020-02-22
categories:
  - study
tags:
  - tech
publish: false
---

This blog originates from slides of my first (and only) tech talk in our team at GS in July 2019. I chose this topic b/c our team used a lot of Java (Spring & business logic), but needs more knowledge in FP (functional programming).

What makes me happy is that most attendees said good things about my talk :P, so I posted them here now.

<!-- more -->

## Functional Programming Overview

Note that most content below comes from the Coursera course [Functional Programming Principles in Scala by Martin Odersky](https://www.coursera.org/learn/progfun1/home/welcome), but I've merged a lot of knowledge & examples collected from googling.

Firstly, let's overview what is FP and why we should use it.

### Programming Paradigms

#### Paradigm

a _paradigm_ describes distinct concepts or thought patterns in some scientific discipline.

Main programming paradigms:

- imperative programming
- functional programming
- logic programming

Orthogonal to the above three:

- OOP

### Imperative programming

is about:

- modifying **mutable** variables
- using **assignments**
- and **control structures** such as if-then-else, loops, break, continue, return

### However

pure imperative programming is limited by the "Von Neumann" bottleneck:

_One tends to conceptualize data structures word-by-word._

$\rightarrow$ need other techniques for defining **high-level abstractions** such as collections, polynomials, geometric shapes, strings, documents.

### Theory

Ideally, develop _theories_ of collections, shapes, strings, ...

A theory consists of:

- one or more data types
- operations on these types
- laws that describe the relationships between values and operations

Normally, a theory does not describe _mutations_, and mutation can destroy useful laws in theories.

Thus, let's concentrate on defining theories for **operators expressed as functions** to:

- avoid mutations
- have powerful ways to abstract and compose functions

### Functional Programming

- In a _restricted sense_, FP means programming **w/o mutable variables, assignments, loops, and other imperative control structures**
- In a wider sense, FP means focusing on the **functions** (math > CS, no side effect + return value depends only on the input params)
- In particular, functions can be values that are **produced**, **consumed**, and **composed**

Functions in a FP language are first-class citizens:

- they can be defined anywhere, including inside other functions
- like any other value, they can be **passed as parameters** to functions and **returned as results**
- as for other values, there exists a **set of operators** to compose functions

### Why FP

TODO: review Scala notes and come back
???

## Sip FP in Scala

Let's have a look at how FP is done in Scala.

### Recursion Over Looping

Not tail recursion:

```scala
def factorial(n: Int): Int =
  if (n == 0) 1 else n * factorial(n - 1)
```

Tail recursion:

```scala
@tailrec
def factorial(n: Int): Int =
  def fact(n:Int, acc: Int) =
    if (n == 0) 1 else fact(n-1, n*acc)
  fact(n, 1)
```

### Higher-Order Functions

**Def**: take other functions as parameters or that return functions as results.

Functional languages treat functions as first-class values. So a function, like any other value, can be passed as a parameter and returned as a result.

Example:

```scala
def sum(f: Int => Int, a: Int, b: Int) = {
  def loop(a: Int, acc: Int): Int =
    if (a > b) acc
    else loop(a + 1, f(a) + acc)
  loop(a, 0)
}
```

### Currying

**Def**: translating the evaluation of a function that _takes multiple arguments_ into _evaluating a sequence of functions, each with a single argument_.

Example: `f(x,y,z) = h(x)(y)(z)`.

Code:

```scala
def product(f: Int => Int)(a: Int, b: Int): Int =
  if (a > b) 1
  else f(a) * product(f)(a + 1, b)
product(x => x * x)(3, 4) // result: 144

def fact(n: Int) = product(x => x)(1, n)
fact(5) // result: 120
```

Now we define a MapReduce:

```scala
def mapReduce(f: Int => Int, combine: (Int, Int) => Int, zero: Int)(a: Int, b:Int): Int =
  if (a > b) zero
  else combine(f(a), mapReduce(f, combine, zero)(a+1, b))
```

Abstract further, rewrite `product`:

```scala
def product(f: Int => Int)(a: Int, b: Int): Int =
mapReduce(f, (x, y) => x * y, 1)(a, b)
```

Call `product`:

```scala
product(x => x * x)(3,4)      //144
```

### Interface vs. Pattern Matching

Evaluate Expressions:

```scala
trait Expr {
  def eval: Int
}

class Number(n: Int) extends Expr {
  def eval: Int = n
}

class Sum(e1: Expr, e2: Expr) extends Expr {
  def eval: Int = e1.eval + e2.eval
}
```

**Q**: But what happens if you’d like to display expressions now?

**A**: You have to define new method `show` in all the subclasses.

And what if you want to simplify the expressions, say using the rule:

`a * b + a * c -> a * (b + c)`

**Problem**: This is a **non-local simplification**. It cannot be encapsulated in the method of a **single object**.
You are back to square one; you need test and access methods for all the different subclasses.

### Case Class

A _case class_ definition is similar to a normal class definition, except that it is preceded by the modifier `case`. For example:

```scala
  trait Expr
  case class Number(n: Int) extends Expr
  case class Sum(e1: Expr, e2: Expr) extends Expr
```

Like before, this defines a `trait` Expr, and two concrete subclasses `Number` and `Sum`.

#### under the hood

It also implicitly defines companion objects with `apply` methods.

```scala
object Number {
  def apply(n: Int) = new Number(n)
}
object Sum {
  def apply(e1: Expr, e2: Expr) = new Sum(e1, e2)
}
```

so you can write `Number(1)` instead of `new Number(1)`.

### Pattern Matching

Pattern matching is a generalization of `switch` from C/Java to class hierarchies.

In Scala the keyword `match` is used.

Much simpler using pattern matching:

```scala
def eval(e: Expr): Int = e match {
  case Number(n) => n
  case Sum(e1, e2) => eval(e1) + eval(e2)
}
```

## Back to Java

Now let's come back to Java and see what FP stuff we could do in Java.

### Java's `switch` expression(not statement!) to the rescue

Before jdk 12, if we want to have one method in which we assign distinct behaviors to different types, we have to use `instanceof` to check the type.

```java
String formatted = "unknown";
if (obj instanceof Integer i) {
    formatted = String.format("int %d", i);
}
else if (obj instanceof Byte b) {
    formatted = String.format("byte %d", b);
}
else if (obj instanceof Long l) {
    formatted = String.format("long %d", l);
}
else if (obj instanceof Double d) {
    formatted = String.format("double %f", d);
}
else if (obj instanceof String s) {
    formatted = String.format("String %s", s);
}
```

However, as you might've felt, this is very low-level and inelegant.

In jdk 12, we could match the object to different cases of types, which becomes quite similar to [pattern matching in Scala](#pattern-matching).

```Java
String formatted =
    switch (obj) {
        case Integer i -> String.format("int %d", i);
        case Byte b    -> String.format("byte %d", b);
        case Long l    -> String.format("long %d", l);
        case Double d  -> String.format("double %f", d);
        case String s  -> String.format("String %s", s);
        default        -> String.format("Object %s", obj);
    };
```

More at:

1. http://cr.openjdk.java.net/~briangoetz/amber/pattern-match.html
2. https://blog.codefx.org/java/switch-expressions/

### Hurdle: Strong Type

When passing in or return a function, what type is it? $\rightarrow$ find a type for functions?

What matters: **Input and Return Types**

_Functional Interfaces_ in `java.util.function`:

```Java
public interface Function<T,R>{
    R apply(T t);
}

public interface BiFunction<T, U, R> {
    R apply( T t, U u);
}

public interface Predicate<T> {
    boolean test(T t);
}

public interface Consumer<T> {
    void accept(T t);
}

public interface Supplier<T> {
    T get();
}
```

Scala equivalents:

```scala
T => R

(T, U) => R

T => boolean

T => Unit

Unit => T
```

#### Example: take sum of two integers

Define a Functional Interface for the return type of function sum:

```Java
@FunctionalInterface
interface TakeTwo {
    Integer apply(Integer a, Integer b);
}

TakeTwo sum() {
   return (a, b) -> a + b;
}

TakeTwo mySum = sum();
Integer finalSum = mySum.apply(5, 6);
```

Or we could just use `BiFunction` instead of `TakeTwo`:

```java
BiFunction<Integer, Integer, Integer> sum() {
    return (a, b) -> a + b;
}
```

Same thing in Scala in just one line:

```scala
def sum(): (Int, Int) => Int = (a, b) => a + b
```

By comparison, you see that Scala is more flexible, but Java is catching up but still relies on `interface` to achieve functional types.

Above example from [this source](https://hackernoon.com/finally-functional-programming-in-java-ad4d388fb92e)

### Streams - Lazy Evaluation

From [GeeksforGeeks](https://www.geeksforgeeks.org/stream-in-java/):

Introduced in **Java 8**, the Stream API (in `java.util.stream`) is used to process collections of objects. A **stream** is _a sequence of objects_ that supports various methods which can be _pipelined_ to produce the desired result.

Besides pipelining, a stream can be lazily evaluated

Each intermediate operation is lazily executed and returns a stream. Hence various intermediate operations can be pipelined. Terminal operations mark the end of the stream and return the result.

From [Wikipedia](https://en.wikipedia.org/wiki/Lazy_evaluation):

Lazy evaluation, or call-by-need is an evaluation strategy which delays the evaluation of an expression until its value is needed (non-strict evaluation) and which also avoids repeated evaluations (sharing).

Call by name??? (TODO: integrate Scala notes later)

#### Example: a Stream of Even Numbers

An even number [Supplier](#hurdle-strong-type):

```java
public class EvenNumber implements Supplier<Long>{
    long num = 0;

    @Override
    public Long get() {
        num += 2;
        return num ;
    }
}
```

Generate an even number stream:

```java
Stream<Long> numbers = Stream.generate(new EvenNumber());
```

Method `forEach` takes in a `Consumer` and returns nothing:

```java
numbers.forEach(x->System.out.println(x));          // X
numbers.limit(5).forEach(x->System.out.println(x)); // set a limit
```

#### Example: Print Out the Strings Starting w/ "J"

```scala
Arrays.asList("Hello","Java8","Java7").stream()
    .map(s ->s.toUpperCase())
    .filter(s -> s.startsWith("J"))
    .forEach(s -> System.out.println(s));
```

The above exmaples are from 2 WeChat articles([1](https://mp.weixin.qq.com/s?__biz=MzAxOTc0NzExNg==&mid=2665513149&idx=1&sn=00e563fbd09c9cf9e2ac4283d43cccf1&scene=21) and [2](https://mp.weixin.qq.com/s?__biz=MzAxOTc0NzExNg==&mid=2665513152&idx=1&sn=1398826ca9f9ea2b7c374574302a3838&scene=21)) in Chinese.

### Type Inference

Since Java 10, type inference is supported.

#### Example: Instantiation of Generic Classes

The following example is from [Oracle's tutorial on type inference in Java](https://docs.oracle.com/javase/tutorial/java/generics/genTypeInference.html).

Historically we would do the following to instantiate a HashMap mapped from String to List of String.

```java
Map<String, List<String>> myMap = new HashMap<String, List<String>>();
```

So we have to write `<String, List<String>>` twice! But now we could simply do:

```java
Map<String, List<String>> myMap = new HashMap<>();
```

Note that we need `<>` b/c o.w. `HashMap()` refers to `HashMap` raw type, and we'd receive an _unchecked conversion warning_.

#### Type Checking vs. Type Inference

To see what type checking and type inference are and difference inbetween, here is a slide from [slide 12 in this Cornell CS 6110 class](http://www.cs.tau.ac.il/~msagiv/courses/pl15/types.pdf):

<img id="type_checking_vs_type_inference" src="/type_checking_vs_type_inference.png" alt="Type Checking vs. Type Inference" class="medium-zoom">

### Progressive Java FP

Historically, Java was known for its portability, stability and OOP, but FP was not well supported. However, there are some silver linings in recent progression of Java FP:

- Lambda expressions are now well-supported
- Pattern matching implemented using switch expressions
- `java.util.function` has some predefined functions to save developers from writing `@FunctionalInterface`
- Stream can pipeline functions and lazily evaluate

### Gotchas for Java

Some are concerning to personal tastes, while some are hard to change due to initial design choices.

#### $\rightarrow$ or $=>$

Out of several languages I know, JavaScript and Scala use "=>" whereas OCaml uses "->". Personally I don't think it matters, but I easily get confused when coding in different languages.

#### no `break` would break

In switch statements(not expression!): `break` could easily be forgotten.

#### Functional $\leftarrow$ Interface

So you need to create/implement an interface to achieve FP.

Seriously? Meh~

#### Immutable Field/Data Structure

Java variables are mutable by default, but immutable can be achieved if desired.

For a Java field you may add the keyword `final` at front.

For a Java data structure we need to search for them, such as [ImmutableList in Guava](https://guava.dev/releases/20.0/api/docs/com/google/common/collect/ImmutableList.html).

#### Strong type & FP

It seems strong typing and FP don't merge naturally together, the fundamental problem being how to type the return of a function.

#### Overall

It's very slow to set up & develop a Java project. Java and Python seem to be at two ends of spectrum on verbosity. And to the company who manages Java now $\rightarrow$ Boo$* 1000$.

In terms of interactive shell, when I learned Java in [the OOP class](https://www.cs.cornell.edu/courses/cs2110), we didn't have very good shell to play around but have to create some dummy classes w/ `System.out.println` statements. In Java 9, [`JShell`](https://docs.oracle.com/javase/9/jshell/introduction-jshell.htm) was introduced.

#### Further

Here are a series of blogs on [FP in Java & Kotlin](https://dzone.com/users/38615/ps24890.html).

### Stuff I Haven't Understood (So Far)

I'm not ashamed of admitting not knowing these stuff, b/c I will defo come back and understand these when time is right:

- Java Optional (even further, Monads): https://www.baeldung.com/java-optional
- Kotlin (will learn when doing Android dev)
- Coq: prove math theorems by writing code! (will write a blog when reviewing OCaml)

## Java vs. Star Wars Similarities

- cult over decades, if not generations
- groundbreaking start & inspire later innovations
  - Java was initially known for JVM's portability and now we see a series of JVM languages
- bought and turned into quick & periodic upgrades

<img src="https://i.kym-cdn.com/photos/images/newsfeed/000/748/010/532.jpg" alt="May the Force Be with You!" width=50% class="medium-zoom">
