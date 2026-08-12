import Home, {PlayGround} from './components/Home'
import ArrayRendering from './components/ArrayRendering'
import { Student } from './components/ArrayRendering'
import Counter from './components/Counter'
import { useState } from 'react'
import Form from './components/Form'
import { Users } from './components/Users'
function App() {
  return (
    <>
    
    <Users />
    <Home />
    <PlayGround />

  <ArrayRendering />
  <Student />
  <Counter />

    <Form />
    </>
  )
}

export default App
