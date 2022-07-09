import React from 'react'
import Timer from './Timer'

function CountdownTimer() {

  const expireCb = () => {
    console.log('Calling expireCb!')
  }

  return (
    <Timer 
      duration={60*60*1000}
      expireCb={expireCb}
    />
  )
}

export default CountdownTimer