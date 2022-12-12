/*
题目描述：给出一个区间的集合，请合并所有重叠的区间。

示例 1:
输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
*/

export function mergeSection(intervals: number[][]) {
  // 定义结果数组
  const res: number[][] = [];
  // 缓存区间个数
  const len = intervals.length;

  // 处理区间的边界情况
  if (!intervals || !len) {
    return res;
  }

  // 将所有区间按照第一个元素大小排序
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });

  // 将第一个区间（起始元素最小的区间）推入结果数组（初始化）
  res.push(intervals[0]);

  // 按照顺序，逐个遍历所有区间
  for (let i = 1; i < len; i++) {
    // 取结果数组中的最后一个元素，作为当前对比的参考
    const prev = res[res.length - 1];

    // 若满足交错关系（前一个的尾部 >= 下一个的头部）
    if (prev[1] >= intervals[i][0]) {
      prev[1] = Math.max(prev[1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
}

// 测试
const nums = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeSection(nums));
