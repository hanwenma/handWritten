/*
题目描述：给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:
输入: [10,9,2,5,3,7,101,18]
输出: 4
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。

说明:
可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。 你算法的时间复杂度应该为 O(n^2) 。
进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
*/

export function lengthOfLIS(arr: number[]) {
  const len = arr.length;
  if (len === 0) return len;

  // 初始化 dp 数组
  const dp = new Array(len).fill(1);
  // 定义最长路径
  let max = 1;

  // 从第二个元素开始比较，因为第一个元素之前没有其他元素可以进行比较了
  for (let i = 1; i < len; i++) {
    // 将第 i 个元素 与 前 i 个元素进行对比，如果都比第 i 项少，则符合递增的特征
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    // 更新最大值
    if(max < dp[i]) max = dp[i];
  }

  return max;
}

// 测试
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
