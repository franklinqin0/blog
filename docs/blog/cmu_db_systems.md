---
title: CMU DB Systems Notes
date: 2020-03-12
categories:
  - study
tags:
  - tech
publish: false
---

Course notes from CMU DB course 15.445.

<!-- more -->

## Database Management System

A _DBMS_ is software that allows applications to store and analyze information in a database, helps achieve **centralized control of data** and **data independence**, and manages the interaction between the **database** and **end-users**.

The collection of information stored in a database at a particular moment is called as **instance of database**.

A general-purpose DBMS is designed to allow the definition, creation, querying, update, and administration of databases.

### Integrity Constraints

Database applications were built directly on top of the file system to overcome **integrity constraints** of using file-systems:

- _Domain Constraints_: Every attribute should have values within its defined domain.
- _Key Constraints_: There should be a primary key for every relational table.
- _Entity Integrity Constraints_: No NULL values should be there for the Primary Keys.
- _Referential Integrity Constraints_: In relational model, when two tables are related to each other with the help of some common attributes, the value of referencing attribute should be present in the referenced attribute else it should be NULL.

## Early DBMSs

Database applications were difficult to build and maintain.

Tight coupling between logical and physical layers.

You have to (roughly) know what queries your app would execute before you deployed the database.

## Relational Model

Database abstraction to avoid maintenance (of physical layer):

- Store database in simple data structures.
- Access data through high-level language.
- Physical storage left up to implementation.

A _data model_ is collection of concepts for describing the data in a database.

Relational (most RDBMSs)  
NOSQL: Key/Value, Graph, Document, Column-family  
Array/Matrix (machine learning)  
Hierarchical, Network (obsolete)

A _schema_ is a description of a particular collection of data, using a given data model.

_Structure_: The definition of relations and their contents.  
_Integrity_: Ensure the database’s contents satisfy constraints.  
_Manipulation_: How to access and modify a database’s contents.

A _relation_(table) is **unordered set** that contain the relationship attributes that represent entities.  
A _tuple_(row) is a set of **attribute values** (also known as its domain) in the relation.

A relational database consists of a collection of **tables**.

**Fields** are the column of the relation or tables. **Records** are each row in a relation. **Keys** are the constraints in relation.

n-ary Relation = Table with n columns

- values are (normally) atomic/scalar
- the special **NULL** is a member of every domain

A relation's _primary key_ uniquely identifies a single tuple.  
Some DBMSs automatically create an internal primary key if you don't define one.

<!-- Non-aggregated values in SELECT output clause must appear in GROUP BY clause. -->

A _foreign key_ specifies that an attribute from one relation has to map to a tuple in another relation.

The relational model is independent of any query language implementation.

## Data Manipulation Languages (DML)

Procedural (Relational Algebra)  
The query specifies the (high-level) strategy the DBMS should use to find the desired result.

Non-Procedural (Relational Calculus)  
The query specifies only what data is wanted and not how to find it.

## Relational Algebra

Fundamental operations to retrieve and manipulate tuples in a relation.  
$\rightarrow$ Based on set algebra.

Each operator takes one or more relations as its inputs and outputs a new relation.  
$\rightarrow$ We can “chain” operators together to create more complex operations.

### Select

Choose a subset of the tuples from a relation that satisfies a selection predicate.  
$\rightarrow$ Predicate acts as a filter to retain only tuples that fulfill its qualifying requirement.  
$\rightarrow$ Can combine multiple predicates using conjunctions / disjunctions.

Syntax: $\sigma_{\text{predicate}}(R)$  
Example: `SELECT * FROM R WHERE a_id='a2' AND b_id>102;`

### Projection

Generate a relation with tuples that contains only the specified attributes.  
$\rightarrow$ Can rearrange attributes’ ordering.  
$\rightarrow$ Can manipulate the values.

Syntax: $\pi_{A_1,\cdots,A_n}(R)$  
Example: `SELECT b_id-100, a_id FROM R WHERE a_id='a2';`

### Union

Generate a relation that contains all tuples that appear in either only one or both input relations.

Syntax: $(R \cup S)$  
Example: `(SELECT * FROM R) UNION ALL (SELECT * FROM S);`

