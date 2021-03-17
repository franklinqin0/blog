---
title: Word Frequency
diff: medium
tags:
  - Shell
---

<img class="medium-zoom" src="/algo/word-frequency.png" alt="https://leetcode.com/problems/word-frequency">

## Solution

```bash
cat words.txt | tr -s ' ' '\n' | sort | uniq -c | sort -r | awk '{ print $2, $1 }'
```

`tr -s`: truncate the string with target string, but only remaining one instance (e.g. multiple whitespaces)

`sort`: make the same string successive so that uniq could count the same string fully and correctly.

`uniq -c`: used to filter out the repeated lines which are successive, -c means counting

`sort -r`: -r means sorting in descending order

`awk '{ print $2, $1 }'`: format the output
