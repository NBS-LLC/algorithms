// removeElementTest.ts
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { removeElement } from "./removeElement.ts";

Deno.test("should remove all occurrences of val and return new length for simple case", () => {
  const nums = [3, 2, 2, 3];
  const val = 3;
  const expectedNums = [2, 2];
  const k = removeElement(nums, val);

  assertEquals(
    k,
    2,
    `Expected k to be 2 for nums [3,2,2,3] and val 3, but got ${k}`,
  );
  assertEquals(
    nums.slice(0, k).sort(),
    expectedNums.sort(),
    `Expected remaining nums to be [2,2] for nums [3,2,2,3] and val 3`,
  );
});

Deno.test("should handle empty array", () => {
  const nums: number[] = [];
  const val = 0;
  const k = removeElement(nums, val);

  assertEquals(k, 0, `Expected k to be 0 for an empty array, but got ${k}`);
  assertEquals(
    nums.length,
    0,
    `Expected nums length to be 0 for an empty array`,
  );
});

Deno.test("should handle no elements to remove", () => {
  const nums = [1, 2, 3, 4, 5];
  const val = 6;
  const expectedNums = [1, 2, 3, 4, 5];
  const k = removeElement(nums, val);

  assertEquals(
    k,
    5,
    `Expected k to be 5 when no elements are removed, but got ${k}`,
  );
  assertEquals(
    nums.slice(0, k).sort(),
    expectedNums.sort(),
    `Expected nums to remain [1,2,3,4,5] when no elements are removed`,
  );
});

Deno.test("should remove all elements", () => {
  const nums = [7, 7, 7, 7];
  const val = 7;
  const expectedNums: number[] = [];
  const k = removeElement(nums, val);

  assertEquals(
    k,
    0,
    `Expected k to be 0 when all elements are removed, but got ${k}`,
  );
  assertEquals(
    nums.slice(0, k).sort(),
    expectedNums.sort(),
    `Expected nums to be empty when all elements are removed`,
  );
});

Deno.test("should handle array with duplicate values mixed", () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2];
  const val = 2;
  const expectedNums = [0, 1, 3, 0, 4];
  const k = removeElement(nums, val);

  assertEquals(k, 5, `Expected k to be 5 for mixed duplicates, but got ${k}`);
  assertEquals(
    nums.slice(0, k).sort(),
    expectedNums.sort(),
    `Expected remaining nums to be [0,1,3,0,4] for mixed duplicates`,
  );
});

Deno.test("should remove elements at the beginning of the array", () => {
  const nums = [1, 1, 2, 3, 4, 5];
  const val = 1;
  const expectedNums = [2, 3, 4, 5];
  const k = removeElement(nums, val);

  assertEquals(k, 4, `Expected k to be 4 for leading duplicates, but got ${k}`);
  assertEquals(
    nums.slice(0, k).sort(),
    expectedNums.sort(),
    `Expected remaining nums to be [2,3,4,5] for leading duplicates`,
  );
});

Deno.test("should remove elements at the end of the array", () => {
  const nums = [1, 2, 3, 4, 5, 5];
  const val = 5;
  const expectedNums = [1, 2, 3, 4];
  const k = removeElement(nums, val);

  assertEquals(
    k,
    4,
    `Expected k to be 4 for trailing duplicates, but got ${k}`,
  );
  assertEquals(
    nums.slice(0, k).sort(),
    expectedNums.sort(),
    `Expected remaining nums to be [1,2,3,4] for trailing duplicates`,
  );
});

Deno.test("should remove elements from an array with all same values", () => {
  const nums = [7, 7, 7, 7, 7];
  const val = 7;
  const expectedNums: number[] = [];
  const k = removeElement(nums, val);

  assertEquals(
    k,
    0,
    `Expected k to be 0 when all elements are target value, but got ${k}`,
  );
  assertEquals(
    nums.slice(0, k).sort(),
    expectedNums.sort(),
    `Expected empty array when all elements are target value`,
  );
});

Deno.test("should handle large array with few elements to remove", () => {
  const nums = Array.from({ length: 100 }, (_, i) => i % 10); // [0,1,2,...,9,0,1,2...]
  const val = 5;
  const expectedCount = 90; // 1000 total, 100 occurrences of 5
  const filteredNums = nums.filter((n) => n !== val).sort();
  const k = removeElement(nums, val);

  assertEquals(
    k,
    expectedCount,
    `Expected k to be ${expectedCount} for large array with few removals`,
  );
  assertEquals(
    nums.slice(0, k).sort(),
    filteredNums,
    `Expected remaining elements to match filtered elements for large array`,
  );
});

Deno.test("should handle large array with many elements to remove (e.g., all but one)", () => {
  const nums = Array(1000).fill(1).concat([99]);
  const val = 1;
  const expectedNums = [99];
  const k = removeElement(nums, val);

  assertEquals(
    k,
    1,
    `Expected k to be 1 for large array with many removals, but got ${k}`,
  );
  assertEquals(
    nums.slice(0, k).sort(),
    expectedNums.sort(),
    `Expected remaining nums to be [99] for large array with many removals`,
  );
});

Deno.test("should handle array with negative numbers", () => {
  const nums = [-1, 0, -2, -1, 3];
  const val = -1;
  const expectedNums = [0, -2, 3];
  const k = removeElement(nums, val);

  assertEquals(
    k,
    3,
    `Expected k to be 3 for array with negative numbers, but got ${k}`,
  );
  assertEquals(
    nums.slice(0, k).sort(),
    expectedNums.sort(),
    `Expected remaining nums to be [0,-2,3] for array with negative numbers`,
  );
});

Deno.test("should handle array with zero as value to remove", () => {
  const nums = [0, 1, 0, 3, 0];
  const val = 0;
  const expectedNums = [1, 3];
  const k = removeElement(nums, val);

  assertEquals(k, 2, `Expected k to be 2 for val=0, but got ${k}`);
  assertEquals(
    nums.slice(0, k).sort(),
    expectedNums.sort(),
    `Expected remaining nums to be [1,3] for val=0`,
  );
});
