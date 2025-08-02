export function findNthFibonacci(position: number): number {
  if (position == 0) {
    return 0;
  }

  if (position == 1) {
    return 1;
  }

  let prevFirst = 0;
  let prevSecond = 1;
  let result = 0;

  for (let n = 2; n <= position; n++) {
    result = prevFirst + prevSecond;
    prevFirst = prevSecond;
    prevSecond = result;
  }

  return result;
}
