const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Deleting Records', function() {

  var char;

  beforeEach(function(done) {
    //Creating an instance of the model
    char = new MarioChar({
      Name: 'Mario'
    }) 
    //char.save() operation is asynchronous because we are connecting to the database
    char.save().then(function() {
      done();
    });
  })

  it('Deletes one record from the database', function(done) {
    MarioChar.findOneAndRemove({Name: 'Mario'}).then(function(result) {
      MarioChar.findOne({Name: 'Mario'}).then(function(record) {
        assert(record === null);
        done();
      })
    }) 
  })
});