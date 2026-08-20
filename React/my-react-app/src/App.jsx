import Home, {PlayGround} from './components/Home'
import ArrayRendering from './components/ArrayRendering'
import { Student } from './components/ArrayRendering'
import Counter from './components/Counter'
// import { useEffect, useState } from 'react'
import Form from './components/Form'
import { Users } from './components/Users'
import { RenderCount } from './components/RenderCount'
import { AutoFocus } from './components/AutoFocus'
import { ExpensiveCalculation } from './components/ExpensiveCalculation'
import { Lyrics } from './components/Lyrics'
import { ExpensiveCallBack } from './components/ExpensiveCallBack'
import { UserContext } from './Context/Context'
import { useState } from 'react'
import { Checkout } from './components/Checkout'
import { Login } from './components/Login'
function App() {

  const [user, setUser] = useState("")
  return (
    <>
    <UserContext.Provider value={{user, setUser}}>

      {user ? <Checkout /> : <Login />}
    </UserContext.Provider>
     {/*
    <ExpensiveCallBack />
    <Lyrics />
    <ExpensiveCalculation />
  <RenderCount />
  <AutoFocus />
  <Counter />
    <Users />
    <Home />
    <PlayGround />

  <ArrayRendering />
  <Student />

    <Form /> */}
    </>
  )
}

export default App
