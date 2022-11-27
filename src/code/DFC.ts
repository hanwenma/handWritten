// 深度优先搜索 DFC

export function DFC(root, res: number[] = []) {
  if (!root) return root;

  // 选择一条路径，走到底
  res.push(root.val);

  DFC(root.left, res);
  DFC(root.right, res);

  return res;
}

// 测试
const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};

console.log(DFC(root));
