/**
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * 例如，给定三角形：

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

说明：

如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const mini = triangle[triangle.length -1]
    for (let i = triangle.length - 2; i>= 0;i--) {
      for (let j = 0;j < triangle[i].length;j++) {
        mini[j] = triangle[i][j] + Math.min(mini[j], mini[j + 1])
      }
    }
    return mini[0]
};
