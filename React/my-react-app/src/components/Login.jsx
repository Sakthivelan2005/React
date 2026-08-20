import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/Context'

export const Login = () => {
    const value = useContext(UserContext);
    console.log("Value: ",value)
    const [Name, setName] = useState("")

  return (
    <div>
        <h1>Login</h1>
        Name: <input type="text" value={Name} onChange={(e) => setName(e.target.value) } />
        <br /><br />
        <button onSubmit={() => {
            e.preventDefault();
            value.setUser(Name)
        }}>
            Login
            </button>
    </div>
  )
}
