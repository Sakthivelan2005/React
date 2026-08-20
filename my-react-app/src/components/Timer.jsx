import React, { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [countChange, setCountChnage] = useState(true)
  useEffect(() => {
    setCount(0);
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [countChange]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCountChnage(!countChange)}>change</button>
    </div>
  );
}

export default Timer;
