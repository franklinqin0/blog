---
title: Scala Notes
date: 2020-03-11
categories:
  - study
tags:
  - tech
publish: false
---

## Programming Paradigms

### Paradigm:

in science, a paradigm describes distinct concepts or thought patterns in some scientific discipline.

Main programming paradigms:

- imperative programming
- functional programming
- logic programming

Orthogonal to the above three:

- object-oriented programming

Imperative programming is about:

- modifying mutable variables
- using assignments
- and control structures such as if-then-else, loops, break, continue, return

The most common informal way to understand imperative programs is as instruction sequence for a Von Neumann computer.

### Scale Up

In the end, pure imperative programming is limited by the "Von Neumann" bottleneck:

_One tends to conceptualize data structures word-by-word._

We need other techniques for **defining high-level abstractions** such as collections, polynomials, geometric shapes, strings, documents.

Ideally, develop _theories_ of collections, shapes, strings, ...

### Theory

A theory consists of

- one or more data types
- operations on these types
- laws that describe the relationships between values and operations

Normally, a theory does not describe _mutations_, and mutation can destroy useful laws in theories.

Thus, let's concentrate on defining theories for **operators expressed as functions** to:

- avoid mutations
- have powerful ways to abstract and compose functions

## Elements of Functional Programming (FP)

### Functional Programming

- In a _restricted sense_, FP means programming w/o **mutable variables, assignments, loops, and other imperative control structures**
- In a wider sense, FP means focusing on the **functions**
- In particular, functions can be values that are **produced**, **consumed**, and **composed**

Functions in a FP language are first-class citizens:

- they can be defined anywhere, including inside other functions
- like any other value, they can be **passed as parameters** to functions and **returned as results**
- as for other values, there exists a **set of operators** to compose functions

## Conditionals and Value Definitions

### call-by-name vs. call-by-value

call-by-name: the interpreter reduces function arguments to values before rewriting the function application (substitution model)

- Advantage: evaluates every function argument only **once**

call-by-value: function is applied to unreduced arguments

- Advantage: a function argument is **not evaluated** if the corresponding parameter is **unused in the evaluation**

Both strategies reduce to the same final values as long as

- the reduced expression consists of pure functions
- both evaluations terminate

If termination is not guaranteed, we have:

- if CBV evaluation of an expression _e_ terminates, then CBN evaluation of _e_ terminates, too
- the other direction is not true

def and(x: Int, y: =>Int) = if (x) y else false
def or(x: Int, y: =>Int) = if (x) true else y

## Nested Functions

It's good functional programming style to split up a task into many small functions. We would not like users to access these small functions directly. We can achieve this and at the same time avoid "name-space pollution" by putting the auxiliary functions inside the main function.

```scala
def sqrt(x: Double) = {
	def sqrtIter(guess: Double, x: Double): Double =
		if (isGoodEnough(guess, x)) guess
		else sqrtIter(improve(guess, x), x)
	def improve(guess: Double, x: Double) =
		(guess + x / guess) / 2
	def isGoodEnough(guess: Double, x: Double) =
		abs(square(guess) - x) < 0.001

	sqrtIter(1.0, x)
}
```

could delete "x" in nested functions and become:

```scala
def sqrt(x: Double) = {
  def sqrtIter(guess: Double): Double =
    if (isGoodEnough(guess, x)) guess
    else sqrtIter(improve(guess, x), x)
  def improve(guess: Double =
    (guess + x / guess) / 2
  def isGoodEnough(guess: Double) =
	  abs(square(guess) - x) < 0.001

  sqrtIter(1.0, x)
}
```

## Blocks and Lexical Scope

### Blocks in Scala

- A block is delimited by braces { ... }

```scala
{ val x = f(3)
  x * x
}
```

- It contains a **sequence** of **definitions** or **expressions**.
- The **last element** of a block is an expression that defines its value
- This return expression can be **preceded by auxiliary definitions**
- Blocks are themselves **expressions**; a block may appear everywhere an expression can

### Lexical Scope:

- The definitions inside a block are only visible from within the block
- The definitions inside a block shadow definitions of the same names outside the block

## Tail Recursion

_Implementation Consideration_: If a function **calls itself as its last action**, the function’s **stack frame** can be **reused**.

=> Tail recursive functions are **iterative** processes.

