import { removeDuplicatesInPlace, removeDuplicates } from "./removeDuplicates.ts";

/**
 * Generates a large sorted array with a given size and approximate ratio of unique elements.
 * @param size The total number of elements in the array.
 * @param uniqueRatio The approximate ratio of unique elements (e.g., 0.1 for 10% unique).
 */
function generateLargeSortedArray(size: number, uniqueRatio: number = 0.5): number[] {
  const arr: number[] = [];
  let currentNum = 0;
  for (let i = 0; i < size; i++) {
    arr.push(currentNum);
    // Increment currentNum based on uniqueRatio to introduce duplicates
    if (Math.random() < uniqueRatio) {
      currentNum++;
    }
  }
  return arr;
}

/**
 * Formats bytes into a human-readable string (e.g., KB, MB).
 */
function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

console.log("Starting memory comparison example...");

// Configure a large array size and a low unique ratio to maximize duplicates
// and highlight the memory difference for the non-in-place solution.
const ARRAY_SIZE = 5_000_000; // 5 million elements
const UNIQUE_RATIO = 0.05;    // Only 5% unique elements on average

console.log(`\nGenerating an array of ${ARRAY_SIZE} elements with ~${UNIQUE_RATIO * 100}% unique values...`);
// Create two separate copies of the original array to ensure independent tests
let originalArrayForInPlace = generateLargeSortedArray(ARRAY_SIZE, UNIQUE_RATIO);
let originalArrayForNonInPlace = [...originalArrayForInPlace]; // Spread operator creates a shallow copy

console.log(`Approximate memory for original array: ${formatBytes(ARRAY_SIZE * 8)} (assuming 8 bytes/number for JS number type)`);

// --- In-place solution memory usage ---
console.log("\n--- In-place Solution (removeDuplicatesInPlace) ---");

// Capture memory before running the in-place solution
const memoryBeforeInPlace = Deno.memoryUsage();
console.log("Memory before execution:");
console.log(`  Heap Used: ${formatBytes(memoryBeforeInPlace.heapUsed)}`);
console.log(`  RSS: ${formatBytes(memoryBeforeInPlace.rss)}`);

// Run the in-place solution
const kInPlace = removeDuplicatesInPlace(originalArrayForInPlace);
console.log(`Result (k): ${kInPlace} unique elements`);

// Capture memory after running the in-place solution
const memoryAfterInPlace = Deno.memoryUsage();
console.log("Memory after execution:");
console.log(`  Heap Used: ${formatBytes(memoryAfterInPlace.heapUsed)}`);
console.log(`  RSS: ${formatBytes(memoryAfterInPlace.rss)}`);

console.log("\nMemory Change (In-place):");
console.log(`  Heap Used Delta: ${formatBytes(memoryAfterInPlace.heapUsed - memoryBeforeInPlace.heapUsed)}`);
console.log(`  RSS Delta: ${formatBytes(memoryAfterInPlace.rss - memoryBeforeInPlace.rss)}`);


// --- Non-in-place solution memory usage ---
console.log("\n--- Non-in-place Solution (removeDuplicates) ---");

// Capture memory before running the non-in-place solution
const memoryBeforeNonInPlace = Deno.memoryUsage();
console.log("Memory before execution:");
console.log(`  Heap Used: ${formatBytes(memoryBeforeNonInPlace.heapUsed)}`);
console.log(`  RSS: ${formatBytes(memoryBeforeNonInPlace.rss)}`);

// Run the non-in-place solution
const newArrayNonInPlace = removeDuplicates(originalArrayForNonInPlace);
console.log(`Result (k): ${newArrayNonInPlace.length} unique elements`);

// Capture memory after running the non-in-place solution
const memoryAfterNonInPlace = Deno.memoryUsage();
console.log("Memory after execution:");
console.log(`  Heap Used: ${formatBytes(memoryAfterNonInPlace.heapUsed)}`);
console.log(`  RSS: ${formatBytes(memoryAfterNonInPlace.rss)}`);

console.log("\nMemory Change (Non-in-place):");
console.log(`  Heap Used Delta: ${formatBytes(memoryAfterNonInPlace.heapUsed - memoryBeforeNonInPlace.heapUsed)}`);
console.log(`  RSS Delta: ${formatBytes(memoryAfterNonInPlace.rss - memoryBeforeNonInPlace.rss)}`);

console.log("\n--- How to Interpret the Results ---");
console.log("1.  **Heap Used Delta:** This is the most direct indicator of memory allocated by JavaScript objects.");
console.log("    * For the **in-place** solution, you should see a very small or even negative delta (due to internal V8 optimizations or garbage collection cycles).");
console.log("    * For the **non-in-place** solution, you should see a significant positive delta, roughly corresponding to the memory needed for the *new array* that holds the unique elements.");
console.log(`    Expected memory for new array in non-in-place: ~${formatBytes(kInPlace * 8)}`);
console.log("2.  **RSS Delta (Resident Set Size):** This indicates the total memory the Deno process is holding in RAM.");
console.log("    * It will often show a similar trend to 'Heap Used' but can be less precise for small changes as it includes other process memory.");
console.log("\n**Expect the non-in-place solution to show a significantly larger 'Heap Used Delta' due to the allocation of a new array proportional to the output size.**");
