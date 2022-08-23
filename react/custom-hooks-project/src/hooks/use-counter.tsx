import { useState, useEffect } from "react";

type Props = {
  incrementValue: number;
};

const useCounter = ({ incrementValue }: Props) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + incrementValue);
    }, 1000);

    return () => clearInterval(interval);
  }, [incrementValue]);

  return counter;
};

export default useCounter;
