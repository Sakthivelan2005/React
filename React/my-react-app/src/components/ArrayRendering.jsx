import React from 'react'
import Students from './Students';
import { Link } from 'react-router-dom';

export const studentData = [
        {id:1, name: "Sakthi", age:20, msg: "Good Morning"},
        {id:2, name: "JayaKanth", age:20, msg: "Good Afternoon"},
        {id:3, name: "Naresh", age:20, msg: "Good evening"},
        {id:4, name: "Mahesh", age:20, msg: "Good night"},
        
    ];


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
    

    return (
    <div>
    {studentData.map((val) => {
        console.log(val)
        return (
            <div key={val.id}>
            <br />
            <Link to={`/student/${val.id}`}>{val.id}. {val.name}</Link>
            </div>
        )
    })}
    </div>
    )
}
