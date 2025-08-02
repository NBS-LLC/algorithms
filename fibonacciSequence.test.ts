import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { findNthFibonacci } from "./fibonacciSequence.ts";

Deno.test("findNthFibonacci returns 0 for n = 0", () => {
  assertEquals(findNthFibonacci(0), 0);
});

Deno.test("findNthFibonacci returns 1 for n = 1", () => {
  assertEquals(findNthFibonacci(1), 1);
});

Deno.test("findNthFibonacci returns correct value for a small positive n (e.g., n = 5)", () => {
  assertEquals(findNthFibonacci(5), 5); // F_5 = 5 (0, 1, 1, 2, 3, 5)
});

Deno.test("findNthFibonacci returns correct value for n = 10", () => {
  assertEquals(findNthFibonacci(10), 55);
});
