import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { studentData } from './ArrayRendering';

function Students() {

  const {id} = useParams();
  const Navigate = useNavigate();
  
  const [state, setState] = useState("show")
  const [isShow, setIsShow] = useState(true);

  function showMessage(){
    setIsShow(false)
    setState("hide")
  }

   function HideMessage(){
    setIsShow(true)
    setState("Show")
  }

const data = studentData.find(val => val.id == id)

  return (
    <div>
        <h1>{data.name}</h1>
        <p>Age: {data.age}</p>
        <button onClick={() => isShow? showMessage() : HideMessage()}>{state} Message</button>
        {
          isShow?
          null
          :
          (<p>{data.msg}</p>)
        }
        <br />
        <br />
        <button onClick={() => Navigate(-1)}>Back</button>
    </div>
  )
}

export default Students;
