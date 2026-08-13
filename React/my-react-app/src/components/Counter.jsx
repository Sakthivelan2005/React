// Counter.jsx

import React, { useEffect, useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((pre) => pre + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])

    // useEffect(() => {
    //     console.log("Effect running...!")
    //     const interval = setInterval(() => {
    //         setCount(prev => prev + 1)
    //     },  1000)

    //     return () => {
    //         console.log("Clearing Interval...!")
    //         clearInterval(interval);
    //     }
    // },[])

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}> Increase</button>
        <button onClick={decrement}> Decreament</button>
    </div>
  )
}