import React, { useContext } from 'react'
import { UserContext } from '../Context/Context'

export const Checkout = () => {
    const value = useContext(UserContext);
  return (
    <div>
        <h1>{`Welcome, ${value.user}`}</h1>
        <button onSubmit={() => {
            e.preventDefault();
             value.setUser("")
        }}>Logout..!</button>
    </div>
  )
}
