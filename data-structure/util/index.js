export const COMPARE = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
}

export function defaultCompare(a, b) {
  if (a === b) return 0;
  return a < b ? COMPARE.LESS_THAN : COMPARE.BIGGER_THAN;
}
