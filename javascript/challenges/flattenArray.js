//Follow up:
//1) Can we do this without using separate helper function (use concat to add to out array i.e. out = out.concat(flattenArray(arr)))
//2) How to do this using inbuilt functions (array.flat, flatMap)

function flattenArray(arr){
	let out = []
  flattenHelper(arr, out)
  return out
}

function flattenHelper(arr, out){
	for(let i = 0; i < arr.length; i++){
  	if(!Array.isArray(arr[i])){
    	out.push(arr[i])
    } else {
    	flattenHelper(arr[i], out)
    }
  }
}

let arr = [1,[2,3,4, [5,6,7]], 8, 9, 10, [11,12,13]]
console.log(flattenArray(arr))
let arr1 = [1,2,3,4,5,6,7,8,9,10, 11,12,13]
console.log(flattenArray(arr1))