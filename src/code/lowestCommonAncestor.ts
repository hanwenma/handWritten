/*
 题目描述： 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

示例 1:
输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1

输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。

示例 2:
输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
*/

export function lowestCommonAncestor(root, l, r) {
  function bfs(root) {
    if (!root || root === l || root === r) return root;

    // 向左子树去寻找p和q
    const left = bfs(root.left);
    // 向右子树去寻找p和q
    const right = bfs(root.right);

     // 如果左子树和右子树同时包含了p和q，那么这个结点一定是最近公共祖先
    if (left && right) return root;

    // 如果左子树和右子树其中一个包含了p或者q，则把对应的有效子树汇报上去，等待进一步的判断；否则返回空
    return left || right;
  }

  return bfs(root);
}

// 测试
const left = {
  val: "5",
  left: {
    val: "6",
  },
  right: {
    val: "2",
    left: {
      val: "7",
    },
    right: {
      val: "4",
    },
  },
};
const right = {
  val: "1",
  left: {
    val: "0",
  },
  right: {
    val: "8",
  },
};
const root = {
  val: "3",
  left,
  right,
};
console.log(lowestCommonAncestor(root, left, right));
