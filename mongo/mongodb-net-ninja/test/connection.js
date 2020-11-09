/**
 * Doubts:
 * 1) How is 'done' working for async part in mocha tests
 * 2) How is this connection.js file running when we run mocha test (using npm run test)
 */
const mongoose = require('mongoose');

//Use ES6 promises instead of Promise from mongoose library
mongoose.Promise = global.Promise;

//Mocha 'before' hook. Connect to database before tests run
before(function(done){
  //Connect to MongoDB database testaroo. If no such database exists it will be created
  mongoose.connect('mongodb://localhost/testaroo');
  
  mongoose.connection.once('open', function() {
    console.log('Connection established Successfully...')
    done();
  }).on('error', function(err) {
    console.log('Connection error: ', err)
  })
})

//Drop the characters collection before each test
beforeEach(function(done) {
  //Drop the collection
  mongoose.connection.collections.mariochars.drop(function() {
    done();
  })
})
