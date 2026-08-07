import React, { useState } from 'react'

export default function Counter({val, setVal,count,setCount}) {

    //const [count, setCount] = useState(0);
   
    const increment = () => {
        setCount((pre) => pre + val);
    }

    const decrement = () => {
        setCount(count - val);
    }

    const increaseVal = () =>{
        setVal((pre) => pre + 1)
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}> Increase</button>
        <button onClick={decrement}> Decreament</button>
        <h2>Increase: {val}</h2>
        <button onClick={increaseVal}>Increase</button>
        <br /><br /><br />
    </div>
  )
}
