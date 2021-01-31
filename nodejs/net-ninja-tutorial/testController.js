console.log('running test controller');

var unxposed = function() {
  console.log('unxposed called')
}

var exposed = function() {
  console.log('exposed called')
}

module.exports = {
  exposed: exposed,
}