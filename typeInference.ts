// Works in:
//   - Variable initialization
//   - Function returns
//   - Arrays and expressions
//   - Parameters with default values

// -------------------------------------------------------------
// 1️⃣ Variable Initialization
// -------------------------------------------------------------
let count = 10;          // inferred as number
let username = "Guru";   // inferred as string
let isOnline = true;     // inferred as boolean


// -------------------------------------------------------------
// 2️⃣ Function Return Types
// -------------------------------------------------------------
function add(a: number, b: number) {
  return a + b; // return type inferred as number
}
const result = add(5, 10); // inferred as number


// -------------------------------------------------------------
// 3️⃣ Arrays and Expressions
// -------------------------------------------------------------
let numbers = [1, 2, 3, 4]; // inferred as number[]
let totalSum = numbers.reduce((a, b) => a + b); // inferred as number


// -------------------------------------------------------------
// 4️⃣ Parameters with Default Values
// -------------------------------------------------------------
function greet(name = "Vipanshu") {
  console.log("Hello, " + name);
  // 'name' inferred as string
}
greet(); // Hello, Vipanshu


// -------------------------------------------------------------
// Works Only with a Single Data Type
// -------------------------------------------------------------
// Type inference only works when a variable is initialized
// with one specific type.
// -------------------------------------------------------------

var data = 10;       // inferred as number
data = 20;           // ✅ OK (still number)
// data = "Hello";   // ❌ Error — Type 'string' is not assignable to 'number'


// -------------------------------------------------------------
// If multiple types are needed → use a Union Type
// -------------------------------------------------------------
// var mixed: number | string;
// mixed = 10;        // ✅ OK
// mixed = "Hello";   // ✅ OK


// -------------------------------------------------------------
// Type Inference Fails When No Value Is Assigned
// -------------------------------------------------------------
// In this case, the variable is inferred as 'any'
// -------------------------------------------------------------

var something;  // inferred as 'any'
something = 10;
something = "hello"; // allowed because 'any'