### Intersection

Generate a relation that contains only the tuples that appear in both of the input relations.

Syntax: $(R \cap S)$  
Example: `(SELECT * FROM R) INTERSECT (SELECT * FROM S);`

### Difference

Generate a relation that contains only the tuples that appear in the first and not the second of the input relations.

Syntax: $(R - S)$
Example: `(SELECT _ FROM R) EXCEPT (SELECT _ FROM S);`

### Product

Generate a relation that contains all possible combinations of tuples from the input relations.

Syntax: $(R \times S)$
Example: `SELECT * FROM R CROSS JOIN S;` or `SELECT * FROM R, S;`

### Natural Join

Generate a relation that contains all tuples that are a combination of two tuples (one from each input relation) with a common value(s) for one or more attributes.

Syntax: $(R \bowtie S)$
Example: `SELECT * FROM R NATURAL JOIN S;`

[difference between CROSS JOIN and FULL OUTER JOIN?](https://stackoverflow.com/a/3228910/6421652)

## Advanced SQL

### Relational Languages

User only needs to specify the answer that they want, not how to compute it.

The DBMS is responsible for efficient evaluation of the query.  
$\rightarrow$ Query optimizer: re-orders operations and generates query plan

SQL is based on **bags** (duplicates) nots sets (not duplicates).

SQL Join: https://en.wikipedia.org/wiki/Join_(SQL)

`Row_Number`: the position of tuple within the window defined by the PARTITION BY clause

`Rank`: position in the sorting order

A window function is an SQL function where the input values are taken from a "window" of one or more rows in the results set of a SELECT statement.

Window functions are distinguished from other SQL functions by the presence of an OVER clause. If a function has an OVER clause, then it is a window function. If it lacks an OVER clause, then it is an ordinary aggregate or scalar function. Window functions might also have a FILTER clause in between the function and the OVER clause.

## Functional Dependency (FD)

A FD is a form of a constraint and part of a relation's schema to define a valid instance.

Definition: $X \rightarrow Y \Rightarrow (t_1[x]=t_2[x] \Rightarrow t_1[y]=t_2[y])$  
If two tuples ($t_1$, $t_2$) agree on the $X$ attribute, then they must agree on the $Y$ attribute too.  
$\rightarrow$ The value of $X$ functionally defines the value of $Y$.

Two FDs $X \rightarrow Y$ and $X \rightarrow Z$ can be written in shorthand as $X \rightarrow YZ$, but $XY \rightarrow Z$ is not the same as $X \rightarrow Z$ and $Y \rightarrow Z$.

Given a set $F$ of FDs ${f_1, \cdots, f_n}$, compute the closure $F+$ (set of all implied FDs) using Armstrong's Axioms.

Significance: decide if database design is correct

### Armstrong's Axioms

Reflexivity:  
$Y \subseteq X \Rightarrow X \rightarrow Y$

Augmentation:  
$X \rightarrow Y \Rightarrow XZ \rightarrow YZ$

Transitivity:  
$(X \rightarrow Y) \wedge (Y \rightarrow Z) \Rightarrow X \rightarrow Z$

Decomposition:  
$X \rightarrow YZ \Rightarrow (X \rightarrow Y) \wedge (X \rightarrow Z)$

Composition:  
$X \rightarrow Y \wedge A \rightarrow B \Rightarrow XA \rightarrow YB$

Union:  
$(X \rightarrow Y) \wedge (X \rightarrow Z) \Rightarrow X \rightarrow YZ$

Pseudo-transitivity:  
$(X \rightarrow Y) \wedge (YW \rightarrow Z) \Rightarrow XW \rightarrow Z$

### Closure

Given a set of FDs $f_1, \cdots, f_n$ we deﬁne the Closure $F+$ as the set of all implied FDs using Armstrong’s axioms.

Significance:

- checking closure at runtime is expensive
- $\rightarrow$ minimal set of FDs to ensure correctness

### Canonical Cover

Given a set $F$ of FDs ${f_1, \cdots, f_n}$, canonical cover $F_c$ is the **minimal set of all FDs**.

Definitions:

1. the **RHS** of every FD is a **single attribute**
2. the closure of $F_c$ is **identical** to the closure of $F$ (i.e., $F_c = F$ are equivalent)
3. the $F_c$ is **minimal** (i.e., eliminating any attribute from the LHS or RHS of an FD violates property #2)

Computation:

- split FDs to have a **single attribute** in RHS
- drop extraneous LHS or RHS attributes or **redundant FDs**

Significance:

- canonical cover is the **minimum number of assertions** to implement to ensure database integrity
- find the _super key_ for a relation

## Keys

### Super Key

- any set of attributes in a relation that functionally determines all attributes in the relation
- a set of attributes where no distinct tuples have the same values for these attributes
- a set of attributes that uniquely identifies a tuple

Significance:

- help determine if able to **decompose** a table into multiple sub-tables
- super keys ensure that we are able to recreate the original relation thru joins

### Candidate Key

- any super key s.t. the removal of any attribute leaves a set that does not functionally determine all attributes
- set of attributes that uniquely identifies a tuple according to a key constraint
- a minimal set of attributes that uniquely identifies a tuple

$\rightarrow$ a candidate key is a super key, but not all super keys are candidate keys

### Primary Key

Usually just the candidate key.

## Schema Decompositions

Objective: split a single relation $R$ into a set of relations ${R_1, \cdots, R_n}$

Goals:  
Mandatory: Lossless Joins  
Nice to have, but not required: Dependency Preservation, Redundancy Avoidance

### Lossless Joins

<!-- Information is not lost or bad information is not created when natural joining -->

Motivation: avoid information loss  
Goal: no noise introduced when reconstituting universal relation via natural join  
Test: at each decomposition $R = (R_1 \cup R_2)$, check whether $(R_1 \cap R_2) \rightarrow R_1$ or $(R_1 \cap R_2) \rightarrow R_2$

### Dependency Preservation

<!-- FDs are not split across relations -->

Motivation: efficient FD assertions  
Goal: a schema preserves dependencies if its original FDs do not span multiple tables  
$\rightarrow$ would be expensive to check (assuming that our DBMS supports ASSERTIONS)

Test whether the decomposition $R = {R_1, \cdots, R_n}$ preserves the FD set $F$:

- compute $F+$
- compute $G$ as the union of the set of FDs in $F+$ covered by ${R_1, \cdots, R_n}$
- compute $G+$
- if $F+ = G+$, then ${R_1, \cdots, R_n}$ is Dependency Preserving

### Redundancy Avoidance

No repeated attributes in tuples.

Goals for design of the logical scheme:

- avoid data inconsistency
- able to construct query easily
- able to access data efficiently

[Denormalization vs. Normal Form](http://www.ayqy.net/blog/database-denormalization)

## Normal Forms

A normal form is a characterization of a decomposition in terms of the properties that satisfies when putting the relationas back together.  
$\rightarrow$ also called the "universal relation".

### 1st Normal Form (1NF)

- all types must be atomic (no arrays)
- no repeating groups.

### 2nd Normal Form (2NF)

- 1NF
- any non-key attributes fully depend on the candidate key

If the proper subset of candidate key determines non-prime attribute, it is called partial dependency.

If a partial dependency exists, we remove the partially dependent attribute(s) from the relation by placing them in a new relation along with a copy of their determinant.

### 3rd Normal Form (3NF)

A relation is in 3NF if **at least one** of the following condition holds in every non-trivial function dependency $X \rightarrow Y$:

- $X$ is a super key
- each element of $Y$ is part of some candidate key

Property:

- always preserves dependencies (unlike BCNF) but may have some anomalies

In other words, a relation is in 3NF if it is in 1NF and 2NF and in which no non-primary-key attribute is transitively dependent on the primary key.

### Boyce-Codd Normal Form (BCNF)

Definition:

- every determinant is a super key

Property:

- no redundancies and no lossless joins
- some BCNF decompositions may lose dependencies when decomposed relations are joined back together

A relation $R$ w/ FD set $F$ is in BCNF if for all non-trivial $X \rightarrow Y$ in $F+$:  
$X \rightarrow R$ (i.e. $X$ is a super key)

## NoSQL Denormalization
