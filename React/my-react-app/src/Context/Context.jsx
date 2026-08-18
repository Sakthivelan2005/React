import React, { createContext } from 'react'
//Create
export const UserContext = createContext();

//Provide
<UserContext.Provider value={{user, SetUser}}>

{/* Using Context*/}
    {user !== "" ? <CheckOut /> : <Login />}
</UserContext.Provider>

