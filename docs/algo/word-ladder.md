---
title: Word Ladder
diff: hard
tags:
  - BFS
  - Implicit Graph
related:
  - sliding-puzzle-ii
---

<img class="medium-zoom" src="/algo/word-ladder.png" alt="https://www.lintcode.com/problem/word-ladder">

Leetcode has a [similar question](https://leetcode.com/problems/word-ladder) but input `dict` (`set`) is renamed as `wordList` (`List[str]`), so the following code needs to be added before all solutions:

```py
if end not in wordList: return 0
dict = set()
for word in wordList:
    dict.add(word)
```

In all following solutions, `dict.add(end)` is added at front b/c `end` is by default not in `dict` but needed as endpoint for BFS.

## Solution

It's not necessary to store all transformations for every word in `dict`. There are 2 possible approaches to find a `word`'s possible `next_words`:

1. generate all `next_words` w/ only 1 different char from `word`
2. check in `dict` if every element is 1 char different from `word`

We choose the 1st b/c `26 * len(word)` is usually less than `len(dict)`.

Note that `dict` should be a HashSet; o.w. the `next_word not in dict` check is quite inefficient.

Helper method `get_next_words` outputs an array of all possible `next_words` of current `word`. Its time complexity is $O(26*L^2) = O(L^2)$ b/c there are $O(L)$ iterations, slicing a string causes $O(L)$ time, and the size of English alphabet is $26$. The space complexity is $O(25*L)$.

Complexity:

- time: ??? 4/5
- space:

### Layered BFS w/ HashSet

For each layer of BFS, we increment `res` by $1$.

```py {16,21}
class Solution:
    """
    @param: start: a string
    @param: end: a string
    @param: dict: a set of string
    @return: An integer
    """
    def ladderLength(self, start, end, dict):
        dict.add(end)
        queue = [start]
        vis = set([start])

        res = 0
        while queue:
            res += 1
            for _ in range(len(queue)):
                word = queue.pop(0)
                if word == end:
                    return res
                for next_word in self.get_next_words(word):
                    if next_word not in dict or next_word in vis:
                        continue
                    queue.append(next_word)
                    vis.add(next_word)
        return 0

    def get_next_words(self, word):
        words = []
        for i in range(len(word)):
            left, right = word[:i], word[i+1:]
            for char in 'abcdefghijklmnopqrstuvwxyz':
                if word[i] == char:
                    continue
                words.append(left + char + right)
        return words
```

### BFS w/ HashMap

Now BFS is no longer layered, but turn `vis` into a HashMap to store number of transformations.

```py {11,17,22}
class Solution:
    """
    @param: start: a string
    @param: end: a string
    @param: dict: a set of string
    @return: An integer
    """
    def ladderLength(self, start, end, dict):
        dict.add(end)
        queue = [start]
        vis = {start: 1}

        # res = 0
        while queue:
            word = queue.pop(0)
            if word == end:
                return vis[word]
            for next_word in self.get_next_words(word):
                if next_word not in dict or next_word in vis:
                    continue
                queue.append(next_word)
                vis[next_word] = vis[word] + 1
        return 0

    def get_next_words(self, word):
        words = []
        for i in range(len(word)):
            left, right = word[:i], word[i+1:]
            for char in 'abcdefghijklmnopqrstuvwxyz':
                if word[i] == char:
                    continue
                words.append(left + char + right)
        return words
```

### Improved BFS

The following solution gets rid of helper function `get_next_words` and use `queue` to store the mappings from word to number of transformations.

```py
class Solution:
    """
    @param: start: a string
    @param: end: a string
    @param: dict: a set of string
    @return: An integer
    """
    def ladderLength(self, start, end, dict):
        dict.add(end)
        queue = [(start,1)]
        word_len = len(start)

        while queue:
            word, cnt = queue.pop(0)
            if word == end:
                return cnt
            for i in range(len(word)):
                left, right = word[:i], word[i+1:]
                for char in 'abcdefghijklmnopqrstuvwxyz':
                    if word[i] != char:
                        next_word = left + char + right
                        if next_word in dict:
                            queue.append((next_word, cnt+1))
                            # remove next_word to avoid cycle and thus infinite loop
                            dict.remove(next_word)
        return 0
```

<!-- ### Bidirectional BFS on LeetCode (REDO) -->
