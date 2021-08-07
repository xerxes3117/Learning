/**
 * Illustration: https://visualgo.net/en/heap 
 * Time complexity: O(N) Why: https://stackoverflow.com/a/18742428/8425685 
 * This function converts any array to max heap
 * @param {*} arr : array to convert
 */
function maxHeapify(arr) {
  //Compare each parent with their children (parent elements end at length/2)
  for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
    shiftdown(arr, i);
  }
}

/**
 * This function compares each parent with its children and shifts it downwards unless either of below condition is met:
 * 1) Parent is largest element among itself, left child and right child
 * 2) Parent has reached max height in tree (i.e. it is a leaf node)
 * @param {*} arr 
 * @param {*} i 
 */
function shiftdown(arr, i) {
  //If parent is a leaf node no need to shift down (single node is already a heap in itself)
  if (i > arr.length / 2) {
    return;
  }
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;
  //Update largest to element which is largest among parent, left and right child
  if (arr[i] < arr[left]) {
    largest = left;
  }
  if (arr[largest] < arr[right]) {
    largest = right;
  }
  //If largest is not the parent itself (ith element) then we need to swap it with largest element
  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]
    //Recursive call till parent is heapified (i.e. any of above 2 conditions is followed)
    shiftdown(arr, largest)
  }
}

//Tests
let arr = [2, 7, 26, 25, 19, 17, 1, 90, 3, 36];
let arr1 = [24, 55, 7, 57, 91, 68, 42, 6, 43, 32, 15, 83, 53]
maxHeapify(arr1)
console.log(arr1)