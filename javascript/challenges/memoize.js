//Memoize function based on argument. If same arguments provided, the function should not compute the values again

function memoGenerator(fn) {
  let cacheMap = new Map()

  // implement your own memo
  return function (...args) {
    let argVal = createCachedKeys(args)

    if (cacheMap.has(argVal)) {
      console.log("from cache")
      return cacheMap.get(argVal)
    } else {
      console.log("not from cache")
      let result = fn(...args)
      cacheMap.set(argVal, result)
      return result

    }
  }
}

function createCachedKeys(array) {
  return array.join('')
}

const memoArea = memoGenerator(area);
const memoSub = memoGenerator(sub);
const memoSum = memoGenerator(sum)
const memoArraySum = memoGenerator(arraySum)

//Testcases
console.log(memoArea(4)) // 16 // not from cache
console.log(memoArea(4)) // 16 // from cache
console.log(memoArea(3)) // 9 // not from cache
console.log(memoArea(4)) // 16 // From cache
console.log(memoArea(3)) // 9 // from cache

console.log(memoSub(4, 3)) // 1 // not from cache
console.log(memoSub(3, 4)) // -1 // not from cache
console.log(memoSub(4, 3)) // 1 // from cache
console.log(memoSub(3, 4)) // -1 // from cache

console.log(memoSum(4, 3)) // 7 // not from cache
console.log(memoSum(3, 4)) // 7 // not from cache
console.log(memoSum(4, 3)) // 7 // from cache
console.log(memoSum(3, 4)) // 7 // from cache

console.log(memoArraySum([1,2,3])) // 6 Not form cache
console.log(memoArraySum([1,2,3])) // 6 form cache
console.log(memoArraySum([2,3])) // 5 Not form cache
console.log(memoArraySum([2,3])) // 5 form cache
console.log(memoArraySum([1,2,3])) // 6 form cache