In general, if the last action of a function consists of calling a function (which may be the same), one stack frame would be sufficient for both functions. Such calls are called tail-calls.

Example:

```scala
def gcd(a: Int, b: Int): Int =
  if (b == 0) a else gcd(b, a % b)

def factorial(n: Int): Int =
  def fact(n:Int, acc: Int) =
    if (n == 0) 1 else fact(n-1, n*acc)
  fact(n, 1)
```

Not a tail recursion:

```scala
def factorial(n: Int): Int =
  if (n == 0) 1 else n * factorial(n - 1)
```

## Higher-Order Functions

Functional languages treat functions as first-class values. So a function, like any other value, can be passed as a parameter and returned as a result.

**Def**: take other functions as parameters or that return functions as results.

Example:

```scala
def sum(f: Int => Int, a: Int, b: Int) = {
  def loop(a: Int, acc: Int): Int =
    if (a > b) acc
    else loop(a + 1, f(a) + acc)
  loop(a, 0)
}
```

## Currying

**Def**: translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument

Example:

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

## Fixed Point

**Def**: A number `x` is called a _fixed point_ of a function if `f(x) = x`

### Finding Fixed Point of a Function

```scala
val tolerance = 0.0001

def isCloseEnough(x: Double, y: Double) =
  abs((x - y) / x) / x < tolerance

def fixedPoint(f: Double => Double)(firstGuess: Double) = {
  def iterate(guess: Double): Double = {
    val next = f(guess)
    if (isCloseEnough(guess, next)) next
    else iterate(next)
  }
  iterate(firstGuess)
}

def sqrt(x: Double) =
  fixedPoint(y => x / y)(1.0)
```

However, `sqrt(2)` would give an oscillation between `1.0` and `2.0`.

So we average last two guesses:

```scala
def averageDamp(f: Double => Double)(x: Double) = (x + f(x)) / 2

def sqrt(x: Double) =
  fixedPoint(averageDamp(y => x/y))(1.0)
```

---

```scala
object rationals {
  val x = new Rational(1, 2) // x : Rational = 1/2
  x.numer // result: Int = 1
  x.denom // result: Int = 2
}

class Rational(x: Int, y: Int) {
  def numer = x
  def denom = y

  def add(that: Rational) =
    new Rational(
      numer * that.denom + that.numer * denom, denom * that.denom)

  def neg: Rational = new Rational(-numer, denom)

  // DRY - Don't Repeat Yourself
  def sub(that: Rational) = odd(that.neg)

  override def toString = numer + "/" + denom
}
```

### require vs. assert

`require` is used to enforce a precondition on the caller of a function or the creator of some class. If fails, throws `IllegalArgumentException`.

`assert` is used to check the function invariants or used in tests. If an assertion fails and it's not the caller's fault, then you get an `assertion error`.

## Class Hierarchy

### Abstract Classes

```scala
abstract class IntSet {
  def incl(x: Int): IntSet
  def contains(x: Int): Boolean
}
```

Abstract classes can contain members missing an implementation (like `incl` and `contains` above). Thus, no instance of an abstract class can be created with the operator `new`.

Implement sets as binary trees. There are 2 types of possible trees: a tree for the empty set, and a tree consisting of an integer and 2 sub-trees.

Here are their implementations:

```scala
class Empty extends IntSet {
  def contains(x: Int): Boolean = false
  def incl(x: Int): IntSet = new NonEmpty(x, new Empty, new Empty)

class NonEmpty(elem: Int, left: IntSet, right: IntSet) extends IntSet {
  def contains(x: Int): Boolean =
    if (x < elem) left.contains(x) // or: left contains x
    else if (x > elem) right.contains(x) // or: right contains x
    else true

  def incl(x: Int): IntSet =
    if (x < elem) new NonEmpty(elem, left.incl(x), right) // or: left incl x
    else if (x > elem) new NonEmpty(elem, left, right.incl(x)) // or: right incl x
    else this
```

### Base Classes and Subclasses

The direct or indirect superclasses of a class C are called `base classes` of C.

```scala
abstract class Base {
  def foo = 1
  def bar: Int
}

class Sub extends Base {
  override def foo = 2
  def bar = 3 // could write "override" at front, but not needed
}
```

### Object Definitions

There is only 1 empty IntSet, so we could just define a singleton object named `Empty`.

