/*
题目描述：给定一个二叉树，返回它的中序遍历序列。

示例: 输入: [1,null,2,3]

1   
 \   
  2   
 /  
3 
输出: [3,1,2]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？
*/

export function mesoorderTraversal(root) {
  if (root == null) return [];

  // 定义结果集
  const res: number[] = [];

  // 定义栈
  const stack: any[] = [];

  // 定义游标
  let curr = root;

  // 迭代栈
  while (curr || stack.length) {

    // 当游标存在，把当前节点对应的所有左子树入栈
    while(curr){
      stack.push(curr);
      curr = curr.left;
    }

    // 将当前栈顶的元素取出，此时是左子树的最深层的左叶子结点
    const top = stack.pop();

    res.push(top.val);

    // 若存在右子树，则将游标指向右子树
    if (top.right) curr = top.right;

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

console.log(mesoorderTraversal(root));
