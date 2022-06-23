/**
 * 冒泡排序
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
 * 选择排序排序
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
 * 插入排序
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

// 测试
const arr = [5, 1, 4, 3, 7, 6, 9, 8];
insertSort(arr);
