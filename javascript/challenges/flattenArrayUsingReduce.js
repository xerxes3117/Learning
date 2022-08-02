
function flattenArray(arr){
  return arr.reduce((acc, curr) => {
    if(Array.isArray(curr)){
      return [...acc, ...flattenArray(curr)];
    } else {
      return [...acc, curr];
    }
  }, [])
}

//Test Cases
let arr = [1,[2,3,4, [5,6,7]], 8, 9, 10, [11,12,13]]
console.log(flattenArray(arr))
let arr1 = [1,[2,3,4, [5,[6,7]]], 8, 9, 10, [11,12,13]]
console.log(flattenArray(arr1))
let arr2 = [1,2,3,4,5,6,7, 8, 9, 10, ,11,12,13]
console.log(flattenArray(arr2))