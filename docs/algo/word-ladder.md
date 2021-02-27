---
title: Word Ladder
diff: hard
tags:
  - BFS
  - Implicit Graph
related:
  - sliding-puzzle-ii
  - word-ladder-ii
---

<img class="medium-zoom" src="/algo/word-ladder.png" alt="https://www.leetcode.com/problems/word-ladder">

## Solution

Let $n$ be the number of words and $m$ be the length of each word.

It's not necessary to store all transformations for every word in `dict`. There are 2 possible approaches to find a `word`'s possible `next_words`:

1. generate all `next_words` w/ only 1 different char from `word`
2. check in `dict` if every element is 1 char different from `word`

We choose the 1st b/c `26 * len(word)` is usually less than `len(dict)`.

Note that `dict` should be a _HashSet_; otherwise the `next_word not in dict` check is quite inefficient.

Helper method `get_next_words` outputs an array of all possible `next_words` of current `word`. Its time complexity is $O(26 m^2) = O(m^2)$ b/c there are $O(m)$ iterations, slicing a string causes $O(m)$ time, and the size of English alphabet is $26$. The space complexity is $O(25 m)$.

Thus, the total complexity is:

::: theorem Complexity
time: $O(nm^2)$  
space: $O(nm^2)$
:::

`vis` can be many data structures.

### Layered BFS w/ HashSet

For each layer of BFS, we increment `res` by $1$.

```py {11,16}
def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
    dct = set()
    for word in wordList:
        dct.add(word)
    queue = [beginWord]
    vis = set([beginWord])

    res = 0
    while queue:
        res += 1
        for _ in range(len(queue)):
            word = queue.pop(0)
            if word == endWord:
                return res
            for next_word in self.get_next_words(word):
                if next_word not in dct or next_word in vis:
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

Now BFS is no longer layered, but turn `vis` into a hashmap to store number of transformations.

```py {6,11,16}
def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
    dct = set()
    for word in wordList:
        dct.add(word)
    queue = [beginWord]
    vis = {beginWord: 1}

    while queue:
        word = queue.pop(0)
        if word == endWord:
            return vis[word]
        for next_word in self.get_next_words(word):
            if next_word not in dct or next_word in vis:
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
def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
    dct = set()
    for word in wordList:
        dct.add(word)

    queue = [(beginWord,1)]
    word_len = len(beginWord)

    while queue:
        word, cnt = queue.pop(0)
        if word == endWord:
            return cnt
        for i in range(len(word)):
            left, right = word[:i], word[i+1:]
            for char in 'abcdefghijklmnopqrstuvwxyz':
                if word[i] != char:
                    next_word = left + char + right
                    if next_word in dct:
                        queue.append((next_word, cnt+1))
                        # remove next_word to avoid cycle and thus infinite loop
                        dct.remove(next_word)
    return 0
```

::: details Bidirectional BFS

### Bidirectional BFS

This is not needed during interview.

```py
from collections import defaultdict
class Solution:
    def __init__(self):
        self.length = 0
        # Dictionary to hold combination of words that can be formed,
        # from any given word. By changing one letter at a time.
        self.all_combo_dict = defaultdict(list)

    def visitWordNode(self, queue, visited, others_visited):
        current_word, level = queue.popleft()
        for i in range(self.length):
            # Intermediate words for current word
            intermediate_word = current_word[:i] + "*" + current_word[i+1:]

            # Next states are all the words which share the same intermediate state.
            for word in self.all_combo_dict[intermediate_word]:
                # If the intermediate state/word has already been visited from the
                # other parallel traversal this means we have found the answer.
                if word in others_visited:
                    return level + others_visited[word]
                if word not in visited:
                    # Save the level as the value of the dictionary, to save number of hops.
                    visited[word] = level + 1
                    queue.append((word, level + 1))
        return None

    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if endWord not in wordList or not endWord or not beginWord or not wordList:
            return 0

        # Since all words are of same length.
        self.length = len(beginWord)

        for word in wordList:
            for i in range(self.length):
                # Key is the generic word
                # Value is a list of words which have the same intermediate generic word.
                self.all_combo_dict[word[:i] + "*" + word[i+1:]].append(word)


        # Queues for birdirectional BFS
        queue_begin = collections.deque([(beginWord, 1)]) # BFS starting from beginWord
        queue_end = collections.deque([(endWord, 1)]) # BFS starting from endWord

        # Visited to make sure we don't repeat processing same word
        visited_begin = {beginWord: 1}
        visited_end = {endWord: 1}
        ans = None

        # We do a birdirectional search starting one pointer from begin
        # word and one pointer from end word. Hopping one by one.
        while queue_begin and queue_end:

            # One hop from begin word
            ans = self.visitWordNode(queue_begin, visited_begin, visited_end)
            if ans:
                return ans
            # One hop from end word
            ans = self.visitWordNode(queue_end, visited_end, visited_begin)
            if ans:
                return ans

        return 0
```

:::
