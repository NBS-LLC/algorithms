// max.bench.ts
import { findMax } from "./max.ts"; // Your manual loop implementation
import { findMaxWithMathMax } from "./max.ts"; // The Math.max implementation

// --- Helper function to generate test arrays ---
function generateRandomArray(size: number): number[] {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 10000) - 5000); // Numbers between -5000 and 5000
  }
  return arr;
}

// --- Define Test Data (re-use the same data for fair comparison) ---
const smallArray = generateRandomArray(10);
const mediumArray = generateRandomArray(1000);
const largeArray = generateRandomArray(100000);
const veryLargeArray = generateRandomArray(500000);

// --- Benchmarks for Small Array Comparison ---
Deno.bench({
  name: "findMax (Manual)",
  group: "Small Array Comparison", // Group for comparing algorithms on small array
  baseline: true, // Manual loop is the baseline for this group
  fn() {
    findMax(smallArray);
  },
});

Deno.bench({
  name: "findMax (Math.max)",
  group: "Small Array Comparison", // Same group as the manual loop for direct comparison
  fn() {
    findMaxWithMathMax(smallArray);
  },
});

// --- Benchmarks for Medium Array Comparison ---
Deno.bench({
  name: "findMax (Manual)",
  group: "Medium Array Comparison",
  baseline: true,
  fn() {
    findMax(mediumArray);
  },
});

Deno.bench({
  name: "findMax (Math.max)",
  group: "Medium Array Comparison",
  fn() {
    findMaxWithMathMax(mediumArray);
  },
});

// --- Benchmarks for Large Array Comparison ---
Deno.bench({
  name: "findMax (Manual)",
  group: "Large Array Comparison",
  baseline: true,
  fn() {
    findMax(largeArray);
  },
});

Deno.bench({
  name: "findMax (Math.max)",
  group: "Large Array Comparison",
  fn() {
    findMaxWithMathMax(largeArray);
  },
});

// --- Benchmarks for Very Large Array Comparison ---
Deno.bench({
  name: "findMax (Manual)",
  group: "Very Large Array Comparison",
  baseline: true,
  fn() {
    findMax(veryLargeArray);
  },
});

Deno.bench({
  name: "findMax (Math.max)",
  group: "Very Large Array Comparison",
  fn() {
    findMaxWithMathMax(veryLargeArray);
  },
});

// Optional: You can still have separate benchmarks for edge cases if you want.
Deno.bench({
  name: "findMax (Manual) - Empty Array",
  group: "Edge Cases",
  baseline: true, // Only if you want to compare against some other empty array handling.
  fn() {
    findMax([]);
  },
});

Deno.bench({
  name: "findMax (Math.max) - Empty Array",
  group: "Edge Cases",
  fn() {
    findMaxWithMathMax([]);
  },
});
