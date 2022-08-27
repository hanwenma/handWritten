/**
 * 数组扁平化
 * @param array
 * @returns
 */
export function flattenArr(array: any[]) {
  const arr: any = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      arr.push(...flattenArr(item));
    } else {
      arr.push(item);
    }
  }
  return arr;
}

/**
 * 数组去重
 * @param array
 * @returns
 */
export function uniqueArr(array: any[]) {
  const arr: any = Array.from(new Set(array));

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      arr[i]= uniqueArr(item);
    }
  }
  
  return arr;
}

// 测试
const arr1 = flattenArr([1, [2], 3, [4, [5], 6, [7, [8]]]]);
console.log(arr1);

const arr2 = uniqueArr([1, 2, 1, 2, [3, 3, [4, 5, 5]], 6]);
console.log(arr2);
