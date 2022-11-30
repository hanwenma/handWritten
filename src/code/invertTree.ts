/*
题目描述：翻转一棵二叉树。

示例：
输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

export function invertTree(root) {
  // 定义队列
  const queue: any[] = [root];

  while (queue.length) {
    const top = queue.shift();

    // 左右节点交换
    const left = top.left;
    top.left = top.right;
    top.right = left;

    // 左右节点入队
    if (top.left) queue.push(top.left);
    if (top.right) queue.push(top.right);
  }

  return root;
}

// 测试
const root = {
  val: "4",
  left: {
    val: "2",
    left: {
      val: "1",
    },
    right: {
      val: "3",
    },
  },
  right: {
    val: "7",
    left: {
      val: "6",
    },
    right: {
      val: "9",
    },
  },
};

console.log(invertTree(root));
