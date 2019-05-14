import Dictionary from '../dictionary'

class Graph {
  constructor() {
    this.vertices = []
    this.adjEdge = new Dictionary()
  }

  // 增加顶点
  addVertex(v) {
   this.vertices.push(v)
   this.adjEdge.set(v, [])
  }


  // 增加相邻边
  addEdge(v , e) {
    this.adjEdge.get(e).push(v)
    this.adjEdge.get(v).push(e)
  }

  // 打印出结果
  toString() {
    return this.vertices.reduce((r, v , i) => {
      return this.adjEdge.get(v).reduce((r, e, i) => {
        return r + e
      }, `${r}\n${v} =>`)
    }, '')
  }
}

export default Graph
