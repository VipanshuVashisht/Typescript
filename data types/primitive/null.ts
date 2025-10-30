let nullData: null = null;
console.log(typeof nullData) // type of null is object

//We use null with union most of times
let nullData2: null | string = null; // explicitly no value
nullData2 = "john"; // now assigned a value