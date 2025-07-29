// max.bench.ts
import { findMax, findMaxWithMathMax, findMaxWithReduce } from "./max.ts"; // Your manual loop implementation

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
  group: "Small Array Comparison",
  baseline: true,
  fn() {
    findMax(smallArray);
  },
});

Deno.bench({
  name: "findMax (Math.max)",
  group: "Small Array Comparison",
  fn() {
    findMaxWithMathMax(smallArray);
  },
});

Deno.bench({
  name: "findMax (Reduce)", // New benchmark
  group: "Small Array Comparison",
  fn() {
    findMaxWithReduce(smallArray);
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

Deno.bench({
  name: "findMax (Reduce)", // New benchmark
  group: "Medium Array Comparison",
  fn() {
    findMaxWithReduce(mediumArray);
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

Deno.bench({
  name: "findMax (Reduce)", // New benchmark
  group: "Large Array Comparison",
  fn() {
    findMaxWithReduce(largeArray);
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

Deno.bench({
  name: "findMax (Reduce)", // New benchmark
  group: "Very Large Array Comparison",
  fn() {
    findMaxWithReduce(veryLargeArray);
  },
});

// --- Optional: Edge Cases (keep as needed) ---
Deno.bench({
  name: "findMax (Manual) - Empty Array",
  group: "Empty",
  fn() {
    findMax([]);
  },
});

Deno.bench({
  name: "findMax (Math.max) - Empty Array",
  group: "Empty",
  fn() {
    findMaxWithMathMax([]);
  },
});

Deno.bench({
  name: "findMax (Reduce) - Empty Array",
  group: "Empty",
  fn() {
    findMaxWithReduce([]);
  },
});
