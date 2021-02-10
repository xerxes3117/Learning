import {gql} from '@apollo/client'

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query($id: ID) {
    book(id: $id){
      id
      name
      author {
        id
        name
        age
        books {
          id
          name 
        }
      }
    }
  }
`;

export {getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery}