const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Updating Records', function() {

  var char;

  beforeEach(function(done) {
    char = new MarioChar({
      Name: 'Mario',
      Weight: 10
    }) 

    char.save().then(function() {
      done();
    });
  });

  it('Updates one record in the database', function(done) {
    
    MarioChar.findOneAndUpdate({Name: 'Mario'}, {Name: 'Luigi'}).then(function() {
      MarioChar.findOne({_id: char._id}).then(function(result) {
        assert(result.Name === 'Luigi');
        done();
      })
    })
  })

  it('Increments the weight by 1', function(done) {
    
    MarioChar.update({}, {$inc : {Weight: 1}}).then(function() {
      MarioChar.findOne({_id: char._id}).then(function(result) {
        assert(result.Weight === 11);
        done();
      })
    })

  })
});