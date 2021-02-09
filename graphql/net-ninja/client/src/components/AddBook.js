import {useState} from 'react'
import {useQuery, useMutation} from '@apollo/client';
import {getAuthorsQuery, addBookMutation, getBookQuery} from '../queries/queries'

function AddBook() {
  
    let [name, setName] =  useState('')
    let [genre, setGenre] =  useState('')
    let [authorId, setAuthorId] = useState('')

    const {loading, error, data} = useQuery(getAuthorsQuery);
    const [addBook, {mutationData}] = useMutation(addBookMutation)

    const authorsData = loading ? <option>Loading...</option> 
                                : data.authors.map((author => (<option value={author.id} key={author.id}>{author.name}</option>)))

    const submitForm = (e) => {
      e.preventDefault();
      addBook({
        variables: {name, genre, authorId}, 
        //This will refetch the getBookQuery from server and also re-render bookList component with updated data
        refetchQueries: [{query: getBookQuery}] 
      })
    }

    return (
      <form id="add-book" onSubmit={submitForm}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={(e) => setGenre(e.target.value)}/>
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={(e) => setAuthorId(e.target.value)}>
            <option>Select Author</option>
            {authorsData}
          </select>
        </div>
        <button>+</button>
      </form>
    )
}

export default AddBook;