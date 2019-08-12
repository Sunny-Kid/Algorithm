/**
 * 班上有 N 名学生。其中有些人是朋友，有些则不是。他们的友谊具有是传递性。如果已知 A 是 B 的朋友，B 是 C 的朋友，那么我们可以认为 A 也是 C 的朋友。所谓的朋友圈，是指所有朋友的集合。

给定一个 N * N 的矩阵 M，表示班级中学生之间的朋友关系。如果M[i][j] = 1，表示已知第 i 个和 j 个学生互为朋友关系，否则为不知道。你必须输出所有学生中的已知的朋友圈总数。

示例 1:

输入: 
[[1,1,0],
 [1,1,0],
 [0,0,1]]
输出: 2 
说明：已知学生0和学生1互为朋友，他们在一个朋友圈。
第2个学生自己在一个朋友圈。所以返回2。
示例 2:

输入: 
[[1,1,0],
 [1,1,1],
 [0,1,1]]
输出: 1
说明：已知学生0和学生1互为朋友，学生1和学生2互为朋友，所以学生0和学生2也是朋友，所以他们三个在一个朋友圈，返回1。
注意：

N 在[1,200]的范围内。
对于所有学生，有M[i][i] = 1。
如果有M[i][j] = 1，则有M[j][i] = 1。
 */

/**
 * @param {number[][]} M
 * @return {number}
 */
// 方法1：染色
var findCircleNum = function(M) {
  const visit = [];
  const n = M.length;
  for (let i = 0; i < n; i++){
    visit.push(false);
  }
  
  let count = 0;
  for (let i = 0; i < n; i++){
    if (!visit[i]) {
      dfs(i, visit, M);
      count++;
    }
  }
  return count;
};

const dfs = function(i, visit, M){
  for (let j = 0; j < visit.length; j++){
    if (!visit[j] && M[i][j]) {
      visit[j] = true;
      dfs(j, visit, M);
    }
  }
}

// 方法2：并查集
class UnionFind {
  constructor(grid) {
    const m = grid.length
    const n = grid.length
    this.count = 0
    this.parent = new Array(m * n).fill(-1)
    this.rank = new Array(m * n).fill(0)
    for (let i = 0;i < m;i++) {
      for (let j = 0;j < n;j++) {
        if (grid[i][j] === 1) {
          this.parent[i * n + j] = i * n + j
          this.count += 1
        }
      }
    }
  }

  find(i) {
    if (this.parent[i] != i) {
      this.parent[i] = this.find(this.parent[i])
    }
    return this.parent[i]
  }

  union(x, y) {
    const rootx = this.find(x)
    const rooty = this.find(y)
    if (rootx !== rooty) {
      if (this.rank[rootx] > this.rank[rooty]) {
        this.parent[rooty] = rootx
      } else if (this.rank[rootx] < this.rank[rooty]) {
        this.parent[rootx] = rooty
      } else {
        this.parent[rooty] = rootx
        this.rank[rootx] += 1
      }
      this.count -= 1
    }
  }
}

var findCircleNum = function(grid) {
  if (!grid || !grid[0]) return 0
  const uf = new UnionFind(grid)
  const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]
  const m = grid.length
  const n = grid[0].length

  for (let i = 0;i < m;i++) {
    for (let j = 0;j < n;j++) {
      if (grid[i][j] === 0) continue
      for (let d of directions) {
        const nr = i + d[0]
        const nc = j + d[1]
        if (nr >= 0 && nc >=0 && nr < m && nc < n && grid[nr][nc] === 1) {
          uf.union(i * n + j, nr * n + nc)
        }
      }
    }
  }

  return uf.count
};
