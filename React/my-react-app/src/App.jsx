import Home, {PlayGround} from './components/Home'
import ArrayRendering from './components/ArrayRendering'
import { Student } from './components/ArrayRendering'
import Counter from './components/Counter'
// import { useEffect, useState } from 'react'
import { Users } from './components/Users'
import { RenderCount } from './components/RenderCount'
import { AutoFocus } from './components/AutoFocus'
import { ExpensiveCalculation } from './components/ExpensiveCalculation'
import { Lyrics } from './components/Lyrics'
import { ExpensiveCallBack } from './components/ExpensiveCallBack'
import { UserContext } from './Context/Context'
import { lazy, Suspense, useState } from 'react'
import { Checkout } from './components/Checkout'
import { Login } from './components/Login'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import { PageNotFound } from './components/PageNotFound'
import Students from './components/Students'
import { Contact } from './components/Contact'
import { ProtectedRoute } from './components/ProtectedRoute'
import { ReduxCounter } from './components/ReduxCounter'
import { CounterHook } from './components/CounterHook'
import { Loading } from './components/Loading'
import { UseLayoutEffectRendering } from './components/useLayoutEffectRendering'
import { UseEffectRendering } from './components/UseEffectRendering'

const Form = lazy(() => import('./components/Form'))
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
      <UseEffectRendering />
      <br />
      <br />
      <br />
      <UseLayoutEffectRendering />
     <BrowserRouter>
     <nav>
      <Link to={'/'} state={{name:"Jaya",phone:9876543210}}>Home </Link>
      <Link to={'/playground'} >PlayGround </Link>
      <Link to={'/student'}>Student </Link>
      <Link to={'/form'}>Form</Link>
      <Link to={'/count'}>Count</Link>
      <Link to={'/counter'}>Counter</Link>
     </nav>

     <Routes>
      {/* <Route path='/' element={<Home />} /> */}

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
        <Route path='/form' element={
          <Suspense fallback={<Loading />}>
            <Form />
          </Suspense> } />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/count' element={<ReduxCounter />} />
        <Route path='/counter' element={<CounterHook />} />
     </Routes>
     </BrowserRouter>
     </UserContext.Provider>
    
    

   {/* <ArrayRendering /> */}
  

    
    </>
  )
}

export default App
