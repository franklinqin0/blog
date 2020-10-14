---
title: Shortest Palindrome
source: LeetCode
diff: hard
tags:
  - String
related:
  - implement-strstr
---

<img class="medium-zoom" src="/algo/shortest-palindrome.png" alt="https://leetcode.com/problems/shortest-palindrome">

## Solution (REDO in Python)

This problem can be solved in various ways: brute force, RK algorithm, and KMP algorithm. But in a real interview, the RK algo may be the easiest to implement.

This problem is actually `hard` if trying to implement w/ KMP.

### Brute Force

`isPalindrome` takes $O(n)$ time.

Complexity:

- Time: $O(n^2)$
- Space: $O(n)$

where `n` is the length of `s`.

```java
public Boolean isPalindrome(String s) {
    int front = 0, back = s.length() - 1;
    while (front < back) {
        if (s.charAt(front) != s.charAt(back))
            return false;
        front++;
        back--;
    }
    return true;
}

public String shortestPalindrome(String s) {
    int right = s.length();
    // decrease `right` if not palindrome
    while (!isPalindrome(s.substring(0,right))) {
        right--;
    }
    return new StringBuilder(s.substring(right)).reverse().toString() + s;
    }
```

### RK

Complexity:

- Time: $O(n)$
- Space: $O(n)$

where `n` is the length of `s`.

```java
public String shortestPalindrome(String s) {
    int power = 1;
    int base = 26;
    int mod = 1000007;
    int hash_s = 0, hash_r = 0;
    int pos = -1;
    int n = s.length();
    String rev = new StringBuilder(s).reverse().toString();

    for (int i=0; i<n; i++, power = (power * base) % mod) {
        // hash of s.substring(0, i+1)
        hash_s = (hash_s*base + (s.charAt(i)-'a'+1)) % mod;
        // hash of rev.substring(n-(i+1))
        hash_r = (hash_r + power*(s.charAt(i)-'a'+1)) % mod;
        // if two hashes equal and the strings match, then s.substring(0, i+1) is palindrome
        if (hash_s == hash_r  && s.substring(0, i+1).equals(rev.substring( n-i-1)))
            pos = i;
    }
    // return the non-palindrome part concatenated w/ s
    return rev.substring(0, n-pos-1) + s;
}
```

### KMP (REDO)

Complexity:

- Time: $O(n)$
- Space: $O(n)$

where `n` is the length of `s`.

```java
public String shortestPalindrome(String s) {
    // reverse of s
    String rev = new StringBuilder(s).reverse().toString();
    // concatenate s and reverse of s by "#"
    String con = s + "#" + rev;
    int[] lookup = new int[con.length()];
    // build KMP lookup table to record the longest length of prefix==suffix in substring
    // i is suffix boundary
    // j is prefix boundary
    for (int i=1; i<con.length(); i++) {
        // update prefix boundary to previous one
        int j = lookup[i-1];
        // move to last prefix boundary match
        while (j>0 && con.charAt(j) != con.charAt(i)) {
            j = lookup[j-1];
        }
        // if prefix boundary matches suffix boundary, increase prefix length by 1
        if (con.charAt(j) == con.charAt(i))
            lookup[i] = j + 1; // else lookup[i] == j == 0
    }
    // result is the non-palindrome chars in reversed `s` + w/ original `s`
    return rev.substring(0, s.length() - lookup[con.length()-1]) + s;
}
```
