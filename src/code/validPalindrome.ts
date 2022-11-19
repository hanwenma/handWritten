/*
真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

示例 1: 输入: "aba"
输出: True

示例 2:
输入: "abca"
输出: True

解释: 你可以删除c字符。
注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
*/

export function validPalindrome(str: string) {
  let l = 0,
    r = str.length - 1;

  while (l < r) {
    // 一旦发现不匹配的直接中断
    if (str[l] !== str[r]) break;

    l++;
    r--;
  }

  // 尝试从不匹配的左指针的下一个子串，开始判断是否符合回文
  if (isPalindrome(str, l + 1, r)) return true;

  // 尝试从不匹配的右指针的下一个子串，开始判断是否符合回文
  if (isPalindrome(str, l, r - 1)) return true;

  return false;
}

export function isPalindrome(str: string, l: number, r: number) {
  while (l < r) {
    if (str[l] !== str[r]) return false;

    l++;
    r--;
  }

  return true;
}

console.log(validPalindrome("aba"))
console.log(validPalindrome("abca"))
console.log(validPalindrome("abv"))