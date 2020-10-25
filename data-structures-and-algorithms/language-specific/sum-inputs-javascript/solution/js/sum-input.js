function sumInput() {
    let nums = [];
    let val = 0;

    do {
      val = prompt("Enter number", 0);
      nums.push(val);
    } while (val != null && val !== '' && isFinite(val));
 
    nums.pop()
    let sum = 0;
    for (let num of nums) {
     sum += +num;
    }
    return sum;
 }