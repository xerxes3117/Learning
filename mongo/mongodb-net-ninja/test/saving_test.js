const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Saving Records', function() {

  it('Saves a record to the database', function(done) {
    //Creating an instance of the model
    var char = new MarioChar({
      Name: 'Mario'
    }) 
    //char.save() operation is asynchronous because we are connecting to the database
    char.save().then(function() {
      //char.isNew returns true if 'char' is a new record for the database
      assert(char.isNew === false);
      done();
    })
  })
});