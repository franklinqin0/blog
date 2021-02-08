---
title: CMU DB Systems Notes
date: 2020-03-12
categories:
  - study
tags:
  - tech
publish: false
---

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

### Armstrong's Axioms

Reflexivity:  
$X \supseteq Y \Rightarrow X \rightarrow Y$

Union:  
$(X \rightarrow Y) \wedge (X \rightarrow Z) \Rightarrow X \rightarrow YZ$

Augmentation:  
$X \rightarrow Y \Rightarrow XZ \rightarrow YZ$

Decomposition:  
$X \rightarrow YZ \Rightarrow (X \rightarrow Y) \wedge (X \rightarrow Z)$

Transitivity:  
$(X \rightarrow Y) \wedge (Y \rightarrow Z) \Rightarrow X \rightarrow Z$

Pseudo-transitivity:  
$(X \rightarrow Y) \wedge (YW \rightarrow Z) \Rightarrow XW \rightarrow Z$

## Functional Dependency (FD)

A FD is a form of a constraint and part of a relation's schema to define a valid instance.

Definition: $X \rightarrow Y \Rightarrow (t_1[x]=t_2[x] \Rightarrow t_1[y]=t_2[y])$  
If two tuples ($t_1$, $t_2$) agree on the $X$ attribute, then they must agree on the $Y$ attribute too.  
$\rightarrow$ The value of $X$ functionally defines the value of $Y$.

Two FDs $X \rightarrow Y$ and $X \rightarrow Z$ can be written in shorthand as $X \rightarrow YZ$, but $XY \rightarrow Z$ is not the same as $X \rightarrow Z$ and $Y \rightarrow Z$.

## Lossless Joins

Information is not lost or bad information is not created when joining

### Dependency Preservation

FDs are not split across relations

## Redundancy avoidance

No repeated attributes in tuples

Goals for deisng of the logical scheme:

- avoid data inconsistency
- able to construct query easily
- able to access data efficiently

[Denormalization vs. Normal Form](http://www.ayqy.net/blog/database-denormalization)
