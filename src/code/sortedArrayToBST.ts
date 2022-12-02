/*
题目描述：将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例: 给定有序数组: [-10,-3,0,5,9],
一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
*/

export function TreeNode(this, val) {
  this.val = val;
  this.left = this.right = null;
}

export function sortedArrayToBST(nums: number[]) {
  if (nums.length === 0) return null;

  // root 结点是递归“提”起数组的结果
  const root = buildBST(0, nums.length - 1);

  // 定义二叉树构建函数，入参是子序列的索引范围
  function buildBST(low, high) {
    // 当 low > high 时，意味着当前范围的数字已经被递归处理完全了
    if (low > high) return null;

    const mid = Math.floor((low + high) / 2);
    
    // 将中间元素的值作为当前子树的根结点值
    const curr = new TreeNode(nums[mid]);

    // 递归构建左子树，范围二分为[low,mid)
    curr.left = buildBST(low, mid - 1);

    // 递归构建左子树，范围二分为为(mid,high]
    curr.right = buildBST(mid + 1, high);

    // 返回当前结点
    return curr;
  }

  return root;
}

// 测试
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
