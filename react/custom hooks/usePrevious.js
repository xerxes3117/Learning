/**
 * 1) Demo: https://codesandbox.io/s/useprevious-hook-6j6dk1 
 * 2) Problem statement & Solution: 
 *    - https://learnersbucket.com/examples/interview/useprevious-hook-in-react/ 
 *    - https://www.30secondsofcode.org/react/s/use-previous
 */
import { useEffect, useRef } from "react";

const usePrevious = (count) => {
  const prevCountRef = useRef(undefined);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return prevCountRef.current;
};

export default usePrevious;
