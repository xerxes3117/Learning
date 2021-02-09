import { useQuery } from '@apollo/client';
import {getBookQuery} from '../queries/queries'

function BookList() {
    const { loading, error, data} = useQuery(getBookQuery);

    if(loading) {
      return <p>Loading....</p>
    }
    if(error) {
      return <p>Ops! Something went wrong</p>
    }

    return (
      <>
        <ul>
          {data.books.map(book => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </>
    )
}

export default BookList;