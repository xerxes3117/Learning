//Pre condition for binary search: Array should be sorted

/**
 * Iterative binary search
 * Time complexity  : O(logN)
 * Space complexity : O(1)
 */
function binarySearchIterative(arr, el){
  let low = 0, high = arr.length -1;
  while(low <= high){
    //Reason why use below formula for mid rather than (low + high)/2 : Go to bottom -> https://www.geeksforgeeks.org/binary-search/ 
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

/**
 * Recursive binary search
 * Time complexity : O(logN)
 * Space complexity : O(logN) because of logN recursive calls logN stack frames are created
 */
function binarySearchRecursive(arr, el, low, high){
  //Reason why use below formula for mid rather than (low + high)/2 : Go to bottom -> https://www.geeksforgeeks.org/binary-search/ 
  let mid = low + Math.floor((high - low)/2)
  if(low > high){
    return -1
  }
  if(arr[mid] == el){
    return mid
  } else if(arr[mid] > el){
    high = mid -1;
  } else {
    low = mid +1;
  }
  return binarySearchRecursive(arr, el, low, high);
}


//Test cases
let arr = [1]
console.log(arr.length, binarySearchIterative(arr, 1))
// console.log(arr.length, binarySearchRecursive(arr, 176, 0, arr.length -1))