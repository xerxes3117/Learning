//Given an array of N (natural) integers. return the largest number K (K>0) only if K and -K exist in the array, 
//if there's no such number return 0. For example if arr=[4,-4, 3, -3, 2], should return 4, and arr=[-2,0,0,-3] should return 0. 
//I think the algorithm should solve this in O(N).

var arr1 = [4,1,22,-3,-4,12,9, -22];
var arr2 = [4,1,22,-3,-64,12,9];

function findLargest(arr){
	let max = arr1[0];
  let hasNegative = false;
	for(let i = 0;i < arr.length;i++){
  	if(arr[i] > max){
    	max = arr[i];
    }
  }
  for(let i = 0; i< arr.length; i++){
  	if(arr[i]*-1 == max){
    	hasNegative = true;
    }
  }
  if(hasNegative){
  	return max;
  } else {
  	return 0;
  }
}

console.log(findLargest(arr1));
console.log(findLargest(arr2));
