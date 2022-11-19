/*
真题描述： 设计一个支持以下两种操作的数据结构：
void addWord(word)
bool search(word)
search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
. 可以表示任何一个字母。

示例: addWord("bad")
addWord("dad")
addWord("mad")

search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true

说明:
你可以假设所有单词都是由小写字母 a-z 组成的。
*/

export function WordDictionary(this) {
  this.words = {};
}

WordDictionary.prototype.addWord = function (words: string) {
  const len = words.length;

  if (this.words[len]) {
    this.words[len].push(words);
  } else {
    this.words[len] = [words];
  }
};

WordDictionary.prototype.search = function (word: string) {
  const len = word.length;

  if (!this.words[len]) return false;
  console.log("====", this.words[len]);

  // 不包含 . 意味着是普通字符串
  if (!word.includes(".")) {
    return this.words[len].includes(word);
  }

  // 否则是正则表达式
  const reg = new RegExp(word);
  return this.words[len].some((s) => reg.test(s));
};

// 测试
const wordDictionary = new WordDictionary();

wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");

console.log(wordDictionary.search("pad")); // false
console.log(wordDictionary.search("bad")); // true
console.log(wordDictionary.search(".ad")); // true
console.log(wordDictionary.search("b..")); // true
