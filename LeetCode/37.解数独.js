/**
 * 编写一个程序，通过已填充的空格来解决数独问题。

一个数独的解法需遵循如下规则：

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
空白格用 '.' 表示。

一个数独。

答案被标成红色。

Note:

给定的数独序列只包含数字 1-9 和字符 '.' 。
你可以假设给定的数独只有唯一解。
给定数独永远是 9x9 形式的。
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  if (board === null || board.length === 0) return;
  solve(board)

  function solve(board) {
    for (let i = 0;i < board.length;i++) {
      for (let j = 0;j < board[0].length;j++) {
        if (board[i][j] === '.') {
          for (let c = 1;c <= 9;c++) {
            const strC = c.toString()
            if (isValid(board, i, j, strC)) {
              board[i][j] = strC
              if (solve(board)) {
                return true
              } else {
                board[i][j] = '.'
              }
            }
          }
          return false
        }
      }
    }
    return true
  }

  function isValid(board, row, col, c) {
    for (let i = 0;i < 9;i++) {
      // 判断所在的行、所在的列、3*3小格子是否有重复元素
      if (board[i][col] !== '.' && board[i][col] === c) return false
      if (board[row][i] !== '.' && board[row][i] === c) return false
      if (board[3 * parseInt(row / 3) + parseInt(i / 3)][3 * parseInt(col / 3) + i % 3] !== '.'
      && board[3 * parseInt(row / 3) + parseInt(i / 3)][3 * parseInt(col / 3) + i % 3] === c) {
        return false
      }
    }
    return true
  }
};