```
object Empty extends IntSet {
  def contains(x: Int): Boolean = false
  def incl(x: Int): IntSet = new NonEmpty(x, Empty, Empty)
}
```

### Implement the abstract class IntSet

The methods `incl` and `contains` are already implemented above but still written below for completeness.

```scala
class Empty extends IntSet {
  def contains(x: Int): Boolean = false
  def incl(x: Int): IntSet = new NonEmpty(x, new Empty, new Empty)
  override def toString = "."
  def union(other: IntSet): IntSet = other
}

class NonEmpty(elem: Int, left: IntSet, right: IntSet) extends IntSet {
  def contains(x: Int): Boolean =
    if (x < elem) left contains x
    else if (x > elem) right contains x
    else true

  def incl(x: Int): IntSet =
    if (x < elem) new NonEmpty(elem, left incl x, right)
    else if (x > elem) new NonEmpty(elem, left, right incl x)
    else this

  override def toString = "{" + left + elem + right + "}"

  def union(other: IntSet): IntSet =
    ((left union right) union) incl elem
```

## How Classes are Organized

### Forms of Imports

Under package week3 we have a class `Rational`.

```scala
import week3.Rational // imports just Rational
import week3.{Rational, Hello} // imports both Rational and Hello import week3._ // imports everything in package week3
```

The first two forms are called named imports.

The last form is called a wildcard import.

### Automatic Imports

Some entities are automatically imported in any Scala program:

- All members of package `scala`
- All members of package `java.lang`
- All members of the singleton object `scala.Predef`

These are fully qualified names of some types+functions:

| Name    | Source               |
| :------ | :------------------- |
| Int     | scala.Int            |
| Boolean | scala.Boolean        |
| Object  | java.lang.Object     |
| require | scala.Predef.require |
| assert  | scala.Predef.assert  |

### Traits

In Java and Scala, a class can only have one superclass (single inheritance).

We could use `trait`. A **trait** is declared like an abstract class, just with `trait` instead of `abstract class`.

```scala
trait Planar {
  def height: Int
  def width: Int
  def surface = height * width
}

class Square extends Shape with Planar with Movable
```

Use `with` to "implement" a trait. Classes, objects and traits can inherit from at most 1 class arbitrarily many traits.

Traits resemble interfaces in Java, but are more powerful because they can contains fields and concrete methods, whereas Java interface only allows abstract classes and final fields.

On the other hand, classes can have value parameters, while traits cannot.

### Top Types

At the top of the type hierarchy:

| Any    | base type of all types. Methods: '==', '!=', 'equals', 'hashCode', 'toString' |
| ------ | ----------------------------------------------------------------------------- |
| AnyRef | base type of all reference types; alias of 'java.lang.Object'                 |
| AnyVal | base type of all primitive types                                              |

### Nothing

`Nothing` is at the bottom of Scala’s type hierarchy. It is a subtype of every other type. There is no value of type Nothing.

It is useful because:

- To signal abnormal termination, like `throw Exc`
- As an element type of empty collections (see next session)

### Null

Every `AnyRef` also has null as a value. The type of `null` is Null.

Null is a subtype of every class that inherits from Object; it is incompatible with subtypes of `AnyVal`.

### Exercise

```scala
if (true) 1 else false
```

has type of AnyVal.

## Polymorphism

### Cons-Lists in Scala

```scala
trait List[T] {
  def isEmpty: Boolean
  def head: T
  def tail: List[T]
}

class Cons[T](val head: T, val tail: List[T]) extends List[T] {
  def isEmpty = false
}

class Nil[T] extends List[T] {
  def isEmpty: Boolean = true
  def head = throw new NoSuchElementException("Nil.head")
  def tail = throw new NoSuchElementException("Nil.tail")
}
```

### Generic Functions

Like classes, functions can have type parameters.

For instance, here is a function that creates a list consisting of a single element:

```scala
def singleton[T](elem: T) = new Cons[T](elem, new Nil[T])
```

### Type Inference

The Scala compiler can usually deduce the correct **type parameters** from the **value arguments** of a function call.

So in most cases, type parameters can be left out: `singleton(1)`, `singleton(true)`

### Types and Evaluation

In Scala, type parameters do not affect evaluation.

**Type Erasure**: we can assume that all type parameters and type arguments are removed before evaluating the program. Example languages include: Java, Scala, Haskell, ML, OCaml.

