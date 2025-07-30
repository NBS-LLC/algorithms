// two-sum.test.ts

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { findTwoSumUsingIndex as findTwoSum } from "./findTwoSum.ts";

Deno.test("findTwoSum - basic example", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const expected = [0, 1];
  assertEquals(findTwoSum(nums, target).sort(), expected.sort());
});

Deno.test("findTwoSum - different order", () => {
  const nums = [3, 2, 4];
  const target = 6;
  const expected = [1, 2];
  assertEquals(findTwoSum(nums, target).sort(), expected.sort());
});

Deno.test("findTwoSum - numbers can be negative", () => {
  const nums = [-1, -2, -3, -4, -5];
  const target = -8;
  const expected = [2, 4];
  assertEquals(findTwoSum(nums, target).sort(), expected.sort());
});

Deno.test("findTwoSum - target is zero with zeros in array", () => {
  const nums = [0, 4, 3, 0];
  const target = 0;
  const expected = [0, 3];
  assertEquals(findTwoSum(nums, target).sort(), expected.sort());
});

Deno.test("findTwoSum - larger numbers", () => {
  const nums = [1_000_000_000, 2_000_000_000, 3_000_000_000];
  const target = 3_000_000_000;
  const expected = [0, 1];
  assertEquals(findTwoSum(nums, target).sort(), expected.sort());
});

Deno.test("findTwoSum - duplicate numbers that form target", () => {
  const nums = [3, 3];
  const target = 6;
  const expected = [0, 1];
  assertEquals(findTwoSum(nums, target).sort(), expected.sort());
});

Deno.test("findTwoSum - unique solution in middle of array", () => {
  const nums = [1, 2, 5, 8, 9];
  const target = 7;
  const expected = [1, 2];
  assertEquals(findTwoSum(nums, target).sort(), expected.sort());
});

// --- New Edge Case Tests ---

Deno.test("findTwoSum - minimum array size", () => {
  const nums = [5, 5];
  const target = 10;
  const expected = [0, 1];
  assertEquals(findTwoSum(nums, target).sort(), expected.sort());
});

Deno.test("findTwoSum - solution at array ends", () => {
  const nums = [1, 20, 30, 40, 9];
  const target = 10;
  const expected = [0, 4];
  assertEquals(findTwoSum(nums, target).sort(), expected.sort());
});

Deno.test("findTwoSum - values far apart in a larger array", () => {
  const nums = [0, -100, 50, 200, -50];
  const target = 150;
  const expected = [3, 4]; // Corrected: 200 + (-50) = 150
  assertEquals(findTwoSum(nums, target).sort(), expected.sort());
});

Deno.test("findTwoSum - multiple identical numbers, distinct indices", () => {
  const nums = [3, 2, 5, 3];
  const target = 6;
  const expected = [0, 3];
  assertEquals(findTwoSum(nums, target).sort(), expected.sort());
});

Deno.test("findTwoSum - large negative numbers", () => {
  const nums = [-1_000_000_000, -500_000_000, 1_000_000_000];
  const target = -1_500_000_000;
  const expected = [0, 1];
  assertEquals(findTwoSum(nums, target).sort(), expected.sort());
});
