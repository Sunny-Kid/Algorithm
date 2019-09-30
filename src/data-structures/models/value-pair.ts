export class ValuePair<K, V> {
  constructor(public key: K, public value: V) {}

  toString(): string {
    return `[#${this.key}: ${this.value}]`;
  }
}
