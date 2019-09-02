export function findMinValue(array) {
  return Math.min.apply(this, array);
}

export function findMaxValue(array) {
  return Math.max.apply(this, array);
}

export function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}
