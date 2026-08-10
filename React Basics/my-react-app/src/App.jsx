import Home, {PlayGround} from './components/Home'
import ArrayRendering from './components/ArrayRendering'
import { Student } from './components/ArrayRendering'
import Counter from './components/Counter'
import { useState } from 'react'
import Form from './components/Form'
function App() {

    const [val, setVal] = useState(0)
    const [count, setCount] = useState(0);
  return (
    <>
    <Home />
    <PlayGround />

  <ArrayRendering />
  <Student />
  <Counter 
    val={val} 
    setVal = {setVal}
    count={count}
    setCount={setCount}
  />

    <Form />
    </>
  )
}

export default App
