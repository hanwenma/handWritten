// 合并两个有序数组，输出的数组保证是有序的

export function mergeSortArray(nums1, nums2) {
    let i = nums1.length - 1;
    let j = nums2.length - 1;
    let k = i + j + 1; // 合并后的数组最大索引

    // 将结果合并到 nums1 中
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i]
            i--
            k--
        } else {
            nums1[k] = nums2[j]
            j--
            k--
        }
    }

    // 将剩余的值，进行填充
    while (i >= 0 || j >= 0) {
        if (i >= 0) {
            nums1[k] = nums1[i]
            i--
            k--
        } else {
            nums1[k] = nums2[j]
            j--
            k--
        }
    }


    return nums1
}


// 测试
const nums1 = [1, 5, 7, 9]
const nums2 = [2, 3, 4, 6, 8]

console.log(mergeSortArray(nums1, nums2));
