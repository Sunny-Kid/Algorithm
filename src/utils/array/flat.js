Array.prototype.flat = function() {
  return [].concat(
    ...this.map(item => (Array.isArray(item) ? item.flat() : [item]))
  );
};
