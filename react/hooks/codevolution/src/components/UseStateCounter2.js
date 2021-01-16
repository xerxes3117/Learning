import React, { useState } from "react";

function Example() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  function incrementFive() {
    for (let i = 0; i < 5; i++) {
      //When updating state in loops,use callback function with previous state value to avoid stale state 
      setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div className="">
      Count : {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default Example;