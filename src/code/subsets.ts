/*
 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
说明：解集不能包含重复的子集。

示例: 输入: nums = [1,2,3]
输出:
[
    [3],
    [1],
    [2],
    [1,2,3],
    [1,3],
    [2,3],
    [1,2],
    []
]
*/

export function subsets(nums: number[]) {
    const len = nums.length;
    // 定义结果集
    const res: Array<Array<number>> = []
    // 定义当前的结果
    const curr: Array<number> = [];

    // 深度优先遍历
    function dfs(index) {
        // 每次递归都需要将其内容添加到 res 中
        res.push(curr.slice())

        /// 从当前数字的索引开始，遍历 nums
        // 递归边界的变化：
        //     这里并没有显式的 return 语句来标示递归边界的存在。
        // 这个边界的判定被 for 语句偷偷地做掉了： 
        //     for 语句会遍历所有的数字，当数字遍历完全时，也就意味着递归走到了尽头
        for (let i = index; i < len; i++) {
            // 当前元素被选中
            curr.push(nums[i])

            // 递归
            dfs(i + 1)

            // 当前元素不被选中
            curr.pop()
        }
    }

    dfs(0)

    return res;
}

// 测试
const nums = [1, 2, 3]
console.log(subsets(nums));