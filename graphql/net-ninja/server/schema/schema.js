const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

const books = [
  {name: 'Name of the Wind', genre: 'Fantasy', id: '1'},
  {name: 'The Final Empire', genre: 'Fantasy', id: '2'},
  {name: 'The Long Earth', genre: 'Sci-Fi', id: '3'}
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString},
    name: { type: GraphQLString},
    genre: { type: GraphQLString},
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  //fields consists of all the rootqueries that can access graphql data
  fields: {
    //book is a root query to access a bookType object
    book: {
      type: BookType,
      //args can used in graphQL query to access book data by a particular argument (eg. if we want to get book with id = '123')
      args: {id: { type: GraphQLString}}, 
      resolve(parent, args){
        //code to get data from DB
        return books.find(book => book.id == args.id)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})