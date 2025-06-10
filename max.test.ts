// max.test.ts
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { findMaxWithMathMax as findMax } from "./max.ts";

Deno.test("findMax should return the maximum for an array of positive numbers", () => {
  assertEquals(findMax([1, 5, 2, 8, 3]), 8);
});

Deno.test("findMax should return the maximum for an array with negative numbers", () => {
  assertEquals(findMax([-1, -5, -2, -8, -3]), -1);
});

Deno.test("findMax should return the maximum when numbers are mixed (positive and negative)", () => {
  assertEquals(findMax([-10, 0, 5, -3, 100]), 100);
});

Deno.test("findMax should return the number itself for a single-element array", () => {
  assertEquals(findMax([42]), 42);
});

Deno.test("findMax should return undefined for an empty array", () => {
  assertEquals(findMax([]), undefined);
});

Deno.test("findMax should handle arrays with duplicate numbers", () => {
  assertEquals(findMax([7, 7, 7]), 7);
});

Deno.test("findMax should handle large numbers", () => {
  assertEquals(findMax([1, 1000000000, 500000000]), 1000000000);
});
