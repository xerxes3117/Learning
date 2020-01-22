function bubbleSort(arr) {
  var noSwaps;
  for (i = arr.length - 1; i > 0; i--) {
    noSwaps = true;
    for (j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwaps = false;
        swap(arr, j, j + 1);
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

function swap(arr, indx1, indx2) {
  [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
}

arr = [33, 23, 1, 45, 677, 32];
console.log(bubbleSort(arr));
