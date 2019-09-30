import Dictionary from '../Dictionary';

type IAdjList = Dictionary<string | number, (string | number)[]>;

export default class Graph {
  private vertices: (string | number)[];
  private adjList: IAdjList;

  constructor(private isDirected = false) {}

  addVertex(v: string | number): void {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []); // initialize adjacency list with array as well;
    }
  }

  addEdge(a: string | number, b: string | number): void {
    if (!this.adjList.get(a)) {
      this.addVertex(a);
    }
    if (!this.adjList.get(b)) {
      this.addVertex(b);
    }
    this.adjList.get(a).push(b);
    if (this.isDirected !== true) {
      this.adjList.get(b).push(a);
    }
  }

  getVertices(): (string | number)[] {
    return this.vertices;
  }

  getAdjList(): IAdjList {
    return this.adjList;
  }

  toString(): string {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + ' -> ';
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' ';
      }
      s += '\n';
    }
    return s;
  }
}
