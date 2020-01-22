function quickSort(arr, left = 0, right = arr.length -1){
  if(left < right) {
    let pivotIndex = pivot(arr, left, right)
    //sort left array
    quickSort(arr, left, pivotIndex -1)
    //sort right array
    quickSort(arr, pivotIndex +1, right)
  }
  return arr;
}

//function to place the pivot element at its correct position
function pivot(arr, start=0, end = arr.length -1){
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  let swapIdx = start;
  let pivot = arr[start]
  for(i = start +1; i <= end; i++){
    if(pivot > arr[i]){
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, swapIdx, start)
  return swapIdx
}

console.log(quickSort([4,8,2,1,5,7,6,3]))