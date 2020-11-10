var counter = function(arr) {
  console.log('There are ' + arr.length + ' elements in the array');
}

var adder = function(a, b) {
  console.log('Sum of a and b is ' + (a + b) );
}

module.exports = {
  counter,
  adder
}