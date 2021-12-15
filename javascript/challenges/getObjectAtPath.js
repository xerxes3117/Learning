//Implement lodash.get function https://lodash.com/docs/4.17.15#get 

//Implementations 1
function getObjectAtPath1(obj, path){
	let pathKeys = path.split(".")
  
  let currVal = obj;
  for(let i = 0; i < pathKeys.length; i++){
  	currVal = currVal[pathKeys[i]]
  	if(!currVal){
    	break;
    }
  }
  return currVal
}

//---------------------------------------------------------------------------------------------------------------------------------------------------- 

//Implementations 2 (using reduce)

//In below solution arr.splice(0) removes all elements form pathKeys array thus stopping the reduce as array has no elements left
//Note that this will modify the existing pathKeys array
function getObjectAtPath2(obj, path){
	let pathKeys = path.split(".")
  
  return pathKeys.reduce((acc, curr, _, arr) => {
  	if(!acc[curr]){
      arr.splice(0) 
    }
    return acc[curr]
  }, obj)
}

const inputObject = {a:{b: {c: 1, d: 2}}};


//Testcases
console.log(getObjectAtPath1(inputObject, 'a.b.c')); // 1
console.log(getObjectAtPath1(inputObject, 'a.b')); // {c : 1}
console.log(getObjectAtPath1(inputObject, 'a.c')); // undefined
console.log(getObjectAtPath1(inputObject, 'a.d.c')); // undefined
console.log(getObjectAtPath1(inputObject, 'a.b.d')); // 2
console.log(getObjectAtPath1(inputObject, 'a.b.f')); // undefined

console.log(getObjectAtPath2(inputObject, 'a.b.c')); // 1
console.log(getObjectAtPath2(inputObject, 'a.b')); // {c : 1}
console.log(getObjectAtPath2(inputObject, 'a.c')); // undefined
console.log(getObjectAtPath2(inputObject, 'a.d.c')); // undefined
console.log(getObjectAtPath2(inputObject, 'a.b.d')); // 2
console.log(getObjectAtPath2(inputObject, 'a.b.f')); // undefined