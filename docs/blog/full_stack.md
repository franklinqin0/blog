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

## Session, Cookie, Token

### Cookie

Cookie is a small piece of data **stored by the browser** and **sent to the server** with every request.

Cookie use cases:

1. log in
2. shopping cart
3. state of filling a long form
4. browse history (ads)

### Session

Session is a collection of data **stored on the server** and associated with a **given user**.

### Cookie & Session vs. Token

As HTTP is a stateless protocol, either a cookie or a token is used to store user state.

### Cookie & Session Based Auth

In the session based authentication, the server will create a session for the user after the user logs in. The session id is then stored on a **cookie on the user’s browser**. While the user stays logged in, the cookie would be sent along with every subsequent request. The server can then compare the session id stored on the cookie against the session information stored in the memory to verify user’s identity and sends response with the corresponding state!

### Token Based Authentication

Many web applications use JSON Web Token (JWT) instead of sessions for authentication. In the token based application, the server creates JWT with a secret and sends the JWT to the client. The client stores the JWT (usually in local storage) and includes JWT in the header with every request. The server would then validate the JWT with every request from the client and sends response.

The biggest difference here is that the user’s state is not stored on the server, as the state is stored inside the token on the client side instead. Most of the modern web applications use JWT for authentication for reasons including scalability and mobile device authentication.

Mostly from [Sherry Hsu's Medium post](https://medium.com/@sherryhsu/session-vs-token-based-authentication-11a6c5ac45e4)

## OAuth

OAuth doesn't share password data but instead uses **authorization tokens** to prove an identity between consumers and service providers. OAuth is an authentication protocol that allows user to approve one application interacting with another without giving away user's identity.

## Cross-origin Resource Sharing (CORS)

CORS is a mechanism that **allows restricted resources** on a web page to be requested **from another domain** outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.

## Cross-site Scripting (XSS)

XSS is a client-side code injection attack. The attacker aims to execute malicious scripts in a web browser of the victim by including malicious code in a legitimate web page or web application. Solution: escape angular bracket `<` with less sign `&lt;` so that malicious script won't be run.

[More by computerphile](https://youtu.be/L5l9lSnNMxg)

## Cross-site Request Forgery (CSRF)

CSRF, also known as one-click attack or session riding, is a type of malicious exploit of a website where **unauthorized commands** are transmitted **from a user that the web application trusts**. Basic solution: referer head, but might be blocked by ad blocker or privacy tool. Ultimate solution: each time a form is created, a **one-time token** is generated. Thus, a valid form sent back should include this token.

[More by computerphile](https://youtu.be/vRBihr41JTo)

## SQL Injection

SQL injection is a code injection technique, used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution (e.g. to dump the database contents to the attacker).

[More by computerphile](https://youtu.be/_jKylhJtPmI)

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

### Spread Operator

`...`

### Unite Unique

Let's see vanilla JS.

```js
function uniteUnique(arr) {
  var args = [...arguments];
  var result = [];
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}
```

So there are `var` and `for` and array's `includes` and `push` functions, among which `for` is quite wordy and `var` is pretty unsafe (global lexical scope???).

A little better using `while`, `concat` and `filter`:

```js
function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]) {
    concatArr = concatArr.concat(arguments[i]);
    i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}
```

Finally, using ES6 syntax (spread operator and `Set`):

```js
function uniteUnique(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regular set and not a multiset
  return [...new Set(flatArray)];
}
```

## NoSQL

### MongoDB

Export/import a collection in a database:

- `mongoexport --db local --collection startup_log --out local.json`
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

[TLS validation](https://cjting.me/2021/03/02/how-to-validate-tls-certificate)

## Authentication

## Network Address Translation (NAT)

NAT is the process where a network device, usually a firewall, assigns a public address to a computer (or group of computers) inside a private network. The main use of NAT is to limit the number of public IP addresses an organization or company must use, for both economy and security purposes.

## CSS

### CSS Modules

CSS Modules is a method to add local scope and module dependencies into CSS.

See more at: [https://github.com/ruanyf/css-modules-demos]().

### Debounce vs. Throttle

`debounce`: Grouping a sudden burst of events (like keystrokes) into a single one.
`throttle`: Guaranteeing a constant flow of executions every X milliseconds. Like checking every 200ms your scroll position to trigger a CSS animation.
`requestAnimationFrame`: a throttle alternative. When your function recalculates and renders elements on screen and you want to guarantee smooth changes or animations. Note: no IE9 support.

[More by css-tricks](https://css-tricks.com/debouncing-throttling-explained-examples)

## Callback, Promise, Async & Await

[Async and Promise](https://slides.cjting.me/async-and-promise.html)
