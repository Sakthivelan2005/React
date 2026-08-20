import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    if(inputRef.current){
      inputRef.current.focus();
      inputRef.current.value = "Jeeva";
    }
  };

  useEffect(()=>{
    inputRef?.current?.focus();
  }, [])

  return (
    <div>
      <input ref={inputRef} placeholder="Enter your name" />

      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
