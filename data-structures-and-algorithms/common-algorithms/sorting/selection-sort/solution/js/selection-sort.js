function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let minIndex = i
    for (j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j 
    }
    if(minIndex != i) swap(arr, i, minIndex)
  }
  return arr;
}

function swap(arr, indx1, indx2) {
  [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
}

arr = [33, 23, 1, 45, 677, 32];
console.log(selectionSort(arr));
