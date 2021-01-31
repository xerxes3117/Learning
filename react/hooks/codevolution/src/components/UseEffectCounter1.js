import React, {useState, useEffect} from 'react'

function HooksCounter() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  //useEffect runs after every render of component
  //Callback function in 1st argument is run only when any of values in 2nd argument array change
  //To only run callback on initial render pass an empty array as 2nd argument
  useEffect(() => {
    document.title = `You clicked ${count} times`;

    //This returned function will be run when component unmounts
    return () => {
      console.log('Add component unmounting code here...')
    }
  }, [count])

  return (
    <div>
      <input type="text" value={name} onChange={setName(e => e.target.value)}/>
      <button onClick={() => setCount(count)}>Count {count}</button>
    </div>
  )
}

export default HooksCounter
