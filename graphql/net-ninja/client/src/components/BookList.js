import {useState} from 'react'
import { useQuery } from '@apollo/client';
import {getBooksQuery} from '../queries/queries'

import BookDetails from './BookDetails';

function BookList() {

    const [showBookDetails, updateShowBookDetails] = useState(false)
    const [selected, updateSelected] = useState(null);
    const { loading, error, data} = useQuery(getBooksQuery);

    if(loading) {
      return <p>Loading....</p>
    }
    if(error) {
      return <p>Ops! Something went wrong</p>
    }

    const bookClickHandler = (id) => {
      updateShowBookDetails(true)
      updateSelected(id)
    }

    return (
      <>
        <ul>
          {data.books.map(book => (
            <li key={book.id} onClick={() => bookClickHandler(book.id)}>{book.name}</li>
          ))}
        </ul>
        { showBookDetails &&
          <BookDetails selectedId={selected}/>
        }
      </>
    )
}

export default BookList;