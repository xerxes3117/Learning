const graphql = require('graphql');
const {
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema, 
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const Book = require('../models/book')
const Author = require('../models/author')

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString},
    name: { type: GraphQLString},
    genre: { type: GraphQLString},
    author: {
      type: AuthorType,
      resolve(parent, args) {
        //'parent' here refers to parent data object in which this resolve is called (i.e. book object here)
        return Author.findById(parent.authorId)
      }
    }
  })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLString},
    name: { type: GraphQLString},
    age: { type: GraphQLInt},
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find(parent.id)
      }
    }
  })
})

/**
 * List of RootQueries
 * RootQueries are used to access data using graphql query
 */
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  //fields consists of all the rootqueries that can access graphql data
  fields: {
    //book is a root query to access a bookType object
    book: {
      type: BookType,
      //args can used in graphQL query to access book data by a particular argument (eg. if we want to get book with id = '123')
      args: {id: {type: GraphQLID}}, 
      resolve(parent, args){
        //code to get data from DB
        return Book.findById(args.id)
      }
    },
    //author is a root query to access a AuthorType object
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return Author.findById(args.id)
      }
    },
    //query to fetch all books
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args){
        //return books
        return Book.find({})
      }
    },
    //query to fetch all authors
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args){
        //return authors
        return Author.find({})
      }
    }
  }
})

/**
 * List of mutations:
 * Mutations are used to update data through a graphql query
 */
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString)},
        age: { type: new GraphQLNonNull(GraphQLInt)},
      },
      resolve(parent, args) {
        //Create a author using mongoose model 'Author'
        let author = new Author({
          name: args.name,
          age: args.age
        });
        return author.save();
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString)},
        genre: { type: new GraphQLNonNull(GraphQLString)},
        authorId: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve(parent, args) {
        //Create a book using mongoose model 'Book'
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId
        });
        return book.save();
      }
    }
  }
}) 

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})