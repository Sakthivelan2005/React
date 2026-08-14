import React, { useEffect, useRef } from 'react'

export const AutoFocus = () => {
    const inputRef = useRef(null)

    const handleFocus = () => {
       inputRef?.current?.focus()
    }

    useEffect(() => {
        handleFocus();
    },[])
  return (
    <div>

            Name:  <input type="text"name ref={inputRef} name="name" placeholder='Enter your Name' />

       
        <br />
        <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}
