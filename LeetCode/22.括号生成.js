/**
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = []
  generateOneByOne('', res, n, n)
  return res
};

function generateOneByOne(sublist, res, left, right) {
  if (left === 0 && right === 0 ) {
    res.push(sublist)
  }
  if (left > 0) {
    generateOneByOne(sublist + '(', res, left - 1, right)
  }
  if (right > left) {
    generateOneByOne(sublist + ')', res, left, right - 1)
  }
}
