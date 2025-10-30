let users: string[] = ["John", "Snow", "Peter"];
let marks: number[] = [50, 40, 30];
// OR
let users2: Array<string> = ["John", "Snow", "Peter"];

// Read Only array cant push new values to it
let readOnlyArr: ReadonlyArray<string> = ["John", "Snow", "Peter"];

// readOnlyArr.push("Sam") // <- cannot modify readonly array

// Empty array
let emptyArr: number[] = [];

// 2d Array
let matrix: number[][] = [[1, 2], [3, 4], [5, 6]];