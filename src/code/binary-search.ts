/**
 * 二分法 —— 查找目标值在数组中的索引位置
 * @param data
 * @param target
 * @returns
 */
export default function binarySearch(data: any[], target: any, start?: number, end?: number) {
  const len = data.length;
  if (len < 1) return data[0] == target ? 0 : -1;

  if(start === undefined) start = 0;
  if(end === undefined) end = len - 1;
  
  if(start > end) return -1;

  let midIdx = Math.floor((start + end) / 2);

  if(data[midIdx] > target){
    return binarySearch(data, target, start, midIdx - 1);
  }else if(data[midIdx] < target){
    return binarySearch(data, target, midIdx + 1, end);
  }else {
    return midIdx;
  }
 
}

// 测试
const data = [1, 2,3,4,5,6,7,8,9];

console.log(binarySearch(data, 1));
console.log(binarySearch(data, 2));
console.log(binarySearch(data, 3));
console.log(binarySearch(data, 4));
console.log(binarySearch(data, 5));
console.log(binarySearch(data, 6));
console.log(binarySearch(data, 7));
console.log(binarySearch(data, 8));
console.log(binarySearch(data, 9));
console.log(binarySearch(data, 10));
