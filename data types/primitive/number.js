// =============================================================
// #1. Duplicate Variable Error Explanation
// =============================================================
// Without a tsconfig.json file, TypeScript treats all files as part
// of a single global project. So if 'num2' exists in both number.ts
// and number.js, TypeScript throws an error:
//
// ❌ Error: Cannot redeclare block-scoped variable 'num2'.
//
// Example:
// var num1: number = 30;
// let num2: number = 30;
// =============================================================
// =============================================================
// #2. Binary, Octal & Hexadecimal Values in TypeScript
// =============================================================
// We can’t use these values directly without prefixes.
// Prefixes:
//   - Binary       → 0b
//   - Octal        → 0o
//   - Hexadecimal  → 0x
// =============================================================
var binaryVal = 10; // = 10 in decimal
var octalVal = 31; // = 31 in decimal
var hexVal = 0x1f; // = 31 in decimal
