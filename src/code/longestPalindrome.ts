/*
题目描述：给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。

示例 2：
输入: "cbbd"
输出: "bb"
*/

export function longestPalindrome(s: string) {
  const len = s.length;
  if (len < 2) return "";

  // 初始化双指针
  let i = 0,
    j = len - 1;
  // 定义结果
  let res = "";

  while (i < j) {
    const sub = s.slice(i, j + 1);
    if (isPalindrome(sub) && sub.length > res.length) {
        res = sub;
    }
    i++;
    j--;
  }

  return res;
}

function isPalindrome(s: string) {
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }

  return true;
}

console.log(longestPalindrome("cbbd"));
