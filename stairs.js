/**
 * 上台阶问题，比如上10个台阶：
 * 上1个台阶，方法数为m，上2个台阶，方法数为n，总的方法数就是m + n
 */

function feibona(n) {
  if (n < 2) return n
  return feibona(n - 1) + feibona(n - 2)
}

// 使用尾递归
function feibona(n, a = 0, b = 1) {
  if (n === 0) return a
  return feibona(n - 1, b, a + b)
}

// 使用循环求斐波那契的第n个值
function feibona (n) {
  if (n === 0 || n === 1 || n === 2) return n
  const res = []
  res[0] = 1
  res[1] = 2
  for (let i = 2;i < n;i++) {
    res[i] = res[i - 1] + res[i - 2]
  }
  return res[n - 1]
}
