/*
 题目描述：给定一个二叉树，判断它是否是高度平衡的二叉树。
本题中，一棵高度平衡二叉树定义为： 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

示例 1: 给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2: 给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。
*/

export function isBalanced(root) {
    // 高度差大于 1 设置为 false
    let flag = true;

    function dfs(root) {
        // root 不存在 或 高度差大于 1，就终止后续操作
        if (!root || !flag) return 0

        // 计算左子树高度
        const left = dfs(root.left);
        // 计算右子树高度
        const right = dfs(root.right);

        // 高度差大于 1
        if (Math.abs(left - right) > 1) {
            flag = false
            return 0
        }

        // 返回当前子树的高度
        return Math.max(left, right) + 1
    }

    // 递归入口
    dfs(root)

    return flag
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
            right: {
                val: "7",
                right: {
                    val: "8",
                },
            },
        },
    },
};

console.log(isBalanced(root));
