import React, {useEffect, useState} from 'react'

function UseEffectCounter2() {

  const [count, setCount] = useState(0)

  const tick = () => {
    //console.log('calling tick. count is:' + count)
    setCount(prev => {
      console.log('count is:' + count)
      return prev + 1;
    })
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  
  return (
    <div>
      {count}
    </div>
  )
}

export default UseEffectCounter2
