import React from 'react'
import Students from './Students';

export default function ArrayRendering() {
    const students = ["Jayakath", "Ajith", "Mahesh", "Neresh", "Sakthi"]
  return (
    <div>
        <h1>Student Lists</h1>
        <ul>
            {students.map((val,idx) => {
                const a = "Mr. " + val;
                return <li key={idx}>{a}</li>
            })}
        </ul>
    </div>

  )
}

export function Student(){
    const student = [
        {id:1, name: "Sakthi", age:20, msg: "Good Morning"},
        {id:2, name: "JayaKanth", age:20, msg: "Good Afternoon"},
        {id:3, name: "Naresh", age:20, msg: "Good evening"},
        {id:4, name: "Mahesh", age:20, msg: "Good night"},
        
    ];

    return (
    <div>
    {student.map((val) => {
        console.log(val)
        return (
            <Students key={val.id} name={val.name} age={val.age} message={val.msg} />
        )
    })}
    </div>
    )
}
