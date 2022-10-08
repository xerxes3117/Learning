//LEVEL: MEDIUM

//Create deep clone of object
//Resources:
// 1) https://www.digitalocean.com/community/tutorials/copying-objects-in-javascript 
// 2) https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md#q3 
// 3) https://stackoverflow.com/a/18089155/8425685 
//@todo:
// 1) how to do the same if there are circular references present in the object
// 2) Pending issues with approach 3:
//    -  Arrays and function need to handled differently and individually. Currently you are not making clone in case of array and function object values. 


// -------------------------------- Method 1 : Object.assign (Clones only at top level) -------------------------------//
var student1 ={ 
  name : "Manish",
  company : "Gfg",
  info: {
    address: "delhi",
    phone: "981199119"
  }
}
var student2 =  { ...student1 } ;
var student4 = Object.assign({} ,student1) ;

// -------------------------------- Method 2 : Using JSON.stringify -------------------------------//

//This approach works only for non-method properties. Methods are not copied in clone because methods also contain a scope with them (see below code for example)
//See: https://stackoverflow.com/a/18089155/8425685
let obj = {
  name: 'scotch.io',
  exec: function exec() {
    return true;
  },
}

let method1 = Object.assign({}, obj);
let method2 = JSON.parse(JSON.stringify(obj));

console.log(method1); //Object.assign({}, obj)
/* result
{
  exec: function exec() {
    return true;
  },
  name: "scotch.io"
}
*/

console.log(method2); // JSON.parse(JSON.stringify(obj))
/* result
{
  name: "scotch.io"
}
*/

// -------------------------------- Method 3 : Using recursion -------------------------------//


function deepClone(obj){
  if(!obj){
    return obj
  }
	let clone = {}
  
  for(const key in obj){
    if(typeof obj[key] !== "object" || Array.isArray(obj[key])){
      clone[key] = obj[key]
    } else {
      clone[key] = deepClone(obj[key])
    }
  }
  return clone
}


// --------------------------- Testcases ------------------------ //
let objPerson = {
  name: 'vaibhav',
  phone: '98910066766',
  occupation: {
    location: 'bangalore',
    role: 'enginner'
  },
  details: {
    face: {
      eyes: 'black',
      teeth: 'white'
    },
    middle: {
      dimensions: {
        waist: 60,
        chest: 60
      }
    }
  },
  saySomething: function(){
    console.log('hello world')
  }
}
let clonedObj = deepClone(objPerson)
console.log(clonedObj)

//testing whether nested level properties are not affected in clone when changed in orignal
objPerson.name = 'aman'
objPerson.details.face.eyes = 'brown'
objPerson.occupation.role = 'senior enginner'
objPerson.saySomething = function(){
	console.log("hello old world")
}

//Testing value properties
console.log(objPerson.name)
console.log(objPerson.details.face.eyes)
console.log(objPerson.occupation.role)
console.log(clonedObj.name)
console.log(clonedObj.details.face.eyes)
console.log(clonedObj.occupation.role)
//testing function properties
objPerson.saySomething()
clonedObj.saySomething()