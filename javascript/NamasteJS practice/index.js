// console.log(myVar); // undefined - declared from within the catch,
// // but in the current VariableEnvironment
// // console.log(c1)
// let c1 = 6;

// let b1;
// console.log(b1)

// console.log(typeof ex); // undefined - no binding
// try {
// console.log(ex); // a ReferenceError in this LexicalEnvironment
// } catch (ex) { // introducing the new LexicalEnvironment
// console.log(ex); // …and it works here!
// var myVar = 3; // variable declaration
// }

// if(true){
// let myVar1 = 4;
// var myVar2 = 5;
// let c = 10;
// }

// if(true){
// let myVar1 = 4;
// var myVar2 = 5;
// let c = 10;
// }

// console.log(myVar)
// console.log(c)
// console.log(myVar2)


// ----------------------------------------------------- Setimeout interview questions -----------------------------------------------------------------------------
// https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
// @todo: Run all these with debugger and check state in scope chain and call stack
//Using var
function x0() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, i*1000);
  }
}

//Using let
function x1() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, i*1000);
  }
}

//IIFE
function x2() {
  for (var i = 1; i <= 5; i++) {
    (function inner(i){
      setTimeout(function () {
        console.log(i);
      }, i*1000);
    })(i);
  }
}

//Using another function
function x5() {
  for (var i = 1; i <= 5; i++) {
    function close(j) {
      setTimeout(function () {
        console.log(j);
      }, j * 1000);
    }
    close(i);
  }
}

//Using arrow function
function x3() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => console.log(i), i*1000);
  }
}

//Using forEach function
function x4() {
  var arr = [1,2,3,4,5];
  arr.forEach(function(d) {
    setTimeout(function () {
      console.log(d)
    }, d * 1000)
  });
}

// console.log("Running x0() using var");
// x0();
// console.log("Running x1() using let");
// x1();
// console.log("Running x2() using iife");
// x2();
// console.log("Running x3() using arrow function");
// x3();
// console.log("Running x4() using forEach");
// x4();
// console.log("Running x5() using another nested function");
// x5();

// @todo : Check scope chain for each loop when below function is called
// @todo: Also check, what if we use while loop equivalent instead of for loop
function x() {
  debugger;
  for (var i = 0; i < 5; i++) {
    debugger;
    console.log(i);
  }
  debugger;
  for (let j = 0; j < 5; j++) {
    debugger;
    console.log(j);
  }
}

// function y(){
//   debugger;
//   {
//     let a = 1;
//   }
// }

// debugger;

// {
//   let a = 1;
//   var b = 2;
// }

// var c = 10;
// let d = 11;

x()
// y()