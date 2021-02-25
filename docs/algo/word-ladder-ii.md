---
title: Word Ladder
diff: hard
tags:
  - BFS
  - DFS
  - Implicit Graph
related:
  - sliding-puzzle-ii
  - word-ladder
---

<img class="medium-zoom" src="/algo/word-ladder-ii.png" alt="https://www.leetcode.com/problems/word-ladder-ii">

## Solution

### BFS & DFS

```py
class Solution:
    """
    @param: beginWord: a string
    @param:endWord: a string
    @param: dict: a set of string
    @return: a list of lists of string
    """

    def findLadders(self, beginWord,endWord, wordList):
            from collections import defaultdict
            wordList= set(wordList)
            #将endWord添加进wordList,防止结果为[]
            wordList.add(endWord)
            res = []
            # 记录单词下一步能转到的单词
            next_word_list= defaultdict(list)
            # 记录到beginWord距离
            distance = {}
            distance[beginWord] = 0

            # 暴力匹配,当前字符串修改一个字母后的新字符串存在于wordList中
            def next_word(word):
                ans = []
                for i in range(len(word)):
                           #97=ord('a')，123=ord('z')+1
                    for j in range(97, 123):
                        tmp = word[:i] + chr(j) + word[i + 1:]
                        if tmp != word and tmp in wordList:
                            ans.append(tmp)
                return ans
            # 求到beginWord的距离
            def bfs():
                q = collections.deque()
                q.append(beginWord)
                step = 0
                flag = False #标记是否找到结果
                while len(q) is not 0:
                    step += 1
                    n=len(q)
                    for i in range(n):
                        word=q[0]
                        q.popleft()
                        for nextword in next_word(word):
                            next_word_list[word].append(nextword)
                           #当下一跳是endWord时，就可以结束搜索
                            if nextword ==endWord:
                                flag = True
                            #如果没被添加过，则进行添加
                            if nextword not in distance:
                                distance[nextword] = step
                                q.append(nextword)
                    if flag:
                        break
            # 遍历所有从beginWord到endWord的路径
            def dfs(tmp, step):
                if tmp[-1] ==endWord:
                    res.append(tmp)
                    return
                for word in next_word_list[tmp[-1]]:
                    if distance[word] == step + 1:
                        dfs(tmp + [word], step + 1)
            #bfs搜beginWord--endWord的最短路径
            bfs()
            #dfs输出距离最短的路径
            dfs([beginWord], 0)
            return res
```
