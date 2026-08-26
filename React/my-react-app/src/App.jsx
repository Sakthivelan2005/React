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
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import { PageNotFound } from './components/PageNotFound'
import Students from './components/Students'
import { Contact } from './components/Contact'
import { ProtectedRoute } from './components/ProtectedRoute'
function App() {

  const [user, setUser] = useState("")
  return (
    <>
    {/* <UserContext.Provider value={{user, setUser}}>

      {user ? <Checkout /> : <Login />}
    </UserContext.Provider> */}
     {/*
    <ExpensiveCallBack />
    <Lyrics />
    <ExpensiveCalculation />
  <RenderCount />
  <AutoFocus />
  <Counter />
    <Users />
    
    */}

    
    <UserContext.Provider value={{user, setUser}}>
     <BrowserRouter>
     <nav>
      <Link to={'/'} state={{name:"Jaya",phone:9876543210}}>Home </Link>
      <Link to={'/playground'} >PlayGround </Link>
      <Link to={'/student'}>Student </Link>
      <Link to={'/form'}>Form</Link>
     </nav>

     <Routes>
      <Route path='/' element={<Home />} />

      {/* Nest Route */}
      
        <Route path='/playground' element={
           <ProtectedRoute isLogin={true}>
              <PlayGround />
           </ProtectedRoute>
          }>
         
            <Route path='contact' element={<Contact />} />
         
        </Route>
        <Route path='/student' element={<Student />} />
        <Route path='/student/:id' element={<Students />} />
        <Route path='/form' element={<Form /> } />
        <Route path='*' element={<PageNotFound />} />
     </Routes>
     </BrowserRouter>
     </UserContext.Provider>
    
    

   {/* <ArrayRendering /> */}
  

    
    </>
  )
}

export default App
