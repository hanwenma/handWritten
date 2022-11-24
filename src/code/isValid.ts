/*
题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足： 左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:
输入: "()"
输出: true

示例 2:
输入: "()[]{}"
输出: true

示例 3:
输入: "(]"
输出: false

示例 4:
输入: "([)]"
输出: false
示例 5:
输入: "{[]}"
输出: true
*/

const leftToRight = {
  "(": ")",
  "{": "}",
  "[": "]",
};

export function isValid(str: string) {
  if(!str) return false;

  const stack: string[] = [];
  const len = str.length;

  for (let i = 0; i < len; i++) {
    // 左括号入栈
    if (leftToRight[str[i]]) {
      stack.push(str[i]);
      continue;
    }

    // 判断右括号和左括号是否匹配
    const left = stack.pop() || "";
    if (leftToRight[left] !== str[i]) return false;
  }

  // 栈中没有剩余左括号，则是有效字符
  return !stack.length;
}

// 测试
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
