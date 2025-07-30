export function findTwoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i == j) {
        continue;
      }

      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }

  return [0, 0];
}

export function findTwoSumUsingIndex(
  nums: number[],
  target: number,
): number[] {
  const compMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (compMap.has(comp)) {
      return [i, compMap.get(comp)];
    }
    compMap.set(nums[i], i);
  }

  return [0, 0];
}
