import Dictionary from '../Dictionary';

class Graph {
  constructor() {
    this.vertices = [];
    this.adjEdge = new Dictionary();
  }

  // 增加顶点
  addVertex(v) {
    this.vertices.push(v);
    this.adjEdge.set(v, []);
  }

  // 增加相邻边
  addEdge(v, e) {
    this.adjEdge.get(e).push(v);
    this.adjEdge.get(v).push(e);
  }

  // 打印出结果
  toString() {
    return this.vertices.reduce((r, v, i) => {
      return this.adjEdge.get(v).reduce((r, e, i) => {
        return r + e;
      }, `${r}\n${v} =>`);
    }, '');
  }

  bfs(v, cb) {
    const read = [];
    const adjEdge = this.adjEdge;
    const distances = [];
    const predecessors = [];
    const pending = [v || this.vertices[0]];

    const readVertices = vertices => {
      vertices.forEach(vertex => {
        read.push(vertex);
        pending.shift();
        distances[vertex] = distances[vertex] || 0;
        predecessors[vertex] = predecessors[vertex] || null;
        adjEdge.get(vertex).forEach(v => {
          if (!read.includes(v) && !pending.includes(v)) {
            pending.push(v);
            distances[vertex] = distances[v] + 1;
            predecessors[v] = vertex;
          }
        });
        if (cb) cb(vertex);
        if (pending.length) readVertices(pending);
      });
    };
    readVertices(pending);

    return { distances, predecessors };
  }

  distance(fromV) {
    const vertices = this.vertices;
    const { distances, predecessors } = this.bfs(fromV);
    vertices.forEach(v => {
      if (!!distances[v]) {
        let prevV = predecessors[v];
        let slug = '';
        if (prevV !== fromV) {
          prevV = predecessors[prev];
          slug = `${prevV} - ${slug}`;
        }
        console.log(slug);
      }
    });
  }

  dfs(cb) {
    const read = [];
    const adjEdge = this.adjEdge;
    const readVertices = vertices => {
      vertices.forEach(v => {
        if (read.includes(v)) return false;
        read.push(v);
        if (cb) cb();
        if (read.length !== this.vertices.length) {
          readVertices(adjEdge.get(v));
        }
      });
    };
    readVertices(this.vertices);
  }
}

export default Graph;
