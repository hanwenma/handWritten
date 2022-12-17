/*
题目描述：给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
你可以假设 nums1 和 nums2 不会同时为空。

示例 1: nums1 = [1, 3]
nums2 = [2]
则中位数是 2.0

示例 2:
nums1 = [1, 2]
nums2 = [3, 4]
则中位数是 (2 + 3)/2 = 2.5
*/

export function findMedianSortedArrays(nums1: number[], nums2: number[]) {
  const len1 = nums1.length,
    len2 = nums2.length,
    len = len1 + len2;

  function inOrder() {
    if(len1 === 0 || len2 === 0) return len1 === 0 ? nums2 : nums1;

    const nums: any[] = [];
    let i = 0,
      j = 0;

    while (i < len1 && j < len2) {
      if (nums1[i] < nums2[j]) {
        nums.push(nums1[i]);
        i++;
      } else {
        nums.push(nums2[j]);
        j++;
      }
    }

    if (i < len1) {
      return nums.concat(nums1.slice(i));
    } else {
      return nums.concat(nums2.slice(j));
    }
  }

  const nums = inOrder();
  const mid = Math.floor(len/2);
  if(len % 2 === 0) return (nums[mid-1] + nums[mid])/2;
  else return nums[mid];
}

// 测试
const nums1 = [1, 2];
const nums2 = [3, 4,5];
console.log(findMedianSortedArrays(nums1, nums2));
