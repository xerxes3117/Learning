import {gql} from '@apollo/client'

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getBookQuery = gql`
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

export {getAuthorsQuery, getBookQuery, addBookMutation}