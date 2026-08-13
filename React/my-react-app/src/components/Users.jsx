import React, { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';


export const Users = () => {
    const [users,setUsers] = useState([]);
    const handleUser = () =>{
        setUsers(users.map((val) => "Mr." + val.name))
    }
    
    const getUsers = async() => {
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(response.data);
            setUsers(response.data)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getUsers();
    },[]);

  return (
    <div>
        <h2>USERS</h2>
        <ol style={{textAlign: 'left'}}>
            {users.map((val) => (
              <li key={val.id}> 
                <strong>Name:</strong> {val.name} 

              </li>
            ))}
        </ol>
        <button onClick={handleUser}>add Mr.</button>

    </div>
  )
}
