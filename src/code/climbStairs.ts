/*
题目描述：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。

1 阶 + 1 阶
2 阶
示例 2：
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。

1 阶 + 1 阶 + 1 阶
1 阶 + 2 阶
2 阶 + 1 阶


核心：fn(n) = f(n - 1) + f(n - 2)
*/

// 记忆化搜索【100 不爆栈，10000 爆栈】
const f: number[] = [];
export function climbStairsWithMemory(n) {
  if (n === 1 || n === 2) return n;

  if (f[n] !== void 0) return f[n];

  f[n] = climbStairsWithMemory(n - 1) + climbStairsWithMemory(n - 2);

  return f[n];
}

// 测试
// console.time();
// console.log(climbStairsWithMemory(1000));
// console.timeEnd();

// 动态规划

export function climbStairsWithDp(n) {
  // 初始化已知值
  const dp = [1, 2];

  // 动态更新每一层楼梯对应的结果
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// 测试
console.time();
console.log(climbStairsWithDp(1000));
console.timeEnd();