---
title: Learn Swift
date: 2021-09-06
sidebar: "auto"
categories:
  - study
tags:
  - tech
  - TUM
publish: false
---

I once tried to do a practical course related to iOS app development using Swift, but later gave up due to lack of interest. Still, some unstructured notes are kept here.

<!-- more -->

`View`: rectangular area
`var: body: some View` has to be inside `View`

`some View` gives more freedom: can be any `View`, rather than simply just `Text`

`stroke` on `Shape`, draws the boundary

`.`center?

if value not initialized, should specify type annotation
`let` constant
`var` variable

subclass initializer:

- Setting the value of properties that the subclass declares.
- Calling the superclass’s initializer.
- Changing the value of properties defined by the superclass. Any additional setup work that uses methods, getters, or setters can also be done at this point.

One of the most important differences between structures and classes is that structures are always copied when they’re passed around in your code, but classes are passed by reference.

```swift
let greeting = "Guten Tag!"
greeting[greeting.startIndex]
// G
greeting[greeting.index(before: greeting.endIndex)]
// !
greeting[greeting.index(after: greeting.startIndex)]
// u
let index = greeting.index(greeting.startIndex, offsetBy: 7)
greeting[index]
// a
```

extended string delimiter

```swift
let threeMoreDoubleQuotationMarks = #"""
Here are three more double quotes: """
"""#
```

the `~=` operator compares two values of the same type using the == operator.