Some other languages keep the type parameters around at run time: C++, C#, F#.

### Polymorphism (in many forms)

**Def**:

- the function can be applied to arguments of many types -> **subtyping**: instances of a subclass can be passed to a base class
- the type can have instances of many types -> **generics**: instances of a function or class are created by type parameterization

```scala
object nth {
  def nth[T](n: Int, xs: List[T]): T =
    if (xs.isEmpty) throw new IndexOutOfBoundsException
    else if (n == 0) xs.head
    else nth(n - 1, xs.tail)
```

### Scala Persistent Data Structure

## Scala Objects

### Implement abstract class Nat

```scala
abstract class Nat {
  def isZero: Boolean
  def predecessor: Nat
  def successor = new Succ(this)
  def +(that: Nat): Nat
  def -(that: Nat): Nat
}

object Zero extends Nat {
  def isZero = true
  def predecessor = throw new Error("0.predecessor")
  def +(that: Nat) = that
  def -(that: Nat) = if (that.isZero) this else throw new Error("negative number")
}

class Succ(n: Nat) extends Nat {
  def isZero = false
  def predecessor = n
  def +(that: Nat) = new Succ(n + that)
  def -(that: Nat) = n -
}
```

## Functions as Objects

### Eta Expansion

A method such as `def f(x: Int): Boolean = ...` is not itself a function value.

If `f` is used in a place where a Function type is expected, it is converted automatically to the function value `(x: Int) => f(x)`.

Or (eta) expanded:

```
new Function1[Int, Boolean] {
  def apply(x: Int) = f(x)
}
```

### Define an object List

with 3 functions in it so that users can create lists of lengths 0-2 using syntax

```Scala
List() // the empty list
List(1) // the list with single element 1
List(2, 3) // the list with elements 2 and 3
```

