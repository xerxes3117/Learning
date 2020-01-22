function insertionSort(arr) {
  for(i = 1; i < arr.length; i++){
    let currentVal = arr[i]
    for(j = i -1; j >= 0 && arr[j] > currentVal; j--){
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal
  }
  return arr;
}

arr = [33, 23, 1, 45];
console.log(insertionSort(arr));
