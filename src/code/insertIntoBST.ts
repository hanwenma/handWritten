/*

二叉搜索树：左子树数据域 <= 根节点数据域 <= 右子树数据域

【查找数据域为某一特定值的结点】

假设这个目标结点的数据域值为 n，我们借助二叉搜索树数据域的有序性，可以有以下查找思路：

递归遍历二叉树，若当前遍历到的结点为空，就意味着没找到目标结点，直接返回。
若当前遍历到的结点对应的数据域值刚好等于n，则查找成功，返回。

若当前遍历到的结点对应的数据域值大于目标值n，则应该在左子树里进一步查找，设置下一步的遍历范围为 root.left 后，继续递归。

若当前遍历到的结点对应的数据域值小于目标值n，则应该在右子树里进一步查找，设置下一步的遍历范围为 root.right 后，继续递归。
*/

export function insertIntoBST(root, node) {
  if (!root) return node;

  // 根节点数据域 > 目标数据域，则需要往左子树上查找
  if (root.val > node.val) {
    root.left = insertIntoBST(root.left, node);
  } else {
    // 根节点数据域 >= 目标数据域，则需要往左子树上查找
    root.right = insertIntoBST(root.right, node);
  }

  return root;
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

console.log(insertIntoBST(root, { val: "2" }));
