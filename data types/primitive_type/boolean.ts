let booleanData1: boolean = true;
let booleanData2: boolean;
booleanData2 = booleanData1; // booleanData2 = true

let booleanData3: boolean = booleanData1 && booleanData2; // AND
let booleanData4: boolean = booleanData1 || booleanData2; // OR
let booleanData5: boolean = !booleanData1;               // NOT

function isTrue(value: boolean): boolean{
    return value === true;
}