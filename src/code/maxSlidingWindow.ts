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


// 双指针 + 循环法  O(kn)
export function getMaxVal(arr: number[], l: number, r: number) {
    let max = arr[l]

    while (l <= r) {
        if (max < arr[l]) max = arr[l]
        l++
    }

    return max
}

// 双指针 + 双端队列  O(n)
export function maxSlidingWindowWithDeque(nums: number[], k: number) {
    const res: number[] = []
    const len = nums.length


    // 双端队列：递减队列
    const deque: number[] = []

    for (let i = 0; i < len; i++) {
        // 当前元素大于 队列 的最后一个元素时，将其出队
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop()
        }

        // 当前索引入队列，便于后续判断
        deque.push(i)

        // 当队头元素的索引已经被排除在滑动窗口之外时
        while (deque.length && deque[0] <= i - k) {
            // 将队头元素索引出队
            deque.shift();
        }

        // 判断滑动窗口的状态，只有在被遍历的元素个数大于 k 的时候，才更新结果数组
        if (i >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }

    return res;
}

// 测试
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindowWithDeque([1, 3, -1, -3, 5, 3, 6, 7], 3));
