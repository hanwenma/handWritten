/*
题目描述：给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。

示例：
输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
*/

export function rainTrap(heights: number[]) {
    // 结果集
    let res = 0;
    // 缓存左右指针当前最大值
    let leftMax = 0;
    let rightMax = 0;
    // 定义双指针
    let l = 0;
    let r = heights.length - 1;

    while(l < r){
        // 取出当前最有指针对应的值
        const left = heights[l];
        const right = heights[r];

        if(left < right){
            leftMax = Math.max(leftMax, left);
            res += leftMax - left;
            l++;            
        }else{
            rightMax = Math.max(rightMax, right);
            res += rightMax - right;
            r--;          
        }
    }

    return res;
}

// 测试
console.log(rainTrap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
