const express = require('express');
const expressGraphQL = require('express-graphql'); //compatibilty layer between express and graphQL libraries
const schema = require('./schema/schema');

const app = express();

//graphiql is a development tool that allows us to make queries in our development server
//only used in development environment
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Listening on port: ', 4000);
})