import React from 'react'
import Timer from './Timer'

function CountdownTimer() {

  const expireCb = () => {
    console.log('Calling expireCb!')
  }

  const beforeResetCb = () => {
    console.log('Calling beforeResetCb!')
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        console.log('callback completed, resetting timer!!')
      }, 3000)
    })
  }

  return (
    <Timer 
      duration={60*60*1000}
      expireCb={expireCb}
      beforeResetCb={beforeResetCb}
    />
  )
}

export default CountdownTimer