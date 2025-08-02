export function removeDuplicatesInPlace(nums: number[]): number {
  let k = 0;
  let prev: number | undefined = undefined;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != prev) {
      prev = nums[i];
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

export function removeDuplicates(nums: readonly number[]): number[] {
  if (nums.length === 0) {
    return [];
  }

  const result: number[] = [];
  let prev: number | undefined = undefined;

  for (const num of nums) {
    if (num !== prev) {
      result.push(num);
      prev = num;
    }
  }
  return result;
}
