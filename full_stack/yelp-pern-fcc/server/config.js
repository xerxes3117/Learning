//Common Config file for exporting all environment variables

//dotenv reads the variables defined in your .env file and maps them to process.env
require('dotenv').config();
module.exports = {
  PORT: process.env.PORT || 4000
}