---
title: Robot Bounded In Circle
diff: easy
tags:
  - Math
  - String
---

<img class="medium-zoom" src="/algo/robot-bounded-in-circle.png" alt="https://leetcode.com/problems/robot-bounded-in-circle">


## Solution

```py
class Solution(object):
    def __init__(self):
        self.pos = [0, 0]
        self.dir_idx = 0
        self.directions = ["N", "W", "S", "E"]
        self.dir = "N"

    def update_dir(self, ins):
        if ins == "L":
            self.dir_idx += 1
        elif ins == "R":
            self.dir_idx -= 1
        self.dir_idx %= 4
        self.dir = self.directions[self.dir_idx]

    def update_pos(self):
        if self.dir == "N":
            self.pos[1] += 1
        elif self.dir == "S":
            self.pos[1] -= 1
        elif self.dir == "W":
            self.pos[0] -= 1
        elif self.dir == "E":
            self.pos[0] += 1

    def execute_instructions(self, instructions):
        for ins in instructions:
            if ins == "G":
                self.update_pos()
            elif ins == "L" or ins == "R":
                self.update_dir(ins)
        
    
    def isRobotBounded(self, instructions):
        """
        :type instructions: str
        :rtype: bool
        """
        # either robot changes direction (not stay pointing north), or it doesn't move
        self.execute_instructions(instructions)

        if self.pos == [0, 0] or self.dir != "N":
            return True
        return False
```