import React, {useState} from 'react'

function HooksCounterFour() {

  const [items, setItems] = useState([]);

  const addItem = (item) => {
    //useState doesn't automatically merge the provided item to items array.
    //So we use spread operator 
    setItems([...items, {
      id: items.length, 
      value: Math.floor(Math.random() * 100) + 1,
    }])
  }

  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item => (
          <li key={item.id }>{items.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default HooksCounterFour
