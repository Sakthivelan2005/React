import React, { useState, useEffect, useRef } from "react";

export default function RenderCount() {
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(0);
  useEffect(() => {
    // setRenderCount((prevRenderCount) => prevRenderCount + 1);
  });

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <h1>{renderCount.current}</h1>
    </>
  );
}
