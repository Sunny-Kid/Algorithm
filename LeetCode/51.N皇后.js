/**
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

上图为 8 皇后问题的一种解法。

给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

示例:

输入: 4
输出: [
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  if (n < 1) return []
  let result = []
  let cols = new Set()
  // pie: 主对角线
  let pie = new Set()
  // na: 次对角线
  let na = new Set()
  const queens = '.'.repeat(n).split('')
  DFS(n, 0, [])

  function DFS(n, row, curState) {
    if (row >= n) {
      result.push(curState)
      return
    }
    for (let col = 0;col < n;col++) {
      if (cols.has(col) || pie.has(row + col) || na.has(row - col)) continue

      cols.add(col)
      pie.add(row + col)
      na.add(row - col)

      DFS(n, row + 1, curState.concat([col]))

      cols.delete(col)
      pie.delete(row + col)
      na.delete(row - col)
    }
  }

  // 得到的实际上是数字解，比如[1,3,0,2]这种，所以需要转换一下
  return result.map((val) => {
    return val.map((item) => {
      let q = [...queens];
      q.splice(item, 1, 'Q');
      return q.join('');
    })
  })
};
