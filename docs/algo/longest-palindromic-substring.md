---
title: Longest Palindromic Substring
diff: medium
tags:
  - String
  - DP
---

<img class="medium-zoom" src="/algo/longest-palindromic-substring.png" alt="https://leetcode.com/problems/longest-palindromic-substring">

Please don't confuse this problem w/ the [longest common substring problem](https://en.wikipedia.org/wiki/Longest_common_substring_problem) or [longest common subsequence problem](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem).

## Solution

Let $n$ be the length of string `s`.

### Brute Force

::: theorem Complexity
time: $O(n^3)$  
space: $O(1)$
:::

The `brute force` solution can be further optimized to `expand around center` by expanding one char at a time in left and right direction under odd and even cases.

```py
def longestPalindrome(self, s: str) -> str:
    if not s: return ""
    res = s[0]
    for i in range(len(s)):
        for j in range(i + 1, len(s)+1):
            if self.isPalindrome(s[i:j]) and j - i + 1 > len(res):
                res = s[i:j]
    return res

def isPalindrome(self, s: str) -> bool:
    i = 0
    j = len(s) - 1
    while i<=j:
        if s[i] == s[j]:
            i += 1
            j -= 1
        else:
            return False
    return True
```

### DP

Let `dp[i][j]` be true if `s[i:j+1]` is a palindrome and false otherwise.

The recurrence relation is:  
`dp[i][j] = s[i] == s[j] and dp[i+1][j-1]`

The base cases are:  
`dp[i][i] = True`  
`dp[i][i+1] = s[i] == s[i+1]`

Both the recurrence relation and base cases can be combined into `dp[i][j] = s[i] == s[j] and (j - i < 3 or dp[i+1][j-1])`.

::: theorem Complexity
time: $O(n^2)$  
space: $O(n^2)$
:::

```py
def longestPalindrome(self, s: str) -> str:
    n = len(s)
    dp = [[False for _ in range(n)] for _ in range(n)]
    res = ""
    for i in reversed(range(n)):
        for j in range(i, n):
            dp[i][j] = s[i] == s[j] and (j - i < 3 or dp[i+1][j-1])
            if dp[i][j] and j - i + 1 > len(res):
                res = s[i:j+1]
    return res
```

### Expand around Center

A palindrome mirrors around its center. The center for odd-length palindrome is the central character. The center for even-length palindrome is between the central 2 characters. There are $2n - 1$ such centers and expanding around each center takes linear time.

::: theorem Complexity
time: $O(n^2)$  
space: $O(1)$
:::

```py
def longestPalindrome(self, s: str) -> str:
    n = len(s)
    res = ""
    for i in range(n):
        # odd case
        oddMax = self.expandAroundCenter(s, i, i)
        if len(oddMax) > len(res):
            res = oddMax
        # even case
        evenMax = self.expandAroundCenter(s, i, i+1)
        if len(evenMax) > len(res):
            res = evenMax
    return res

def expandAroundCenter(self, s: str, l, r):
    while l >= 0 and r < len(s) and s[l] == s[r]:
        l -= 1
        r += 1
    return s[l+1:r]
```

### Manacher's algorithm (REDO in Python)

This algorithm basically inclues some smart improvements on [Expand around Center](#expand-around-center). Should be quite straightforward after watching [this video](https://youtu.be/nbTSfrEfo6M).

As each element is traversed at most twice, the time complexity is linear.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$
:::

```java
public String longestPalindrome(String s) {
    // preprocessing
    StringBuilder sb = new StringBuilder("^");
    int centerLPS = 0, lengthLPS = -1;

    // preprocessing
    for (int i=0; i<s.length(); i++)
        // add "#" inbetween chars
        sb = sb.append("#" + s.charAt(i));
    sb = sb.append("#$");
    String new_s = sb.toString();

    // Manacher's algorithm
    int n = new_s.length();
    int[] table = new int[n];
    int center = 0, right = 0;

    for (int i = 1; i < n - 1; i++) {
        // w/i right boundary, can save time by copying mirror length
        if (right > i) {
            int mirror = 2 * center - i;
            table[i] = Math.min(table[mirror], right - i);
        } else
            table[i] = 0;

        // expand around `i` as much as possible
        while (new_s.charAt(i - table[i] - 1) == new_s.charAt(i + table[i] + 1))
            table[i]++;

        // update the center & right
        if (i + table[i] > right) {
            center = i;
            right = i + table[i];
        }

        // update the best result so far
        if (table[i] > lengthLPS) {
            centerLPS = i;
            lengthLPS = table[i];
        }
    }

    int start = (centerLPS-lengthLPS)/2;
    return s.substring(start, start+lengthLPS);
}
```
