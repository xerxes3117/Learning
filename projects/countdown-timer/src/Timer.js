import React, {useState, useEffect, useCallback} from 'react'

function Timer({duration, expireCb, beforeResetCb}) {

  const [remainingDuration, setRemainingDuration] = useState(duration);
    
  useEffect(() => {
    if(!window.timer){
      window.timer = setInterval(() => {
        setRemainingDuration(prev => prev - 1000) //why need to set timer with function rather than direct
      }, 1000);
    }
  }, [])

  useEffect(() => {
    if(remainingDuration < 1000){
      clearInterval(window.timer);
      expireCb();
    }
  }, [remainingDuration])

  const convertDurationToFormat = useCallback(
    time => {
    let remaining = time;
    const days = Math.floor(remaining/(1000*60*60*24));
    remaining %= 1000*60*60*24;

    const hours = Math.floor(remaining/(1000*60*60));
    remaining %= 1000*60*60;

    const minutes = Math.floor(remaining/(1000*60));
    remaining %= 1000*60;

    const seconds = Math.floor(remaining/(1000));

    return `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`
  }, [remainingDuration])

  return (
    <>
      <div>Timer: {convertDurationToFormat(remainingDuration)}</div>
      <button onClick={async () => {
          await beforeResetCb()
          setRemainingDuration(duration)
        }}>Reset</button>
    </>
  )
}

export default Timer