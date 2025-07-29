// max.ts
export function findMax(numbers: number[]): number | undefined {
  if (!numbers.length) return undefined;

  let max = numbers[0];
  numbers.forEach((number) => {
    if (number > max) {
      max = number;
    }
  });

  return max;
}

export function findMaxWithMathMax(numbers: number[]): number | undefined {
  if (!numbers.length) return undefined;
  return Math.max(...numbers);
}

export function findMaxWithReduce(numbers: number[]): number | undefined {
  return numbers.reduce((prev, current) => Math.max(prev, current), numbers[0]);
}
