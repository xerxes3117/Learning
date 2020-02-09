function mergeSort(arr) {
    //Base case
    if(arr.length <= 1) {
      return arr
    } else {
     //Divide the array in equal parts
     let len = arr.length;
     let arrLeft = arr.slice(0, len/2)
     let arrRight = arr.slice(len/2, len)
     //Recursive call for both left and right array and then merge
     return merge(mergeSort(arrLeft), mergeSort(arrRight))
    }
 }
 
 //Merge function to merge 2 arrays in sorted order
 function merge(left, right) {
     let arrMerged = [];
     //Loop through left and right array and append the lower value to resulting array
     for(i = 0, j = 0; i < left.length && j < right.length;){
        if(left[i] < right[j]) {
          arrMerged.push(left[i])
          i++;         
        } else {
          arrMerged.push(right[j])
          j++;
        }
     }
     //Append the remaining elements from both arrays
     return arrMerged
           .concat(left.slice(i))
           .concat(right.slice(j)); 
 }

 let arr = [12,323,12,422,212,545,321,121,353,121,6565,1212,343,121,441,1,145]
 console.log(arr.length)
 console.log(mergeSort(arr))