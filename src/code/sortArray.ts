const arr = [3, 5, 4, 2, 6, 1];

/**
 *
 * 【冒泡排序】
 * 时间复杂度：O(n) —— O(n^2)
 *
 */

/*
  【冒泡排序】：每次将最大值移动到数组的最后
  时间复杂度：O(n^2)
*/
export function bubbleSort(arr) {
  const len = arr.length;

  // 方法一：将最大值放到数组末尾
  // 外层循环用于从头到尾进行遍历操作
  for (let i = 0; i < len; i++) {
    // 内层循环用于重复对比操作+交换
    for (let j = 0; j < len - 1; j++) {
      // 若相邻元素前面的数比后面的大，则交换
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  // 方法二：将最小值放到数组头部
  // for (let i = 0; i < len; i++) {
  //     for (let j = i + 1; j < len; j++) {
  //         if (arr[i] > arr[j]) {
  //             [arr[i], arr[j]] = [arr[j], arr[i]]
  //         }
  //     }
  // }

  return arr;
}

// console.time()
// console.log("bubbleSort = ", bubbleSort(arr.slice()));
// console.timeEnd()

/*
 【冒泡排序】优化版本：
   - 因为每轮遍历后，当前遍历的最大值已经移动到数组的末尾
     即第 n 次遍历时，获取到的则是第 n 大的元素
     因此，每次轮遍历完成时，下一次的遍历不需要到数组的末尾
*/
export function betterBubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    // len - i 避免遍历到已经有序的部分
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// console.time()
// console.log("betterBubbleSort = ", betterBubbleSort(arr.slice()));
// console.timeEnd()

/*
 【冒泡排序】顶配版本：
    冒泡排序时间复杂度在最好情况下是 O(n)，前提是 数组本身是有序
*/
export function bestBubbleSort(arr) {
  const len = arr.length;

  let flag = false;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }

    // flag 的值没有发生更改，意味着数组是有序的，需要进行额外排序
    if (!flag) return arr;
  }

  return arr;
}

// console.time()
// console.log("bestBubbleSort = ", bestBubbleSort(arr.slice()));
// console.timeEnd()

/**
 *
 * 【选择排序】核心就是每次遍历确定最小值索引，每轮遍历结束把最小值放到数组头部
 * 时间复杂度：O(n^2)
 *
 */
export function selectSort(arr) {
  const len = arr.length;

  let minIdx; // 定义最小值索引

  // i 是排序期间的起点
  for (let i = 0; i < len; i++) {
    // 初始化 minIndex 为当前区间第一个元素
    minIdx = i;

    // i、j 分别定义当前区间的 上下界，i 是 左边界，j 是 右边界
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    // 若当前 minIdx 和 i 不相等
    // 则表明当前已经找到新的最小的元素，则进行交换
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }

  return arr;
}

// console.time()
// console.log("selectSort = ", selectSort(arr.slice()));
// console.timeEnd()

/**
 *
 * 【插入排序】
 * 时间复杂度：O(n^2)
 *
 */

export function insertSort(arr) {
  const len = arr.length;

  // temp 用来保存当前需要插入的元素
  let temp;

  // i = 1 即默认第一位元素是有序的
  for (let i = 1; i < len; i++) {
    // j 用于帮助 temp 寻找自己应该有的定位
    let j = i;
    temp = arr[i];

    // j 此时为有序区域的 右边界，因此 j - 1 就是有序区域中的内容
    // 判断 j 前面一个元素是否比 temp 大
    while (arr[j - 1] > temp) {
      // 如果是，则将 j 前面的一个元素后移一位，为 temp 让出位置
      arr[j] = arr[j - 1];
      j--;
    }

    // 循环让位，最后得到的 j 就是 temp 的正确索引
    arr[j] = temp;
  }

  return arr;
}
// console.time()
// console.log("insertSort = ", insertSort(arr.slice()));
// console.timeEnd()

/**
 *
 * 【归并排序】
 * 时间复杂度：O(nlog(n))
 * 核心：分割、合并
 */
export function mergeSort(arr) {
  const len = arr.length;

  // 定义递归边界
  if (len <= 1) {
    return arr;
  }

  // 获取中间元素的索引值
  const midIdx = Math.floor(len / 2);

  // 得到左右两个子数组，即进行了 分割
  const left = mergeSort(arr.slice(0, midIdx));
  const right = mergeSort(arr.slice(midIdx, len));

  // 将左右两个子数组进行有序的合并
  return mergeArr(left, right);
}

// 通过双针指针合并两个有序数组
function mergeArr(arr1, arr2) {
  const len1 = arr1.length;
  const len2 = arr2.length;

  // 定义 l r 指针，分别指向 arr1 arr2 中的元素
  let i = 0,
    j = 0;

  // 定义结果集
  const res: any[] = [];

  // 循环合并数组，直到至少一个数组被遍历完
  while (i < len1 && j < len2) {
    if (arr1[i] > arr2[j]) {
      res.push(arr2[j]);
      j++;
    } else {
      res.push(arr1[i]);
      i++;
    }
  }

  // 判断具体是哪个数组被遍历完，将另一个数组直接进行合并即可
  if (i < len1) {
    return res.concat(arr1.slice(i));
  } else {
    return res.concat(arr2.slice(j));
  }
}
// console.time();
// console.log("mergeSort = ", mergeSort(arr.slice()));
// console.timeEnd();

/**
 *
 * 【快速排序】
 * 时间复杂度：O(nlog(n)) —— O(n^2)
 * 核心：
 *      - 找基准值
 *      - 比基准值小的放 左边
 *      - 比基准值大的放 右边
 */
export function quickSort(arr, left = 0, right = arr.length - 1) {
  // 递归边界
  if (arr.length > 1) {
    // lineIndex 表示下一次划分左右子数组的索引位
    const lineIndex = partition(arr, left, right);

    // 如果左边子数组的长度不小于 1，则递归快排这个子数组
    if (left < lineIndex - 1) {
      // 左子数组以 lineIndex-1 为右边界
      quickSort(arr, left, lineIndex - 1);
    }

    // 如果右边子数组的长度不小于1，则递归快排这个子数组
    if (right > lineIndex) {
      // 右子数组以 lineIndex 为左边界
      quickSort(arr, lineIndex, right);
    }
  }

  return arr;
}

// 以基准值为轴心，划分左右子数组的过程
function partition(arr, left, right) {
  // 基准值默认取中间位置的元素
  let pivotValue = arr[Math.floor(left + (right - left) / 2)];

  // 初始化左右指针
  let i = left;
  let j = right;

  // 当左右指针不越界时，循环执行以下逻辑
  while (i <= j) {
    // 左指针所指元素若小于基准值，则右移左指针
    while (arr[i] < pivotValue) {
      i++;
    }

    // 右指针所指元素大于基准值，则左移右指针
    while (arr[j] > pivotValue) {
      j--;
    }

    // 若 i<=j，则意味着基准值【左边】存在较大元素 或【右边】存在较小元素
    // 交换两个元素确保左右两侧有序
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  // 返回左指针索引作为下一次划分左右子数组的依据
  return i;
}

// 快速排序中使用 swap 的地方比较多，我们提取成一个独立的函数
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
