const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarioCharSchema = new Schema({
  Name: String,
  Weight: Number
})

//'mariochar' is the collection name in the connected database (from connection.js file) where this model's data is stored
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;