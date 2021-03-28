---
title: Longest Increasing Subsequence
diff: medium
tags:
  - DP
  - Greedy
  - Binary Search
---

<img class="medium-zoom" src="/algo/longest-increasing-subsequence.png" alt="https://leetcode.com/problems/longest-increasing-subsequence">

## Solution

Let $n$ be the length of the array.

<!-- REDO: ### Brute Force -->

## Follow Up 1

> Could you come up with the $O(n^2)$ solution?

### DP

Let `dp[i]` be the length of longest increasing subsequence ending with `num[i]`, then the recurrence relation is:

$$dp[i] = \max(dp[j]) + 1 \qquad \text{where } 0 \leq j < i \text{ and } num[j]<num[i]$$

That is, add `nums[i]` after the LIS in $dp[0 \ldots i-1]$.

::: theorem Complexity
time: $O(n^2)$  
space: $O(n)$
:::

```py
def lengthOfLIS(self, nums: List[int]) -> int:
    n = len(nums)
    dp = [1 for _ in range(n)]

    for i in range(1,n):
        for j in range(i):
            if nums[i] > nums[j] and dp[i] < dp[j]+1:
                dp[i] = dp[j]+1

    return max(dp)
```

## Follow Up 2

> Could you improve it to $O(n \log n)$ time complexity?

### Greedy Algorithm & Binary Search

::: theorem Complexity
time: $O(n \log n)$  
space: $O(n)$
:::

```py
def lengthOfLIS(self, nums: List[int]) -> int:
    gd = []

    for num in nums:
        if not gd or num > gd[-1]:
            gd.append(num)
        else:
            left, right = 0, len(gd)-1
            pos = right
            while left <= right:
                mid = (left + right)//2
                if gd[mid] >= num:
                    pos = mid
                    right = mid - 1
                else:
                    left = mid + 1
            gd[pos] = num

    return len(gd)
```

<!--
考虑一个简单的贪心，如果我们要使上升子序列尽可能的长，则我们需要让序列上升得尽可能慢，因此我们希望每次在上升子序列最后加上的那个数尽可能的小。

基于上面的贪心思路，我们维护一个数组 d[i]d[i] ，表示长度为 ii 的最长上升子序列的末尾元素的最小值，用 \textit{len}len 记录目前最长上升子序列的长度，起始时 lenlen 为 11，d[1] = \textit{nums}[0]d[1]=nums[0]。

同时我们可以注意到 d[i]d[i] 是关于 ii 单调递增的。因为如果 d[j] \geq d[i]d[j]≥d[i] 且 j < ij<i，我们考虑从长度为 ii 的最长上升子序列的末尾删除 i-ji−j 个元素，那么这个序列长度变为 jj ，且第 jj 个元素 xx（末尾元素）必然小于 d[i]d[i]，也就小于 d[j]d[j]。那么我们就找到了一个长度为 jj 的最长上升子序列，并且末尾元素比 d[j]d[j] 小，从而产生了矛盾。因此数组 dd 的单调性得证。

我们依次遍历数组 \textit{nums}nums 中的每个元素，并更新数组 dd 和 lenlen 的值。如果 \textit{nums}[i] > d[\textit{len}]nums[i]>d[len] 则更新 len = len + 1len=len+1，否则在 d[1 \ldots len]d[1…len]中找满足 d[i - 1] < \textit{nums}[j] < d[i]d[i−1]<nums[j]<d[i] 的下标 ii，并更新 d[i] = \textit{nums}[j]d[i]=nums[j]。

根据 dd 数组的单调性，我们可以使用二分查找寻找下标 ii，优化时间复杂度。

最后整个算法流程为：

设当前已求出的最长上升子序列的长度为 \textit{len}len（初始时为 11），从前往后遍历数组 \textit{nums}nums，在遍历到 \textit{nums}[i]nums[i] 时：

如果 \textit{nums}[i] > d[\textit{len}]nums[i]>d[len] ，则直接加入到 dd 数组末尾，并更新 \textit{len} = \textit{len} + 1len=len+1；

否则，在 dd 数组中二分查找，找到第一个比 \textit{nums}[i]nums[i] 小的数 d[k]d[k] ，并更新 d[k + 1] = \textit{nums}[i]d[k+1]=nums[i]。

---

无序列表最关键的一句在于： 数组 d[i]表示长度为 i 的最长上升子序列的末尾元素的最小值，即在数组 1,2,3,4,5,6 中长度为 3 的上升子序列可以为 1,2,3 也可以为 2,3,4 等等但是 d[3]=3，即子序列末尾元素最小为 3。

无序列表解释清了数组 d 的含义之后，我们接着需要证明数组 d 具有单调性，即证明 i<j 时，d[i]<d[j]，使用反证法，假设存在 k<j 时，d[k]>d[j]，但在长度为 j，末尾元素为 d[j]的子序列 A 中，将后 j-i 个元素减掉，可以得到一个长度为 i 的子序列 B，其末尾元素 t1 必然小于 d[j]（因为在子序列 A 中，t1 的位置上在 d[j]的后面），而我们假设数组 d 必须符合表示长度为 i 的最长上升子序列的末尾元素的最小值，此时长度为 i 的子序列的末尾元素 t1<d[j]<d[k]，即 t1<d[k]，所以 d[k]不是最小的，与题设相矛盾，因此可以证明其单调性

无序列表证明单调性有两个好处：1.可以使用二分法；2.数组 d 的长度即为最长子序列的长度； -->
