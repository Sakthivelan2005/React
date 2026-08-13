import Home, {PlayGround} from './components/Home'
import ArrayRendering from './components/ArrayRendering'
import { Student } from './components/ArrayRendering'
import Counter from './components/Counter'
import { useEffect, useState } from 'react'
import Form from './components/Form'
import { Users } from './components/Users'
import { RenderCount } from './components/RenderCount'
function App() {

  useEffect(() => {
   // setRenderCount(prev => prev + 1)
  })
  return (
    <>
  {/* <RenderCount /> */}
  <Counter />
    <Users />
    <Home />
    <PlayGround />

  <ArrayRendering />
  <Student />

    <Form />
    </>
  )
}

export default App
