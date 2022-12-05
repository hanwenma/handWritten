/*
题目描述：给你一棵二叉搜索树，请你返回一棵平衡后的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。
如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是平衡的。
如果有多种构造方法，请你返回任意一种。

输入：root = [1,null,2,null,3,null,4,null,null]
输出：[2,1,3,null,null,null,4]

解释：这不是唯一的正确答案，[3,1,4,null,2,null,null] 也是一个可行的构造方案。

提示：
树节点的数目在 1 到 10^4 之间。 树节点的值互不相同，且在 1 到 10^5 之间。
*/
function TreeNode(this, val) {
    this.val = val;
    this.left = this.right = null;
}

export function balanceBST(root) {

    const nums: any[] = [];
    // 将二叉搜索树通【中序遍历】变成有序数组
    function inOreder(root) {
        if (!root) return

        inOreder(root.left)
        nums.push(root)
        inOreder(root.right)
    }

    // 执行中序遍历
    inOreder(root)

    // 构建平衡二叉搜索树
    function buildAVL(low, hight) {
        // 若 low > high，则越界，说明当前索引范围对应的子树已经构建完毕
        if (low > hight) {
            return null
        }

        // 取中间索引
        const mid = Math.floor(low + (hight - low) / 2);
        // 构建当前节点
        const curr = new TreeNode(nums[mid].val);
        // 构建左子树
        curr.left = buildAVL(low, mid - 1);
        // 构建右子树
        curr.right = buildAVL(mid + 1, hight);

        return curr;
    }

    return buildAVL(0, nums.length - 1);
}

// 测试
// 测试
const root = {
    val: "1",
    right: {
        val: "2",
        right: {
            val: "3",
            right: {
                val: "4",
                right: {
                    val: "5",
                },
            },
        },
    },
};

console.log(balanceBST(root));