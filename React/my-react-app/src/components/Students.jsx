import React, { useState } from 'react'

function Students({name, age, message}) {

  
  const [msg,setMsg] = useState("");
  const [state, setState] = useState("show")
  const [isShow, setIsShow] = useState(true);

  function showMessage(msg){
    setIsShow(false)
    setMsg(msg)
    setState("hide")
  }

   function HideMessage(){
    setIsShow(true)
    setMsg("")
    setState("Show")
  }
  return (
    <div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <button onClick={() => isShow? showMessage(message) : HideMessage()}>{state} Message</button>
        <p>{msg}</p>
    </div>
  )
}

export default Students;
