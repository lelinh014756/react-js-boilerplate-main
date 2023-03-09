/* eslint-disable @typescript-eslint/no-explicit-any */
export type Order = 'asc' | 'desc';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<T>(
  order: Order,
  orderBy: keyof T
): (
  a: { [key in keyof T]: ReturnType<any> },
  b: { [key in keyof T]: ReturnType<any> }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export { descendingComparator, getComparator };
