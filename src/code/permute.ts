/*
题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。

示例：   
输入: [1,2,3]
输出: 
[
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
]
*/

export function permute(nums: number[]) {
    const len = nums.length;
    // 定义结果集
    const res: Array<Array<number>> = [];
    // 定义当前组合结果
    const curr: Array<number> = [];
    // 被访问过的元素
    const visited = {};

    // 深度优先搜索
    function dfs() {
        // 每次递归出口
        if (curr.length === len) {
            // 将当前的结果集添加到 res 中
            res.push(curr.slice())
            return
        }

        // 检查手里剩下的数字有哪些
        for (let i = 0; i < len; i++) {
            // 若没有内访问过
            if (!visited[nums[i]]) {
                // 将当前元素标记为已访问
                visited[nums[i]] = true;

                // 将当前元素添加到 curr 栈中
                curr.push(nums[i]);

                // 开始递归
                dfs();

                // 递归结束，出栈
                curr.pop();
                // 将当前元素标记重置为未访问
                visited[nums[i]] = false;
            }
        }
    }

    dfs()

    return res;
}

// 测试
const nums = [1, 2, 3]
console.log(permute(nums));
