//Learning about closures

//how to create private variable using closure?
function CreateVar() {
  var privateVar = 0;
  this.getVar = function() {
    return privateVar
  }
  this.increment = function() {
    privateVar++
  }
}

let increment = new CreateVar();
console.log(increment());
console.log(increment());
console.log(increment());


//closure in loops
//closure with hooks
