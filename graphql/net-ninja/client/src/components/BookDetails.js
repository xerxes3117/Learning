import {useState} from 'react'
import {useQuery} from '@apollo/client';
import {getBookQuery} from '../queries/queries'

export default function BookDetails({selectedId}) {

  const {loading, error, data} = useQuery(getBookQuery, {variables: {id: selectedId}});

  const bookEl = loading ? <div>Loading...</div> : 
    (
      <div className="BookDetails">
        <div>Name: {data.book.name}</div>
        <div>Author: {data.book.author.name}</div>
        <div>Author's other books:</div>
        <ul>
          {data.book.author.books.map(book => 
            book.id !== selectedId ? <li key={book.id}>{book.name}</li> : null
          )}
        </ul>
      </div>
    )

  return (
    <div id="book-details">
      <p>Book details:</p>
      {bookEl}
    </div>
  )
}


