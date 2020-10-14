## Solution

### Wrong One

```py
def wordBreak(self, s: str, wordDict: List[str]) -> bool:
    def dfs(s, start_idx, dct):
        if start_idx == len(s):
            return True
        for word in dct:
            n = len(word)
            if start_idx + n > len(s):
                continue
            if s[start_idx: start_idx + n] != word:
                continue
            return dfs(s, start_idx + n, dct)
        return False
    return dfs(s, 0, wordDict)
```
