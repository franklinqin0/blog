---
title: Shell Notes
date: 2021-03-18
categories:
  - study
tags:
  - tech
publish: false
---

## `awk`

[Awk](https://www.grymoire.com/Unix/Awk.html)

## `sed`

[Sed](https://www.grymoire.com/Unix/Sed.html)

## `grep`

`egrep` $=$ `grep -E`.

The difference is that `-E` option enables usage of extended regexp patterns. It will allow you using of such meta-symbols as `+`, `?` or `|`. They aren't ordinary characters like we used to have in words or filenames but control commands for grep binary itself. Thus, `|` means _logical OR_.
