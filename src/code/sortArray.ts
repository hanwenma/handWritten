import { trace } from "console";

const arr = [3, 5, 4, 2, 6, 1]

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
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
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
export function bestBubbleSort() {
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

    return arr
}

// console.time()
// console.log("betterBubbleSort = ", betterBubbleSort(arr.slice()));
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
            if(arr[j] < arr[minIdx]){
                minIdx = j;
            }
        }

        // 若当前 minIdx 和 i 不相等
        // 则表明当前已经找到新的最小的元素，则进行交换
        if(minIdx !== i){
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
        }
    }

    return arr;
}

console.time()
console.log("betterBubbleSort = ", selectSort(arr.slice()));
console.timeEnd()