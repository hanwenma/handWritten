/*
题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例: 输入: n = 4, k = 2
输出:
[
    [2,4],
    [3,4],
    [2,3],
    [1,2],
    [1,3],
    [1,4],
]
*/

export function combine(n: number, k: number) {
    // 定义结果集
    const res: Array<Array<number>> = []
    // 定义当前的结果
    const curr: Array<number> = [];

    // 深度优先遍历
    function dfs(index) {
        // 递归边界
        if(curr.length === k){
            res.push(curr.slice())
            return;
        } 

        for (let i = index; i <= n; i++) {
            // 当前元素被选中
            curr.push(i)

            // 递归
            dfs(i + 1)

            // 当前元素不被选中
            curr.pop()
        }
    }

    dfs(1)

    return res;
}

// 测试
const n = 4
console.log(combine(n, 2));