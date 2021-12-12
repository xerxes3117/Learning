//Todo:
//1) In 2nd implementation, make the function more generic in terms of arguments (i.e. should be callable like curried(1,3,4)(2,3)())
//2) In 2nd implementation, make the function more generic. The function should work for any function unlike the function sum also (eg. a function with more arguments)
//3) Go through - https://codeburst.io/perpetual-currying-in-javascript-5ae1c749adc5

// ------------------------------------------- Using + unary operator ----------------------------------------------------//
function curryFunc(func){
  const innerFn = function(a){
    let fn = (b) => innerFn(func(a,b))
      fn.valueOf = function(){
        return a
      }
      return fn
  }
  return innerFn
}

function multiply(a, b){
return a * b
}

function add(a, b){
return a + b
}

let curriedMultiply = curryFunc(multiply);
let curriedAdd = curryFunc(add);

//TestCases
console.log(+curriedMultiply(1)(2)(3))
console.log(+curriedMultiply(1)(2)(3)(4))
console.log(+curriedAdd(1)(2)(3))
console.log(+curriedAdd(1)(2)(3)(4))


// ------------------------------------------- Without using + unary operator but needs to be called with empty arguments  ----------------------------------------------------//
function curryFunc(func){
    const innerFn = function(a){
        return function(b) {
        	return b !== undefined ? innerFn(func(a,b)) : a;
        }
    }
    return innerFn
}

function multiply(a, b){
	return a * b
}

let curried = curryFunc(multiply);

//TestCases
console.log(curried(1)(2)(3)())
console.log(curried(1)(2)(3)(4)())


// ------------------------------------------- With different composed argument cases (Variadic Currying) ---------------------------------------------------- //

function curryFunc(func){
  const innerFn = function(...outerArgs){
    let outerSum = outerArgs.reduce(func)
      return function(...innerArgs) {
        if(innerArgs.length == 0){
            return outerSum
          } else {
            let innerSum = innerArgs.reduce(func)
            return innerFn(func(outerSum, innerSum))
          }
      }
  }
  return innerFn
}

function multiply(a, b){
return a * b
}

function add(a, b){
return a + b
}

let curriedMul = curryFunc(multiply);
let curriedAdd = curryFunc(add);

//TestCases
console.log(curriedMul(1)(2)(3)()) //6
console.log(curriedMul(1)(2)(3)(4)()) //24
console.log(curriedMul(1,2)(3,4)(5)()) //120
console.log(curriedMul(1,2,3)(4,5)(6)()) //720
console.log(curriedAdd(1)(2)(3)()) //6
console.log(curriedAdd(1)(2)(3)(4)()) //10
console.log(curriedAdd(1,2)(3)(4)()) //10 
console.log(curriedAdd(1,2)(3,4)(5)()) //15
console.log(curriedAdd(1,2,3)(4,5)(6)()) //21 
console.log(curriedAdd(1)(3)(4)(2)(45)());//55
console.log(curriedAdd(1,3,4)(2)(45)());//55 