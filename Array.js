Array.prototype.flat = () => {
  return [].concat(...this.map(item => (Array.isArray(item) ? item.flat() : [item])));
}

Array.prototype.unique = () => {
  return [...new Set(this)]
}

const sort = (a, b) => a - b

console.log(arr.flat().unique().sort(sort));
