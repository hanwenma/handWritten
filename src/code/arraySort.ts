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
    let j = i; // j 是已排序数字的索引

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

/**
 * 归并排序
 * O(nlog(n))
 * @param arr
 */
export function mergerSort(arr: number[]) {
  const length = arr.length;
  if (length <= 1) return arr;

  const minIdx = Math.floor(length / 2);
  // 递归处理
  const left = mergerSort(arr.slice(0, minIdx));
  const right = mergerSort(arr.slice(minIdx));

  return merger(left, right);
}

function merger(left: any[], right: any[]) {
  let res: any[] = [];

  let i = 0;
  let j = 0;

  // 比较两个数组对应位置元素值得大小
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  // 处理剩余节点
  if (i < left.length) {
    res = res.concat(left.slice(i));
  }
  if (j < right.length) {
    res = res.concat(right.slice(j));
  }

  return res;
}

/**
 * 快速排序
 * O(nlog(n)) ~ O(n^2)
 * @param arr
 */
export function quickSort(arr: number[]) {
  const length = arr.length;
  if (length <= 1) return arr;

  // 定义基准值
  const curr = arr[length - 1];
  // 筛选小于基准值的值
  const left = arr.filter((v, i) => i < length - 1 && v < curr);
  // 筛选大于基准值的值
  const right = arr.filter((v, i) => i < length - 1 && v > curr);

  return [...quickSort(left), curr, ...quickSort(right)];
}

// 测试
const data = [9, 2, 3, 1, 8, 6, 4, 5, 7];

// bubbleSort(data);

// selectSort(data);

// insertSort(data);

// const newData = mergerSort(data);

const newData = quickSort(data);

console.log(newData);
