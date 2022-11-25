/*
题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例: 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]

解释: 滑动窗口的位置
---------------
[1 3 -1] -3 5 3 6 7
1 [3 -1 -3] 5 3 6 7
1 3 [-1 -3 5] 3 6 7
1 3 -1 [-3 5 3] 6 7
1 3 -1 -3 [5 3 6] 7
1 3 -1 -3 5 [3 6 7]

最大值分别对应：
3 3 5 5 6 7
*/

export function maxSlidingWindow(nums: number[], k: number) {
    const res: number[] = []
    const len = nums.length

    // 左右指针
    let left = 0
    let right = left + k - 1

    while (right < len) {
        res.push(getMaxVal(nums, left, right))
        left++
        right = left + k - 1
    }

    return res;
}

export function getMaxVal(arr: number[], l: number, r: number) {
    let max = arr[l]

    while (l <= r) {
        if (max < arr[l]) max = arr[l]
        l++
    }

    return max
}

// 测试
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
