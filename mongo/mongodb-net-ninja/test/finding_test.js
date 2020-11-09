const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Finding Records', function() {

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


  it('Finds one record from the database by Name', function(done) {
    MarioChar.findOne({Name: 'Mario'}).then(function(result) {
      assert(result.Name === 'Mario');
      done();
    })  
  })

  it('Finds one record from the database by ID', function(done) {
    MarioChar.findOne({_id: char._id}).then(function(result) {
      assert(result._id.toString() === char._id.toString()); //Record ID is of type Object so we need to convert it to String to get ID values
      done();
    })  
  })
});