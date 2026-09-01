import React from 'react'
import useCounter from '../hook/CounterHook'

export const CounterHook = () => {
  const {count, increment, decrement} = useCounter();
  return (
    <div>
      <h1>Count: {count}</h1>
      <br />
      <br />
      <button onClick={increment}>+</button>
      
      <button onClick={decrement}>-</button>
    </div>
  )
}
