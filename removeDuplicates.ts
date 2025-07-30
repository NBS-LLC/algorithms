export function removeDuplicates(nums: number[]): number {
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
