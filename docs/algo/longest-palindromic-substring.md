---
title: Longest Palindromic Substring
source: LeetCode
diff: medium
tags:
  - String
  - DP
---

<img class="medium-zoom" src="/algo/longest-palindromic-substring.png" alt="https://leetcode.com/problems/longest-palindromic-substring">

Please don't confuse this problem w/ the [longest common substring problem](https://en.wikipedia.org/wiki/Longest_common_substring_problem) or [longest common subsequence problem](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem).

## Solution

???
https://leetcode.com/articles/longest-palindromic-substring/

### Brute Force

Complexity:

- time: $O(n^3)$
- space: $O(1)$

The `brute force` solution can be further optimized to `expand around center` by expanding one char at a time in left and right direction under odd and even cases.

```java
private boolean isPalindrome(String s) {
    int n = s.length();
    int start = 0, end = n-1;
    while(start < end) {
        if (s.charAt(start) != s.charAt(end))
            return false;
        start++;
        end--;
    }
    return true;
}

public String longestPalindrome(String s) {
    int palindromeLongestLength = 1;
    int n = s.length();
    int start = 0, end = 0;

    for (int i=0; i<n; i++) {
        for (int j=n; j>-1 && j-i>end-start; j--) {
            if (isPalindrome(s.substring(i,j))) {
                start = i;
                end = j;
            }
        }
    }
    return s.substring(start, end);
}
```

### DP

???

### Manacher's algorithm

Complexity:

- time: $O(n)$
- space: $O(n)$

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

    for (int i = 1; i<n-1; i++) {
        if (right > i) {
            int mirror = 2*center - i;
            table[i] = Math.min(table[mirror], right-i);
        } else
            table[i] = 0;

        while (new_s.charAt(i - table[i] - 1) == new_s.charAt(i + table[i] + 1))
            table[i]++;

        if (i + table[i] > right) {
            center = i;
            right = i + table[i];
        }

        if (table[i] > lengthLPS) {
            centerLPS = i;
            lengthLPS = table[i];
        }
    }

    int start = (centerLPS-lengthLPS)/2;
    return s.substring(start, start+lengthLPS);
}
```