Add `apply` methods to [Cons-Lists in Scala](#cons-Lists-in-scala)

```Scala
object List {
  // List(1, 2) = List.apply(1, 2)
  def apply[T](x1: T, x2: T): List[T] = new Cons(x1, new Cons(x2, new Nil))
  // List(1) = List.apply(1)
  def apply[T](x1: T): List[T] = new Cons(x1, new Nil))
  // List() = List.apply()
  def apply[T]() = new Nil
```

## Subtyping(OOP) and Generics(FP)

2 principal forms of polymorphism: subtyping and generics. They have two main interactions: bounds(subjects type parameters to subtype constraints) and variance(defines how parameterized types behave under subtyping).

### Type Bounds

We might want to express that assertAllPos takes Empty sets to Empty sets and NonEmpty sets to NonEmpty sets. A way to express this is: `def assertAllPos[S <: IntSet](r: S): S = ...`. "<: IntSet" is an upper bound of the type parameter S.

The notation

- S <: T means: S is a **subtype** of T
- S >: T means: S is a **subtype** of T, or T is a **subtype** of S

### Mixed Bounds

`[S >: NonEmpty <: IntSet]` would restrict `S` any type on the interval between `NonEmpty` and `IntSet`.

### Covariance

If `NonEmpty <: IntSet`, then `List[NonEmpty] <: List[IntSet]`. We call types for which this relationship holds **covariant** because their subtyping relationship varies with the type parameter.

### Arrays

Arrays in Java are covariant: `NonEmtpy[] <: IntSet[]`. But Arrays in Scala are not covariant (mutable types are not covariant).

### The Liskov Substitution Principle

The following principle, stated by Barbara Liskov, tells us when a type can be a subtype of another.

::: theorem
If `A <: B`, then everything one can to do with a value of type B one should also be able to do with a value of type A.
:::

The actual definition Liskov used is a bit more formal. It says:

::: theorem
Let _q(x)_ be a property provable about objects x of type B. Then _q(y)_ should be provable for objects y of type A where A <: B.
:::

## Variance

**Def**: Say `C[T]` is a parameterized type and A, B are types such that A <: B.

In general, there are three possible relationships between C[A] and C[B]:

- class C[+A] is _covariant_ -> C[A] <: C[B]
- class C[-A] is _contravariant_ -> C[A] >: C[B]
- class C[A] is _nonvariant_: neither C[A] nor C[B] is a subtype of each other

### Typing Rules for Functions

If `A2 <: A1` and `B1 <: B2`, then `A1 => B1 <: A2 => B2`. So Functions are contravariant in their argument type(s) and covariant in their result type.

Thus, the revised definition of `Function1` trait:

```Scala
package scala
trait Function1[-T, +U] {
  def apply(x: T): U
}
```

### Variance Checks

In ???, `Nil` was a class, but we prefer it as an object (only 1 empty list). Will make modifications:

```Scala
trait List[+T] { // T -> +T, making List covariant
  def isEmpty: Boolean
  def head: T
  def tail: List[T]
}

class Cons[T](val head: T, val tail: List[T]) extends List[T] {
  def isEmpty = false
}

object Nil extends List[Nothing] { // class -> object, T -> Nothing
  def isEmpty: Boolean = true
  // head returns T (which is Nothing)
  def head: Nothing = throw new NoSuchElementException("Nil.head")
  // tail returns List[T] (Nothing satisfies)
  def tail: Nothing = throw new NoSuchElementException("Nil.tail")
}

object test {
  val x: List[String] = Nil
}
```

### Make Classes Covariant (prepend)

We could try `prepend` on `List`:

```Scala
trait List[+T] {
  def prepend(elem: T): List[T] = new Cons(elem, this)
}
```

It could work for a list `xs` of type `List[IntSet]`: `xs.prepend(Empty)`, but not for a list `ys` of type `List[NonEmpty]`: `ys.prepend(Empty)` (error: type mismatch, required: NonEmpty, found: Empty).

We can use a _lower bound_:

```Scala
def prepend [U >: T](elem: U): List[U] = new Cons(elem, this)
```

The result type of `def f(xs: List[NonEmpty], x: Empty) = xs prepend x` would be `List[IntSet]`.

## Decomposition

Find a general and convenient way to access objects in an extensible class hierarchy.

Attempts:

- classification and access methods: quadratic explosion
- type tests and casts(isInstanceOf, asInstanceOf): unsafe, low-level
- object-oriented decomposition: not always work, need to touch all classes to add a new method

=> use pattern matching

## Pattern Matching

A generalization of `switch` from C/Java to class hierarchies.

In Scala the keyword `match` is used.

### Case Classes

A _case class_ definition is similar to a normal class definition, except that it is preceded by the modifier `case`:

```Scala
trait Expr
case class Number(n: Int) extends Expr
case class Sum(e1: Expr, e2: Expr) extends Expr
```

It also implicitly defines companion objects with `apply` methods:

```Scala
object Number {
  def apply(n: Int) = new Number(n)
}

object Sum {
  def apply(e1: Expr, e2: Expr) = new Sum(e1, e2)
}
```

Example:

```Scala
def eval(e: Expr): Int = e match {
  case Number(n) => n
  case Sum(e1, e2) => eval(e1) + eval(e2)
}
```

### Match Syntax Rules:

Rules:

- `match` is followed by a sequence of *case*s, pat => expr
- each case associates an expr(ession) with a pat(tern)
- a `MatchError` exception is thrown if no pattern matches the value of the selector

## Lists

A fundamental data structure in functional programming.

### List vs. Array

- List is immutable: the elements of a list cannot be changed
- List is recursive, while array is flat

## More Functions on Lists

Abbreviated for simplicity

## Pairs and Tuples

### Pairs

The pair consisting of x and y is written `(x, y)` in Scala

### Tuples

A tuple type (T1, ..., Tn) is an abbreviation of the parameterized type scala.Tuple*n*[T1, ..., Tn]

### MergeSort Implementations

First implementation not using pair:

```Scala
def msort(xs: List[Int]): List[Int] = {
  val n = xs.length/2
  if (n == 0) xs
  else {
    def merge(xs: List[Int], ys: List[Int]) = (written below for clarity)
    val (fst, snd) = xs splitAt n
    merge(msort(fst), msort(snd))
  }
}

def merge(xs: List[Int], ys: List[Int]): List[Int] = {
  xs match {
  case Nil => ys
  case x :: xs1 =>
    ys match {
      case Nil => xs
      case y :: ys1 =>
        if (x < y) x :: merge(xs1, ys)
        else y :: merge(xs, ys1)
    }
  }
```

Second implementation using Pair is more structured and easier to follow:

```Scala
def msort(xs: List[Int]): List[Int] = {
  val n = xs.length / 2
  if (n==0) xs
  else {
    def merge(xs: List[Int], ys: List[Int]): List[Int] = (xs, ys) match {
      case (Nil, ys) => ys
      case (xs, Nil) => xs
      case (x :: xs1, y :: ys1) =>
        if (x < y) x :: merge(xs1, ys)
        else y :: merge(xs, ys1)
    }
    val (fst, snd) = xs splitAt n
    merge(msort(fst), msort(snd))
  }
}
```

## Implicit Parameters

???

## Other Collections

List is _linear_: access to the 1st element is much faster than access to the middle or end of a list.

Alternative sequence implementation: `Vector`, which compared to `List`, has more evenly balanced access patterns.

### Combinations

To list all combinations of numbers x and y where x is drawn from 1..M and y is drawn from 1..N:

```scala
(1 to M) flatMap (x => (1 to N) map (y => (x, y)))
```

### Scalar Product

To compute the scalar product of two vectors:

```scala
def scalarProduct(xs: Vector[Double], ys: Vector[Double]): Double = (xs zip ys).map(xy => xy._1 * xy._2).sum
```

An alternative way to write this is with a pattern matching function value.

```scala
def scalarProduct(xs: Vector[Double], ys: Vector[Double]): Double = (xs zip ys).map{ case (x, y) => x * y }.sum
```

Generally, the function value

```scala
{ case p1 => e1 ... case pn => en } is equivalent to
x => x match { case p1 => e1 ... case pn => en }
```

### Primality Test (conciseness over efficiency)

```scala
def isPrime(n: Int): Boolean = (2 until n) forall (d => n%d != 0)

// or simply
def isPrime(n: Int): Boolean = (2 until n) forall (n % _ != 0)
```

## Combinatorial Search and For-Expressions

### Handling Nested Sequences

Given a positive integer `n`, find all pairs of positive integers `i` and `j`, with `1 <= j < i < n` s.t. `i + j` is prime.

We will:

- generate the sequence of all pairs of integers `(i, j)` s.t. `1 <= j < i < n`: - generate all the integers btw 1 and n (excluded) - for each integer i, generate the list of pairs (i, 1), ..., (i, i-1)
- filter the pairs for which `i + j` is prime

For the 1st, `(1 until n) map (i => (1 until i) map (j => (i, j))).flatten`. Since `xs flatMap f = (xs map f).flatten`, `(1 until n) flatMap (i => (1 until i) map (map (j => (i, j)))`

For the 2nd, add `filter`: `(1 until n) flatMap (i => (1 until i) map (map (j => (i, j))) filter (pair => isPrime(pair._1 + pair._2))`

Not very elegant... Do it in a simpler way: for expressions

### For-Expressions

```scala
for ( s ) yield e
```

s is a seq of _generators_ and _filters_, and e is an _expression_ whose value is returned by an iteration

So same problem to return prime `i + j` could now be written as:

```scala
for {
  i <- 1 until n
  j <- 1 until i
  if isPrime(i + j)
} yield (i, j)
```

And rewrite `scalarProduct` using `for`:

```scala
def scalarProduct(xs: List[Double], ys: List[Double]) : Double = (for ((x, y) <- xs zip ys) yield x * y).sum
```

## Set

Principal differences btw _set_ and _sequence_: unordered and no duplicate elements.

### N-Queens

The 8 queens problem is to place 8 queens on a chessboard s.t. no queen is threatened by another. So there can't be 2 queens in the same row, column or diagonal. Extend 8 -> n

```
def queens(n: Int): Set[List[Int]] = {
  def placeQueens(k: Int): Set[List[Int]] =
    if (k == 0) Set(List())
    else
      for {
        queens <- placeQueens(k - 1)
        col <- 0 until n
        if isSafe(col, queens)
      } yield col :: queens
  placeQueens(n)
}

def isSafe(col: Int, queens: List[Int]): Boolean = {
  val row = queens.length
  val queensWithRow = (row - 1 to 0 by -1) zip queens
  queensForRow forall {
    case (r, c) => col != c && math.abs(col - c) != row -r
  }
}

def show(queens: List[Int]) = {
  val lines =
    for (col <- queens.reverse)
    yield Vector.fill(queens.length)("* ").updated(col, "X ").mkString
  "\n" + (lines mkString "\n")
}

(queens(8) map show) mkString "\n"
```

## Map

A map of type `Map[Key, Value]` is a data structure that associates keys of type `Key` with values of type `Value`.

```scala
val romanNumerals = Map("I" -> 1, "V" -> 5, "X" -> 10)
val capitalOfCountry = Map("US" -> "Washington", "Switzerland" -> "Bern")
```

### Map is Iterable

`Map[Key, Value]` extends the collection type `Iterable[(Key, Value)]`.

```scala
val countryOfCapital = capitalOfCountry map {
  case(x, y) => (y, x)
}
// Map("Washington" -> "US", "Bern" -> "Switzerland"
```

### Option type

The `Option` type is defined as:

```scala
trait Option[+A]
case class Some[+A](value: A) extends Option[A]
object None extends Option[Nothing]
```

`map get key` returns:

- `None` if `map` does not contain the given key
- `Some(x)` if `map` associates the given key with the value x

Since options are defined as case classes, they can be decomposed using pattern matching:

```scala
def showCaptical(country: String) = capitalOfCountry.get(country) match {
  case Some(capital) => capital
  case None => "missing data"
}

showCapital("US")      // "Washington"
showCapital("Andorra") // "missing data"
```

### sorted/sortWith and groupBy

```scala
val fruit = List("apple", "pear", "orange", "pineapple")

fruit.sorted // List("apple", "orange", "pear", "pineapple")
fruit.sortWith(_.length < _.length) // List("pear", "apple", "orange", "pineapple")
fruit groupBy (_.head) // Map(p -> List(pear, pineapple), a -> List(apple), List(orange))
```

### Example: polynomials as maps

```scala
class Poly(val terms0: Map[Int, Double]) {
  // could pass in arbitrary # of bindings rather than a map
  def this(bindings: (Int, Double)*) = this(bindings.toMap)

  val terms = term0 withDefaultValue 0.0

  def + (other: Poly) = new Poly(terms ++ (other.terms map adjust))

  def adjust(term: (Int, Double)): (Int, Double) = {
    val (exp, coeff) = term
    /*
    // could be deleted since default value of term is 0.0, and then replaced with: exp -> (coeff + terms(exp))
    terms get exp match {
      case Some(coeff1) => exp -> (coeff + coeff1)
      case None => exp -> coeff
    }
    */
  }

  override def toString =
    (for ((exp, coeff) <- terms.toList.sorted.reverse) yield coeff+"x^"+exp) mkString " + "
}
```

We now implement `+` with `foldLeft` instead of `++`:

```scala
def + (other: Poly) = new Poly((other.terms foldLeft terms)(addTerm))

def addTerm(terms: Map[Int, Double], term: (Int, Double)): Map[Int, Double] = {
  val (exp, coeff) = term
  terms + (exp -> (coeff + terms(exp)))
}
```

`foldLeft` is more efficient bc each of the binding is immediately added to terms Map, whereas before we need to create a new list of terms that contain the adjusted terms and then we would concatenate this list to the original one and convert back to Map.

## Putting the Pieces Together

### Dictionary btw numbers and words

```scala
val in = Source.forURL("xxx")
vale words = in.getLines.toList filter (word => word forall (chr => chr.isLetter))

val mnem = Map(
  '2' -> "ABC", '3' -> "DEF", '4' -> "GHI", '5' -> "JKL", '6' -> "MNO", '7' -> "PQRS", '8' -> "TUV", '9' -> "WXYZ")

/** Invert the mnem map to give a map from chars 'A' ... 'Z' to '2' ... '9' */
val charCode: Map[Char, Char] =
  for ((digit, str) <- mnem; ltr <- str) yield ltr -> digit

/** Maps a word to the digit string it can represent, e.g., "Java" -> "5282" */
def wordCode(word: String): String = word.toUpperCase map charCode

/** A map from digit strings to the words that represent them,
 * e.g., "5282" -> List("Java", "Kata", "Lava", ...)
 * Note: A missing number should map to the empty set, e.g., "1111" -> List()
 */
def wordsForNum: Map[String, Seq[String]] = words groupBy charCode withDefaultValue Seq()

def encode(number: String): Set[List[String]] =
  if (number.isEmpty) Set(List())
  else
    for {
      split f 1 to number.length
      word <- wordsForNum(number take split)
      rest <- encode(number drop split)
    } yield word::rest
  }.toSet

def translate(number: String): Set[String] =
  encode(number) map (_ mkString " ")
```
