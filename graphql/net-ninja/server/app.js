const express = require('express');
const {graphqlHTTP} = require('express-graphql')
const mySchema  = require('./schema/schema')
const mongoose = require('mongoose')

const app = express();

//Database connection
//testgql is our database
//book and author are collections in this database
mongoose.connect('mongodb+srv://admin:combination@cluster0.e8xrn.mongodb.net/testgql?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB')
})

//Adding graphql as a middleware
//Basically this is telling Node that any request to route '/graphql' can be handled through this graphql schema code
app.use('/graphql', graphqlHTTP({
  schema: mySchema,
  graphiql: true 
}));

app.listen(4000, function () {
  console.log('Running express server on port 4000')
})