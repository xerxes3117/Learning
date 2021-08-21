
console.log(myVar); // undefined - declared from within the catch,
// but in the current VariableEnvironment
// console.log(c1)
let c1 = 6;

let b1;
console.log(b1)

console.log(typeof ex); // undefined - no binding
try {
console.log(ex); // a ReferenceError in this LexicalEnvironment
} catch (ex) { // introducing the new LexicalEnvironment
console.log(ex); // …and it works here!
var myVar = 3; // variable declaration
}

if(true){
let myVar1 = 4;
var myVar2 = 5;
let c = 10;
}

if(true){
let myVar1 = 4;
var myVar2 = 5;
let c = 10;
}

console.log(myVar)
console.log(c)
console.log(myVar2)