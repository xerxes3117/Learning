import React, {useState} from 'react'
import Timer from './Timer'

function CountdownTimer() {

  const [expired, setExpired] = useState(false);

  const expireCb = () => {
    setExpired(true)
    console.log('Calling expireCb!')
  }

  const beforeResetCb = () => {
    console.log('Calling beforeResetCb!')
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        setExpired(false);
        console.log('callback completed, resetting timer!!')
      }, 3000)
    })
  }

  return (
    !expired ? <Timer 
      duration={10*1000}
      expireCb={expireCb}
      beforeResetCb={beforeResetCb}
    /> : 
    <button onClick={async () => { await beforeResetCb()}}>Reset</button>
  )
}

export default CountdownTimer