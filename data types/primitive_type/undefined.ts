let x: undefined;
console.log(x); // undefined

let y;
console.log(y); // undefined (implicitly typed) -> Typescript infers it automatically

function greet(name ?: string){
    console.log(name); // undefined if no argument is passed
}
greet(); // undefined

let undData: undefined | string = undefined;
let val: null = null;

console.log(typeof undData) // undefined

console.log(val == undData)  // -> true (both represent an "absence of value.")
console.log(val === undData) // -> false
