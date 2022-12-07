/*
题目描述：给定一个二叉树，判断其是否是一个有效的二叉搜索树。
假设一个二叉搜索树具有如下特征：
节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。

示例 1:
输入:

    2
   / \
  1   3
输出: true

示例 2:
输入:

    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
根节点的值为 5 ，但是其右子节点值为 4 。
*/

export function isValidBST(root) {
  function dfs(root) {
    if (!root) return true;

    if (root.left && root.val < root.left.val) return false;
    if (root.right && root.val > root.right.val) return false;

    return dfs(root.left) && dfs(root.right);
  }

  return dfs(root);
}

// 测试
const root = {
  val: "3",
  left: {
    val: "2",
    left: {
      val: "1",
    },
  },
  right: {
    val: "5",
    left: {
      val: "4",
    },
    right: {
      val: "6",
    },
  },
};

console.log(isValidBST(root));
