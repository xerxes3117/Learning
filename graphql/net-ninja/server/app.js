 const express = require('express');
const {graphqlHTTP} = require('express-graphql')
const mySchema  = require('./schema/schema')

const app = express();

//Adding graphql as a middleware
//Basically this is telling Node that any request to route '/graphql' can be handled through this graphql schema code
app.use('/graphql', graphqlHTTP({
  schema: mySchema,
  graphiql: true 
}));

app.listen(4000, function () {
  console.log('Running express server on port 4000')
})