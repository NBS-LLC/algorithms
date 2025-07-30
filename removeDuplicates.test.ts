import { assertEquals } from "jsr:@std/assert";
import { removeDuplicates } from "./removeDuplicates.ts";

Deno.test("should handle an empty array", () => {
  const nums: number[] = [];
  const k = removeDuplicates(nums);
  assertEquals(k, 0);
  assertEquals(nums.slice(0, k), []);
});

Deno.test("should remove duplicates from a basic array", () => {
  const nums = [1, 1, 2];
  const k = removeDuplicates(nums);
  assertEquals(k, 2);
  assertEquals(nums.slice(0, k), [1, 2]);
});

Deno.test("should remove duplicates from an array with many duplicates", () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const k = removeDuplicates(nums);
  assertEquals(k, 5);
  assertEquals(nums.slice(0, k), [0, 1, 2, 3, 4]);
});

Deno.test("should handle an array with no duplicates", () => {
  const nums = [1, 2, 3, 4, 5];
  const k = removeDuplicates(nums);
  assertEquals(k, 5);
  assertEquals(nums.slice(0, k), [1, 2, 3, 4, 5]);
});

Deno.test("should handle an array with all same elements", () => {
  const nums = [7, 7, 7, 7, 7];
  const k = removeDuplicates(nums);
  assertEquals(k, 1);
  assertEquals(nums.slice(0, k), [7]);
});

Deno.test("should handle a single element array", () => {
  const nums = [10];
  const k = removeDuplicates(nums);
  assertEquals(k, 1);
  assertEquals(nums.slice(0, k), [10]);
});
