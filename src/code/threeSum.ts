export function threeSum(nunms: number[], target: number = 0) {
  const len = nunms.length;
  const res: number[][] = [];

  if (len < 3) return res;

  // 先排序，方便使用双指针
  nunms.sort((a, b) => a - b);

  let i = 0, l, r;
  const cash = {};

  while (i < r) {
    // 初始化双指针
    l = i + 1,
    r = len - 1;

    while (l < r) {
      const val = nunms[i] + nunms[l] + nunms[r];

      // 计算结果大于目标值，证明右指针对应的值过大，需要往左移动
      if (val > target) {
        r--;
      } else if (val < target) {
        // 计算结果小于目标值，证明左指针对应的值过小，需要往右移动
        l++;
      } else {
        const temp = [nunms[i], nunms[l], nunms[r]];
        const key = temp.join("_");
        if (cash[key]) break;

        cash[key] = true;
        res.push(temp);
      }
    }

    i++;
  }

  return res;
}

// 测试
const nums = [-1, 0, 1, 2, -1, -4, 0, 0, 0, 0, 0];
console.log(threeSum(nums));
