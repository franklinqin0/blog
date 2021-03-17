---
title: Tenth Line
diff: easy
tags:
  - Shell
---

<img class="medium-zoom" src="/algo/tenth-line.png" alt="https://leetcode.com/problems/tenth-line">

## Solution

### Using `sed`

```bash
sed -n "10p" file.txt
```

### Using `awk`

Replacing `awk` with `gawk` also works.

```bash
awk 'NR==10{print; exit}' file.txt
```
