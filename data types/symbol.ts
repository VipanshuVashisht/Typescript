let symb: symbol = Symbol(); // Explicit type annotation

let sym = Symbol(); // Type inference (recommended)
let sym2 = Symbol();

console.log(sym == sym2); // -> false
console.log(sym); // -> Symbol()
console.log(sym2); // -> Symbol()

// With same key values
let sym3 = Symbol('abc');
let sym4 = Symbol('abc');

console.log(sym3 == sym4) // -> false
console.log(sym3); // -> Symbol('abc')
console.log(sym4); // -> Symbol('abc')

// Use Case: Generating Dynamic ID
let id = Symbol('id');

const obj = {
    [id]: 100,
    name: 'John',
}

console.log(obj[id]); // ← VALUE is 100, KEY is Symbol#1