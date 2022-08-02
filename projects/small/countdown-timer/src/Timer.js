import React, { useState, useEffect, useCallback } from "react";

function Timer({ duration, expireCb }) {
  const [remainingDuration, setRemainingDuration] = useState(duration);
  
  const SECOND = 1000;
  const MINUTE = 60*SECOND;
  const HOUR = 60*MINUTE;
  const DAY = 24*HOUR;

  useEffect(() => {
    // called on mount and then every update

    let timer;
    if (remainingDuration >= 1000) {
      timer = setTimeout(() => {
        setRemainingDuration(remainingDuration - 1000); //when would we need to set timer with function rather than direct
      }, 1000);
    } else {
      expireCb();
    }

    return () => {
      // called before component update or unmount
      clearTimeout(timer);
    }
  }, [remainingDuration, expireCb]);

  const convertDurationToFormat = useCallback(
    (time) => {
      // the below works without having to keep a updating remainder variable
      // this is because the values: DAY, HOUR, MINUTE, SECOND are multiples of each other from left to right
      // this won't work other wise
      const days = Math.floor(time / DAY);
      const hours = Math.floor((time % DAY) / HOUR);
      const minutes = Math.floor((time % HOUR) / MINUTE);
      const seconds = Math.floor((time % MINUTE) / SECOND);

      return `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    },
    [remainingDuration]
  );

  return (
    <>
      <div className="timer">Time left: {convertDurationToFormat(remainingDuration)}</div>
    </>
  );
}

export default Timer;
