/*
想要删除某个结点，首先要找到这个结点。在定位结点后，我们需要考虑以下情况：

结点不存在，定位到了空结点。直接返回即可。
需要删除的目标结点没有左孩子也没有右孩子——它是一个叶子结点，删掉它不会对其它结点造成任何影响，直接删除即可。
需要删除的目标结点存在左子树，那么就去左子树里寻找小于目标结点值的最大结点，用这个结点覆盖掉目标结点
需要删除的目标结点存在右子树，那么就去右子树里寻找大于目标结点值的最小结点，用这个结点覆盖掉目标结点
需要删除的目标结点既有左子树、又有右子树，这时就有两种做法了：要么取左子树中值最大的结点，要么取右子树中取值最小的结点。两个结点中任取一个覆盖掉目标结点，都可以维持二叉搜索树的数据有序性
*/

function findMax(root) {
  if (root.right) {
    root = findMax(root.right);
  }
  return root;
}

function findMin(root) {
  if (root.left) {
    root = findMax(root.left);
  }
  return root;
}

export function deleteNode(root, n) {
  if (!root) return root;

  if (root.val > n) {
    // 当前值 > n ，往左子树中去查找
    root.left = deleteNode(root.left, n);
  } else if (root.val < n) {
    // 当前值 < n ，往右子树中去查找
    root.right = deleteNode(root.right, n);
  } else {
    // 找到当前节点
    if (!root.left && !root.right) {
      // 叶子结点直接删除
      root = null;
    } else if (root.left) {
      // 左节点存在，则查找其最大节点，用于替换当前节点
      const leftMax = findMax(root.left);
      root.val = leftMax.val; // 节点替换
      root.left = deleteNode(root.left, leftMax.val); // 删除节点
    } else {
      // 右节点存在，则查找其最小节点，用于替换当前节点
      const rightMin = findMin(root.right);
      root.val = rightMin.val; // 节点替换
      root.right = deleteNode(root.right, rightMin.val); // 删除节点
    }
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

console.log(deleteNode(root, 5));
