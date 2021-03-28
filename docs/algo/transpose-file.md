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

### Using `xargs`

```bash
head -n 1 file.txt | wc -w | xargs seq | xargs -n 1 -I {} sh -c "cut -d' ' -f {} file.txt | xargs"
```

### Using `awk`

See more on [this LeetCode post](https://leetcode.com/problems/transpose-file/discuss/111382/Solution-using-AWK-with-explanations).

```bash
awk '
{
    for (i=1; i<=NF; i++) {
        if (FNR == 1) {
            arr[i] = $i;
        } else {
            arr[i] = arr[i] " " $i
        }
    }
}
END {
    for (i=1; arr[i]!=""; i++) {
        print arr[i]
    }
}
' file.txt
```
