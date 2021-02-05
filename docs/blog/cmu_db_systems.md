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

A **DBMS** is software that allows applications to store and analyze information in a database.

A general-purpose DBMS is designed to allow the definition, creation, querying, update, and administration of databases.

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

`Row_Number`: the position of tuple within the window defined by the APRTITION BY clause

`Rank`: position in the sorting order
