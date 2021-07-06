---
title: LRU Cache
diff: medium
tags:
  - Design
related:
  - two-sum
---

<img class="medium-zoom" src="/algo/lru-cache.png" alt="https://leetcode.com/problems/lru-cache">

## Driver Code

```py
obj = LRUCache(capacity)
param_1 = obj.get(key)
obj.put(key,value)
```

## Solution

### Built-in OrderDict

This is basically cheating and not allowed in an interview.

```py
class LRUCache(collections.OrderedDict):
    def __init__(self, capacity: int):
        super().__init__()
        self.capacity = capacity

    def get(self, key: int) -> int:
        if key not in self:
            return -1
        self.move_to_end(key)
        return self[key]

    def put(self, key: int, value: int) -> None:
        if key in self:
            self.move_to_end(key)
        self[key] = value
        if len(self) > self.capacity:
            self.popitem(last=False)
```

### HashMap & Doubly Linked List

```py
class DLinkedNode:
    def __init__(self, key=0, value=0):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache():
    def __init__(self, capacity: int):
        self.cache = dict()
        # use dummy head and tail nodes
        self.head = DLinkedNode()
        self.tail = DLinkedNode()
        self.head.next = self.tail
        self.tail.prev = self.head
        self.capacity = capacity
        self.size = 0

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        # if key exists, locate using HashMap, then move to head
        node = self.cache[key]
        self.moveToHead(node)
        return node.value

    def put(self, key: int, value: int) -> None:
        if key not in self.cache:
            # if key doesn't exist, create a new node
            node = DLinkedNode(key=key, value=value)
            # add to HashMap
            self.cache[key] = node
            # add to head of DDL
            self.addToHead(node)
            self.size += 1
            if self.size > self.capacity:
                # if exceeds capacity, delete tail node of DDL
                removed = self.removeTail()
                # delete corresponding item in HashMap
                self.cache.pop(removed.key)
                self.size -= 1
        else:
            # if `key` exists, locate using HashMap, modify `value` and move to `head`
            node = self.cache[key]
            node.value = value
            self.moveToHead(node)

    def addToHead(self, node):
        node.prev = self.head
        node.next = self.head.next
        self.head.next.prev = node
        self.head.next = node

    def removeNode(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def moveToHead(self, node):
        self.removeNode(node)
        self.addToHead(node)

    def removeTail(self):
        node = self.tail.prev
        self.removeNode(node)
        return node
```
