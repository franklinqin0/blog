---
title: Word Frequency
diff: medium
tags:
  - Shell
---

<img class="medium-zoom" src="/algo/word-frequency.png" alt="https://leetcode.com/problems/word-frequency">

## Solution

### Using `xargs`, `uniq` and `sort`

`cat`: displays the contents of the file  
`xargs`: applies the printf function to every line in the output of `cat`  
`sort`: Sorts the current buffer piped to it  
`uniq -c`: displays the counts of each line in the buffer  
`sort -nr`: reverse sorts the output via the counts in the previous operation  
`awk`: prints the 2nd column and then the 1st column based on the problem requirement

could also replace the 2nd part w/ `tr -s ' ' '\n'`.

```bash
cat words.txt | xargs -n 1 | sort | uniq -c | sort -nr | awk '{print $2, $1}'
```

### Using `awk`

```bash
awk '
{
    for (i=1; i<=NF; i++) {
        cnt[$i]++
    }
}
END {
    for (i in cnt)
        print i, cnt[i]
}
' words.txt | sort -nr -k 2
```
