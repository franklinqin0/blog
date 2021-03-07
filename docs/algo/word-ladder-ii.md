---
title: Word Ladder II
diff: hard
tags:
  - BFS
  - DFS
  - Implicit Graph
related:
  - sliding-puzzle-ii
  - word-ladder
publish: false
---

<img class="medium-zoom" src="/algo/word-ladder-ii.png" alt="https://www.leetcode.com/problems/word-ladder-ii">

## Solution

### BFS & DFS (REDO)

[a simple Python soln](https://leetcode.com/problems/word-ladder-ii/discuss/40458/Use-defaultdict-for-traceback-and-easy-writing-20-lines-python-code)

从 end 到 start 做一次 BFS，并且把距离 end 的距离都保存在 distance 中。 然后在从 start 到 end 做一次 DFS，每走一步必须确保离 end 的 distance 越来越近。

与另外一个代码中提前建立 index 不同，这里是在寻找下一个变换单词的时候，再去获得对应的单词列表。一个单词最多有 L 个字符，每个字符有 25 种不同的变化（26 个字母除掉这个位置上的字母），然后 check 一下在不在 dict 里就知道是不是 next word 了。

```py
def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
    dct = set()
    for word in wordList:
        dct.add(word)
    dct.add(beginWord)
    distance = {}

    self.bfs(endWord, distance, dct)

    results = []
    self.dfs(beginWord, endWord, distance, dct, [beginWord], results)

    return results

def bfs(self, beginWord, distance, dct):
    distance[beginWord] = 0
    queue = deque([beginWord])
    while queue:
        word = queue.popleft()
        for next_word in self.get_next_words(word, dct):
            if next_word not in distance:
                distance[next_word] = distance[word] + 1
                queue.append(next_word)

def get_next_words(self, word, dct):
    words = []
    for i in range(len(word)):
        for c in 'abcdefghijklmnopqrstuvwxyz':
            next_word = word[:i] + c + word[i + 1:]
            if next_word != word and next_word in dct:
                words.append(next_word)
    return words

def dfs(self, curt, target, distance, dct, path, results):
    if curt == target:
        results.append(list(path))
        return

    for word in self.get_next_words(curt, dct):
        if distance[word] != distance[curt] - 1:
            continue
        path.append(word)
        self.dfs(word, target, distance, dct, path, results)
        path.pop()
```

这里寻找下一个变换单词的方法是建立 index，即，如果有一个单词 abc，分别去掉第 1,2,3 个字符之后，把 abc 这个单词分别扔进 %bc, a%c, ab% 这三个不同的 key 的 hash 里。hash 里的 key 是去掉一个字符之后的 pattern，value 是一个 set，保存满足这个 pattern 的所有单词。
