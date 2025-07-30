import { assertEquals } from "jsr:@std/assert";
import { removeDuplicatesInPlace } from "./removeDuplicates.ts";

Deno.test("should handle an empty array", () => {
  const nums: number[] = [];
  const k = removeDuplicatesInPlace(nums);
  assertEquals(k, 0);
  assertEquals(nums.slice(0, k), []);
});

Deno.test("should remove duplicates from a basic array", () => {
  const nums = [1, 1, 2];
  const k = removeDuplicatesInPlace(nums);
  assertEquals(k, 2);
  assertEquals(nums.slice(0, k), [1, 2]);
});

Deno.test("should remove duplicates from an array with many duplicates", () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const k = removeDuplicatesInPlace(nums);
  assertEquals(k, 5);
  assertEquals(nums.slice(0, k), [0, 1, 2, 3, 4]);
});

Deno.test("should handle an array with no duplicates", () => {
  const nums = [1, 2, 3, 4, 5];
  const k = removeDuplicatesInPlace(nums);
  assertEquals(k, 5);
  assertEquals(nums.slice(0, k), [1, 2, 3, 4, 5]);
});

Deno.test("should handle an array with all same elements", () => {
  const nums = [7, 7, 7, 7, 7];
  const k = removeDuplicatesInPlace(nums);
  assertEquals(k, 1);
  assertEquals(nums.slice(0, k), [7]);
});

Deno.test("should handle a single element array", () => {
  const nums = [10];
  const k = removeDuplicatesInPlace(nums);
  assertEquals(k, 1);
  assertEquals(nums.slice(0, k), [10]);
});

Deno.test("should handle negative numbers and zeros", () => {
  const nums = [-3, -1, -1, 0, 0, 0, 2, 2, 5];
  const k = removeDuplicatesInPlace(nums);
  assertEquals(k, 5);
  assertEquals(nums.slice(0, k), [-3, -1, 0, 2, 5]);
});

Deno.test("should handle duplicates at the beginning and end of the array", () => {
  const nums = [1, 1, 1, 2, 3, 4, 4, 4];
  const k = removeDuplicatesInPlace(nums);
  assertEquals(k, 4);
  assertEquals(nums.slice(0, k), [1, 2, 3, 4]);
});

Deno.test("should handle a larger array with mixed duplicates and unique elements", () => {
  const nums = [1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 6, 7, 7, 7, 7, 8, 9, 9, 10];
  const k = removeDuplicatesInPlace(nums);
  assertEquals(k, 10);
  assertEquals(nums.slice(0, k), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

Deno.test("should handle an array with only two unique elements, repeated", () => {
  const nums = [1, 1, 1, 1, 1, 2, 2, 2, 2];
  const k = removeDuplicatesInPlace(nums);
  assertEquals(k, 2);
  assertEquals(nums.slice(0, k), [1, 2]);
});
