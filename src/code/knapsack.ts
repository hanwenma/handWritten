/*
0-1 背包问题
有 n 件物品，物品体积用一个名为 w 的数组存起来，物品的价值用一个名为 value 的数组存起来；每件物品的体积用 w[i] 来表示，每件物品的价值用 value[i] 来表示。
现在有一个容量为 c 的背包，问你如何选取物品放入背包，才能使得背包内的物品总价值最大？

注意：每种物品都只有1件
*/

// n 物品个数，c 背包容量，w 物品重量，value 价值数组
export function knapsack(n, c, w, value) {
  // dp是动态规划的状态保存数组
  const dp = new Array(c + 1).fill(0);

  // res 用来记录所有组合方案中的最大值
  let res = -Infinity;

  for (let i = 1; i <= n; i++) {
    for (let v = c; v >= w[i]; v--) {
      // 写出状态转移方程
      dp[v] = Math.max(dp[v], dp[v - w[i]] + value[i]);

      // 即时更新最大值
      if (dp[v] > res) {
        res = dp[v];
      }
    }
  }
  

  return res;
}

console.log(knapsack(3, 5, [1, 2, 3], [3, 2, 1]));
