// 广度优先搜索 BFC

export function BFC(root) {
  if (!root) return root;

  const queue = [root];
  const res: number[] = [];

  while (queue.length) {
    // 获取队头元素
    const top = queue.shift();

    // 广度：即通过当前节点能够直接访问到的直接子节点

    if (top.left) queue.push(top.left);
    if (top.right) queue.push(top.right);

    res.push(top.val);
  }

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

console.log(BFC(root));
