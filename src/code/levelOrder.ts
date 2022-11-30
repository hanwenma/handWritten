/*
题目描述：给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例： 二叉树：[3,9,20,null,null,15,7],

  3
 / \
9  20
  /  \
 15   7

返回其层次遍历结果：
[
    [3],
    [9,20],
    [15,7]
]
*/

export function levelOrder(root) {
  // 定义队列
  const queue: any[] = [root];
  // 定义结果集
  const res: any[] = [];

  // 当前层序集
  const curr: any[] = [];

  while (queue.length) {
    // 取出队头节点
    const top = queue.shift();
    // 记录队头节点值
    curr.push(top.val);

    // 当队列为空，则意味着当前层序已遍历完成
    if(queue.length === 0){
        res.push(curr.slice())
        curr.length = 0;
    }

    // 左右节点分别入队
    if(top.left) queue.push(top.left)
    if(top.right) queue.push(top.right)
  }

  return res;
}

// 测试
const root = {
  val: "3",
  left: {
    val: "9",
  },
  right: {
    val: "20",
    left: {
      val: "15",
    },
    right: {
      val: "7",
    },
  },
};

console.log(levelOrder(root));
