import React, { useEffect, useState } from "react";
import NewClass, { PlayGround } from "./components/Home";
import Greeting from "./components/Greeting";
import ButtonNew from "./components/Button";
import ArrayRendering from "./components/ArrayRendering";
import Student from "./components/Student";
import LineBar from "./components/LineBar";
import Counter from "./components/Counter";
import Form from "./components/Form";
import ReactForm from "./components/ReactForm";
import ExamEffect from "./components/ExamEffect";
import Timer from "./components/Timer";
import ParentTimer from "./components/ParentTimer";
import Users from "./components/Users";
import RenderCount from "./components/RenderCount";
import { useRenderCount } from "./custom hook/CounterHook";
import FocusInput from "./components/AutoFocus";
import LyricsComp from "./components/Lyrics"
import ExpenCal from "./components/ExpenCal";
import ChildCom from "./components/ChildCom";


function App() {
  function showMessage(name) {
    alert("Button Clicked" + " " + name);
  }
  
  const students = [
    { id: 1, name: "Jeeva", age: 24, message: "GOOD" },
    { id: 2, name: "Rahul", age: 22, message: "OK" },
    { id: 3, name: "Priya", age: 23, message: "HI" },
  ];
  // let count = 0;
  const [count, setCount] = useState(0);

  const increaseInc = () => {
    // setCount((pre)=> pre+1);
    setCount(count + 1);
  };
  return (
    <>
      <ArrayRendering />
      <LineBar />
      {students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            age={student.age}
            message={student.message}
            onClick={showMessage}
          />
        );
      })}
      <LineBar />
      <h1>Count</h1>
      {count}
      <button onClick={increaseInc}>increase count</button>
      <LineBar />
      <Counter />
      {/* <LineBar/> */}
      {/* <ReactForm/> */}
      {/* <LineBar/> */}
      {/* <Users/> */}
      <LineBar />
      <ExamEffect />
      <LineBar />
      <ParentTimer />
      <LineBar />
      <RenderCount />
      <LineBar />
      <FocusInput />
      <LineBar />
      <ExpenCal />
      <LineBar />
      <LyricsComp />
      <LineBar/>
      <ChildCom />
    </>
  );
}

export default App;

/*
 */
