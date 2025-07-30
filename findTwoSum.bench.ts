// two-sum.bench.ts

import { findTwoSum, findTwoSumUsingIndex } from "./findTwoSum.ts";

// Helper function to generate test arrays
function generateTestInput(size: number): { nums: number[]; target: number } {
  const nums: number[] = [];
  for (let i = 0; i < size; i++) {
    nums.push(Math.floor(Math.random() * 2000000) - 1000000); // Numbers between -1,000,000 and 1,000,000
  }

  // Place solution at the end of the array to force O(N^2) to iterate more
  const idx1 = size - 2; // Second to last element
  const idx2 = size - 1; // Last element

  const val1 = Math.floor(Math.random() * 1000000);
  const val2 = Math.floor(Math.random() * 1000000);
  nums[idx1] = val1;
  nums[idx2] = val2;
  const target = val1 + val2;

  return { nums, target };
}

// Generate input data for different scales once
const inputs = {
  small: generateTestInput(100),
  medium: generateTestInput(1000),
  large: generateTestInput(10000),
};

// --- Benchmarks with Flat Group Structure ---

Deno.bench({
  name: "findTwoSum (O(N^2))",
  group: "N=100",
  baseline: true,
  fn() {
    findTwoSum(inputs.small.nums, inputs.small.target);
  },
});

Deno.bench({
  name: "findTwoSumUsingIndex (O(N))",
  group: "N=100",
  fn() {
    findTwoSumUsingIndex(inputs.small.nums, inputs.small.target);
  },
});

Deno.bench({
  name: "findTwoSum (O(N^2))",
  group: "N=1000",
  baseline: true,
  fn() {
    findTwoSum(inputs.medium.nums, inputs.medium.target);
  },
});

Deno.bench({
  name: "findTwoSumUsingIndex (O(N))",
  group: "N=1000",
  fn() {
    findTwoSumUsingIndex(inputs.medium.nums, inputs.medium.target);
  },
});

Deno.bench({
  name: "findTwoSum (O(N^2))",
  group: "N=10000",
  baseline: true,
  fn() {
    findTwoSum(inputs.large.nums, inputs.large.target);
  },
});

Deno.bench({
  name: "findTwoSumUsingIndex (O(N))",
  group: "N=10000",
  fn() {
    findTwoSumUsingIndex(inputs.large.nums, inputs.large.target);
  },
});
