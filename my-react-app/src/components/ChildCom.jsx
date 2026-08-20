import React, { useState, memo, useCallback } from "react";

const Child = memo(({ handleClick }) => {
  console.log("Child rendered");
  return <button onClick={handleClick}>Click Child</button>;
});

export default function ChildCom() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Child handleClick={handleClick} />
    </>
  );
}
