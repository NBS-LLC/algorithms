// sum.test.ts
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts"; // Note: Use the latest stable version of Deno Std Library
import { sum } from "./sum.ts"; // Assuming sum.ts is in the same directory

Deno.test("sum should return the correct sum for positive numbers", () => {
  assertEquals(sum(1, 2), 3);
});

Deno.test("sum should return the correct sum for zero", () => {
  assertEquals(sum(0, 0), 0);
});

Deno.test("sum should return the correct sum for negative numbers", () => {
  assertEquals(sum(-1, -2), -3);
});

Deno.test("sum should return the correct sum for a positive and a negative number", () => {
  assertEquals(sum(5, -3), 2);
});

Deno.test("sum should handle large numbers correctly", () => {
  assertEquals(sum(1000000, 2000000), 3000000);
});
