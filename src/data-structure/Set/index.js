class Set {
  constructor() {
    this.items = {};
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  get size() {
    return Object.keys(this.items).length;
  }

  get values() {
    return Object.keys(this.items);
  }

  union(otherSet) {
    const unionSet = new Set();
    this.values.forEach(value => unionSet.add(value));
    otherSet.values.forEach(value => unionSet.add(value));
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    this.values.forEach(value => {
      if (otherSet.has(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set();
    this.values.forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  subset(otherSet) {
    if (this.size > otherSet.size) {
      return false;
    } else {
      return this.values.every(value => otherSet.has(value));
    }
  }
}
