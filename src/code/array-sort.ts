/**
 * =========== 冒泡排序 ===========
 * @param arr
 * @returns 时间复杂度：O(n^2)
 *
 * 1. 比较两个数，把较大的数放在后面
 * 2. 每次比完一轮后，再从头开始比，最后得到排好序的数组（可能存在多次交换）
 */
export function bubbleSort(arr: any[]) {
  console.log("初始数据 = ", arr);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        console.log(`第 ${i + 1} 次排序 = `, arr);
      }
    }
  }
}

/**
 * =========== 选择排序排序 ===========
 * @param arr
 * @returns 时间复杂度：O(n^2)
 * 1. 使用变量保留最小值
 * 2. 只在每一轮的最后一次，交换一次或者不交换（最小值已经在属于它的位置上了）
 */
export function selectSort(arr: any[]) {
  console.log("初始数据 = ", arr);

  let minIdx;
  for (let i = 0; i < arr.length; i++) {
    // 假设当前元素索引为最小值对应索引
    minIdx = i;

    for (let j = i; j < arr.length; j++) {
      // 从头到尾遍历，找到最小索引
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    // i !== minIdx 表示当前元素的索引，不是最小值的索引，需要交换位置
    if (i !== minIdx) {
      const temp = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = temp;
      console.log(`第 ${i + 1} 次排序 = `, arr);
    }
  }
}

/**
 * =========== 插入排序 ===========
 * @param arr
 * @returns 时间复杂度：O(n^2)
 *
 * 1. 分 已排序区 和 待排序区，保留 待排序 元素
 * 2. 对比 待排序 元素，在合适的位置复制插入
 */
export function insertSort(arr: any[]) {
  console.log("初始数据 = ", arr);

  // temp 用来保存当前需要插入的元素
  let temp;

  for (let i = 1; i < arr.length; i++) {
    let j = i;

    temp = arr[i];

    // 判断 j 前面一个元素是否比 temp 大
    while (j > 0 && arr[j - 1] > temp) {
      // 如果是，则将 j 前面的一个元素后移一位，为 temp 让出位置
      arr[j] = arr[j - 1];
      j--;
    }

    // 循环让位，最后得到的 j 就是 temp 的正确索引
    arr[j] = temp;
    console.log(`第 ${i + 1} 次排序 = `, arr);
  }
}

/**
 * =========== 归并排序 ===========
 * @param arr
 * @returns 时间复杂度：O(nlog(n))
 *
 * 1、将数组基于中间索引拆分为左右子数组，继续递归拆分左右子数组，
 *    递归结束条件为：当前接受数组的长度为 1 时，直接返回数组本身
 * 2、合并左右子数组，循环比较当前左右子数组中的元素，
 *    值较小的元素直接进入 rs 结果数组中
 * 3、处理左/右子数组剩余元素，直接将剩余元素合并到 rs 结果数组中即可
 */
export function mergeSort(arr: any[]): any[] {
  const len = arr.length;

  if (len === 1) return arr;

  // 取中间索引位置
  const middleIdx = Math.floor(len / 2);
  // 划分左子数组
  const letf = mergeSort(arr.slice(0, middleIdx));
  // 划分右子数组
  const right = mergeSort(arr.slice(middleIdx));

  // 合并左右子数组
  arr = mergeArray(letf, right);
  return arr;
}

/**
 * 合并数组
 * @param arr1
 * @param arr2
 * @returns
 */
function mergeArray<T>(arr1: T[], arr2: T[]): T[] {
  let rs: any[] = [];

  // 分别对比两个数组对应位置元素的大小
  // 决定哪个数组的元素进入 rs 数组
  let i = 0,
    j = 0;
  const len1 = arr1.length,
    len2 = arr2.length;

  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      rs.push(arr1[i]);
      i++;
    } else {
      rs.push(arr2[j]);
      j++;
    }
  }

  // 处理剩余数组的元素
  if (i < len1) {
    rs = rs.concat(arr1.slice(i));
  } else if (j < len1) {
    rs = rs.concat(arr2.slice(j));
  }

  return rs;
}

/**
 * =========== 快速排序 ===========
 * @param arr
 * @returns 时间复杂度：O(nlog(n))
 *
 * 1、选择一个基准值
 * 2、使用左指针、右指针遍历数组，这一步需要遍历来划分出两个子数组，
 *    一个子数组全是小于等于基准值的数，另一个子数组全是大于等于基准值的数
 * 3、对两个子数组递归执行前两个步骤，直到子数组长度为 1
 */
export function quickSort(array, L = 0, R = array.length - 1) {
  // 递归结束条件
  if (R - L < 1) return array;

  // 寻找切割点
  let pivotIndex = partition(array, L, R);

  quickSort(array, L, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, R);

  return array;
}

function partition(array, L, R) {
  // 左指针
  let i = L;
  // 基准值
  let pivot = array[L];

  // j 为右指针
  for (let j = L + 1; j <= R; j++) {
    // 当前元素值 <= 基准值，交换位置
    if (array[j] <= pivot) {
      [array[i + 1], array[j]] = [array[j], array[i + 1]];
      i++;
    }
  }

  // 把基准值放在中间，不参与下次遍历
  [array[L], array[i]] = [array[i], array[L]];
  
  return i;
}

// 测试
const arr = [5, 1, 4, 3, 7, 6, 9, 8];
console.log("finaly = ", quickSort(arr));
