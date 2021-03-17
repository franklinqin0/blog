---
title: Transpose File
diff: medium
tags:
  - Shell
---

<img class="medium-zoom" src="/algo/transpose-file.png" alt="https://leetcode.com/problems/transpose-file">

## Solution

### Iteration

```bash
ncol=`head -n 1 file.txt | wc -w`
for i in `seq $ncol`
do
cut -d ' ' -f $i file.txt | xargs
done
```

### ???

```bash
head -1 file.txt | wc -w | xargs seq | xargs -n1 -I{} sh -c "cut -d' ' -f{} file.txt | xargs"
```
