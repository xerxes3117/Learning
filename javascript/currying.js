//https://codeburst.io/perpetual-currying-in-javascript-5ae1c749adc5

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

console.log(curried(1)(2)(3)())
console.log(curried(1)(2)(3)(4)())


// ------------------------------------------- With different composed argument cases (Variadic Currying) ---------------------------------------------------- //

//console.log(curried(1))
//console.log(curried(1, 2)(3)(4))
//console.log(curried(1, 2, 3, 4))