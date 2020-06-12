---
title: Full Stack Engineer Interview Questions
date: 2020-03-10
categories:
 - study
tags:
 - tech
publish: false
---

This blog features important interview questions for full stack engineers.
<!-- more -->

## TCP

Transmission control protocol (TCP) manages the sending and receiving of all your data as packets.

## Cookie

Cookie is a small piece of data **stored by the browser** and **sent to the server** with every request.

Cookie use cases:

1. log in
2. shopping cart
3. state of filling a long form
4. browse history (ads)

Session is a collection of data **stored on the server** and associated with a **given user**.

Cookie vs. Token: https://medium.com/@sherryhsu/session-vs-token-based-authentication-11a6c5ac45e4

session token / local storage

## CORS 跨域

## Cross-site scripting

## Cryptography

Known issues:

- rainbow table attack
  A rainbow table is a precomputed table for reversing cryptographic hash functions, usually for cracking password hashes
- password collision
  Same password is common like '123456'

Solution: add **salt**


store the hashed value: `hash(provided password + stored salt)`

## HTTP vs. HTTPS

## RPC vs. REST

## JS

### == vs. ===

## ES 6

https://github.com/addyosmani/es6-equivalents-in-es5

### This & Arrow Function

### Class

### Deconstruction

### Spread Operation

## NoSQL

### MongoDB

Export/import a collection in a database:

- `mongoexport --db local --collection startup_log  --out local.json`
- `mongoimport --db test --collection test --file demo_news.json`

Export/import all collections in a database:

- `mongodump -d <database_name> -o <directory_backup>`
- `mongorestore -d <database_name> <directory_backup>`

**Collections** in Mongo are equivalent to **tables** in relational databases. They can hold multiple JSON documents.

**Documents** are equivalent to **records** or **rows** of data in SQL. While a SQL row can reference data in other tables, Mongo documents usually combine that in a document.

Fields
‘Fields’ or attributes are similar to columns in a SQL table.

Schema
While Mongo is schema-less, SQL defines a schema via the table definition. A Mongoose ‘schema’ is a document data structure (or shape of the document) that is enforced via the application layer.

Models
‘Models’ are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.

## CAP Theoream

**C**onsistency
**A**vailability
**P**artition-tolerance

## Message Queue

### Kafka vs. RabbitMQ

## Service Oriented Architecture (SOA)

## Microservice

## Authorization

## Authentication

## Network Address Translation (NAT)

NAT is the process where a network device, usually a firewall, assigns a public address to a computer (or group of computers) inside a private network. The main use of NAT is to limit the number of public IP addresses an organization or company must use, for both economy and security purposes.


## CSS

### CSS Modules

CSS Modules is a method to add local scope and module dependencies into CSS.

See more at: [https://github.com/ruanyf/css-modules-demos]().
