---
title: Valid Phone Numbers
diff: easy
tags:
  - Shell
---

<img class="medium-zoom" src="/algo/valid-phone-numbers.png" alt="https://leetcode.com/problems/valid-phone-numbers">

## Solution

### Using `egrep`

`egrep` $=$ `grep -E`.

The difference is that `-E` option enables usage of extended regexp patterns. It will allow you using of such meta-symbols as `+`, `?` or `|`. They aren't ordinary characters like we used to have in words or filenames but control commands for grep binary itself. Thus, `|` means _logical OR_.

```bash
egrep '^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$' file.txt
```

### Using `awk`

Replacing `awk` with `gawk` also works.

```bash
awk '/^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$/' file.txt
```
