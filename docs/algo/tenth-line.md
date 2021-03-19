---
title: Tenth Line
diff: easy
tags:
  - Shell
---

<img class="medium-zoom" src="/algo/tenth-line.png" alt="https://leetcode.com/problems/tenth-line">

## Solution

### Using `sed`

[This doc](https://www.grymoire.com/Unix/Sed.html#uh-31) states that, `"p"` is the print command. If `sed` wasn't started with an `"-n"` option, the `"p"` command will duplicate the input. The `"-n"` option turns off printing unless you request it

```bash
sed -n "10 p" file.txt
```

### Using `awk`

[This doc](https://www.grymoire.com/Unix/Awk.html#toc-uh-18) states that, `NR` is the number of records, or the line number.

```bash
awk 'NR==10{print; exit}' file.txt
```
