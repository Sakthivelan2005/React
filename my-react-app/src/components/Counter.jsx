import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState(0);

  const increment = () => {
    // count= count+1;
    setCount(count + val);
  };
  const decrement = () => {
    setCount(count - val);
  };

  const incVal = () => {
    setVal((pre) => pre + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => increment()}>increase</button>
      <button onClick={() => decrement()}>decrease</button>
      <h1>Increase Counter: {val}</h1>
      <button onClick={() => incVal()}>increase val</button>
      <br></br>
    </div>
  );
}

export default Counter;
