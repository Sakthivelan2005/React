import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/Context';

export default function Form() {
    const {setUser} = useContext(UserContext);
    const Navigate = useNavigate();
    const [value, setValue] = useState({first:"", last: ""});
    const handleChangeFirst = (e) => {
        console.log(e.target.value);
        setValue({...value, first: e.target.value})
    }
    const handleChangeSecond = (e) => {
        console.log(e.target.value);
        setValue({...value, last: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(value.first+ " " +value.last)
        setValue({first:"", last: ""});
        Navigate('/')

    }

    console.log("Val: ", value)
    
  return (
    <div onSubmit={handleSubmit}>
        <h1>Form</h1>
        <form>
            <input onChange={handleChangeFirst} value={value.first} required/>
            <br /><br />
                        
            <input onChange={handleChangeSecond} value={value.last} required/>
            <br /><br />
            <button type='submit'>Submit</button>
        </form>    
        <br /><br /><br />
    </div>
  )
}
