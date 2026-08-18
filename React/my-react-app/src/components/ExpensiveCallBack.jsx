import React, { memo, useCallback, useState } from 'react'

const Child = ({handleClick}) => {
    console.log("child rendering..!")
    return <button onClick={handleClick}>Click CHild</button>
}

export const ExpensiveCallBack = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        console.log("Child button Clicked");
    }
  return (
    <div>
        <h1> Count {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <br />
        <Child handleClick = {handleClick} />
    </div>
  )
}
