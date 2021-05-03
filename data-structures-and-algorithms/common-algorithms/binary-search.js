//Time complexity  : O(logN)
//Space complexity : O(1)
function binarySearch(arr, el){
  let low = 0, high = arr.length -1;
  while(low <= high){
    let mid = low + Math.floor((high - low) / 2);
    if(arr[mid] === el){
      return mid
    }
    if(arr[mid] > el){
      high = mid - 1;
    } else if(arr[mid] < el){
      low = mid + 1;
    }
  }
  return -1
}

let arr = [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176]
console.log(arr1.length, binarySearch(arr1, 0))

console.log(search([7,8,0,1,2,4,5,6], 8))
console.log(search([7,8,0,1,2,4,5,6], 5))
console.log(search([7,8,0,1,2,4,5,6], 0))

console.log(search([2,4,5,6,7,0,1], 7))
console.log(search([2,4,5,6,7,0,1], 4))
console.log(search([2,4,5,6,7,0,1], 0))

console.log(search([7,0,1,2,4,5,6], 7))