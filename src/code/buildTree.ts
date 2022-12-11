/*
题目描述：根据一棵树的前序遍历与中序遍历构造二叉树。

注意: 你可以假设树中没有重复的元素。
例如，给出
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
*/

function TreeNoe(this, val: number) {
  this.val = val;
  this.left = this.right = null;
}

export function buildTree(preorder: number[], inorder: number[]) {
  const len = preorder.length;

  function build(preL, preR, inL, inR) {
    // 递归边界
    if (preL > preR) return null;

    // 初始化当前节点
    const root = new TreeNoe(preorder[preL]);

    // 获取当前节点在中序遍历中的索引
    const index = inorder.indexOf(preorder[preL]);

    // 计算当前节点 左节点 的个数
    const leftNum = index - inL;

    // 构造当前节点的 左/右子节点
    root.left = build(preL + 1, preL + leftNum, inL, index - 1);
    root.right = build(preL + leftNum + 1, preR, index + 1, inR);

    return root;
  }

  return build(0, len - 1, 0, len - 1);
}

// 测试
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
