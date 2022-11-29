/*
题目描述：给定一个二叉树，返回它的后序遍历序列。

示例: 输入: [1,null,2,3]

1   
 \   
  2   
 /  
3 
输出: [3,2,1]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？
*/

export function postorderTraversal(root) {
  if (root == null) return [];

  // 定义结果集
  const res: number[] = [];

  // 定义栈
  const stack: any[] = [];
  // 初始化栈
  stack.push(root);

  // 迭代栈
  while (stack.length) {
    // 将当前栈顶的元素取出
    const top = stack.pop();
    res.unshift(top.val);

    // 若存在左子树，则左子树入栈
    if (top.left) stack.push(top.left);
    
    // 若存在右子树，则右子树入栈
    if (top.right) stack.push(top.right);
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

console.log(postorderTraversal(root));
