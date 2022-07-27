/**
 * 交换位置
 * @param a
 * @param b
 */
function swap(i, j, data) {
  const temp = data[i];
  data[i] = data[j];
  data[j] = temp;
}

/**
 * 冒泡排序
 * O(n^2)
 * @param arr
 */
export function bubbleSort(arr: number[]) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] > arr[j]) swap(i, j, arr);
    }
  }
}

/**
 * 选择排序
 * O(n^2)
 * @param arr
 */
export function selectSort(arr: number[]) {
  const length = arr.length;
  let minIdx;

  for (let i = 0; i < length; i++) {
    minIdx = i;

    for (let j = i + 1; j < length; j++) {
      if (arr[minIdx] > arr[j]) minIdx = j;
    }

    if (minIdx !== i) swap(i, minIdx, arr);
  }
}

/**
 * 插入排序
 * O(n^2)
 * @param arr
 */
export function insertSort(arr: number[]) {
  const length = arr.length;
  let temp;

  for (let i = 1; i < length; i++) {
    let j = i;

    // 保存临时数据，避免后续被覆盖
    temp = arr[j];

    // 在已排序的数据中，用当前数据替换在已排序数据对应位置
    while (j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }

    // 最后将被 替换 或 新数据 temp 存入已排序的数据中
    arr[j] = temp;
  }
}

// 测试
const data = [9, 2, 3, 1, 8, 6, 4, 5, 7];

// bubbleSort(data);

// selectSort(data);

insertSort(data);

console.log(data);
