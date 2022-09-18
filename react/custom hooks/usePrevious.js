/**
 * Demo: https://codesandbox.io/s/useprevious-hook-6j6dk1 
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
