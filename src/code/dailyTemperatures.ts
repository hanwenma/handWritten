/*
题目描述: 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

【暴力解法】双重循环，重复比较次数多 O(n^2)
【栈】解决重复比较问题 O(n)
*/

export function dailyTemperatures(tem: number[]) {
  const stack: number[] = [];
  const len = tem.length;

  // 初始化结果集
  const res = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    // 栈中有值就进行比较
    while (stack.length && tem[stack[stack.length - 1]] < tem[i]) {
      const top = stack.pop()!;
      res[top] = i - top;
    }

    // 入栈
    stack.push(i);
  }

  return res;
}

// 测试
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(dailyTemperatures(temperatures));
