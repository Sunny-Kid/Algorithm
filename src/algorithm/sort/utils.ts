export function findMinValue(array: number[]): number {
  return Math.min.apply(this, array);
}

export function findMaxValue(array: number[]): number {
  return Math.max.apply(this, array);
}

export function swap(array: number[], i: number, j: number): void {
  [array[i], array[j]] = [array[j], array[i]];
}
