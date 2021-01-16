import React, {useState} from 'react'

function HooksCounter() {

  // count    - current value of state variable
  // setCount - function to update count (like setState)
  // 0        - initial value of state variable
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count)}>Count {count}</button>
    </div>
  )
}

export default HooksCounter
