import {useEffect} from 'react'
import { gql, useQuery } from '@apollo/client';

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

function AddBook() {
  
    const {loading, error, data} = useQuery(getAuthorsQuery);

    const authorsData = loading ? 
                          <option>Loading...</option> 
                          : 
                          data.authors.map((author => (<option value={author.name} key={author.id}>{author.name}</option>)))

    return (
      <form id="add-book">
        <div className="field">
          <label>Book name:</label>
          <input type="text"/>
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text"/>
        </div>
        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select Author</option>
            {authorsData}
          </select>
        </div>
        <button>+</button>
      </form>
    )
}

export default AddBook;