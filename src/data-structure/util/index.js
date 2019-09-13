export const COMPARE = {
  LESS_THAN: -1,
  EQUAL: 0,
  BIGGER_THAN: 1
};

export function defaultCompare(a, b) {
  if (a === b) return COMPARE.EQUAL;
  return a < b ? COMPARE.LESS_THAN : COMPARE.BIGGER_THAN;
}

export function defaultToString(item) {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}
