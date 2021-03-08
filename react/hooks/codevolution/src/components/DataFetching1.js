import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFetching1() {

  const [post, setPost] = useState({})
  const [id, setId] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          console.log(response)
          setPost(response.data)
        })
        .catch((error) => console.error(error))
  }, [id])

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)}/>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => <li key={post.id}>{post.title} </li>)}
      </ul> */}
    </div>
  )
}

export default DataFetching1
