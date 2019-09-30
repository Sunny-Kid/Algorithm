export default class Set<T> {
  private items: any;

  constructor() {
    this.items = {};
  }

  add(element: T): boolean {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element: T): boolean {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  has(element: T): boolean {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  values(): T[] {
    return Object.values(this.items);
  }

  union(otherSet: Set<T>): Set<T> {
    const unionSet = new Set<T>();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }

  intersection(otherSet: Set<T>): Set<T> {
    const intersectionSet = new Set<T>();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }
    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }

  difference(otherSet: Set<T>): Set<T> {
    const differenceSet = new Set<T>();
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  isSubsetOf(otherSet: Set<T>): boolean {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return Object.keys(this.items).length;
  }

  getItems(): any {
    return this.items;
  }

  clear(): void {
    this.items = {};
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }
    const values = this.values();
    let objString = `${values[0]}`;
    for (let i = 1; i < values.length; i++) {
      objString = `${objString},${values[i].toString()}`;
    }
    return objString;
  }
}
