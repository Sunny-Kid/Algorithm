import { ValuePair } from '../models/value-pair';
import { defaultToString } from '../util';

class Dictionary<K, V> {
  private table: { [key: string]: ValuePair<K, V> };

  constructor(private toStrFn = defaultToString) {
    this.table = {};
  }

  hasKey(key: K): boolean {
    return this.table[this.toStrFn(key)] != null;
  }

  set(key: K, value: V): boolean {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key: K): V | undefined {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key: K): boolean {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  keyValues(): ValuePair<K, V>[] {
    const valuePairs = [];
    for (const k in this.table) {
      if (this.hasKey((k as unknown) as K)) {
        valuePairs.push(this.table[k]);
      }
    }
    return valuePairs;
  }

  keys(): K[] {
    return this.keyValues().map((valuePair: ValuePair<K, V>) => valuePair.key);
  }

  values(): V[] {
    return this.keyValues().map((valuePair: ValuePair<K, V>) => valuePair.value);
  }

  size(): number {
    return Object.keys(this.table).length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  clear(): void {
    this.table = {};
  }

  forEach(callbackFn: (key: K, value: V) => any): void {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}

export default Dictionary;
