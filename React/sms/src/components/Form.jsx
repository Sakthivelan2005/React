import React, { useEffect, useState } from 'react';
const Form = () => {

    const formDataStructure = {
        FirstName: "",
        LastName: "",
        Email: "",
        Age: 18,
        Course: "MERN Stack"
    }

    const [formData,setFormData] = useState(formDataStructure);
    const [isEdit, setIsEdit] = useState(false)
    const [editData, setEditData] = useState(null);

    const [data, setData] = useState([]);

    const courses = ["MERN Stack", "Python Full Stack", "Java Full Stack", "Data Science", "Data Analytics"]
    
    const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.FirstName.length <3 || formData.LastName.length < 3){
        alert("First Name and Last Name must be above 3 characters");
    }
    else if(isEdit){
        handleUpdate(editData, formData)
        setFormData(formDataStructure);
        setIsEdit(false);
    }
    else{
        
       setFormData(formDataStructure);
       setData([...data, formData]);
    }
    }

    const handleChange = (e) => {
       const {name, value} = e.target;

       setFormData((prev) => ({
        ...prev, [name]: value
       }));
        console.log(formData);
    }

    const handleEdit = (idx) => {
        setIsEdit(true);
        setFormData(data[idx]);
        setEditData(idx)

    }

    const handleUpdate = (idx, fdata) => {

        setData(data.map((val, index) => {
            if(idx === index){
                val = fdata;
            }
            return val;
        }))
    }

    // const handleDelete = (idx, fdata) => {

    //     setData(data.map((val, index) => {
    //         if(idx === index){
    //             delete val;
    //         }
    //         return val;
    //     }))
    // }

    const handleDelete = (idx) => {
        setData(data.filter((val, index) => index !== idx))
    }
    
    return (
    <div>
    <form onSubmit={handleSubmit}>
        <h1>Student Registration Form</h1>
        <h3>{isEdit ? "Edit your Form 📝" : "Fill Your Form"}</h3>
        <label htmlFor="fname">
            First Name: <input type="text" id='fname' name="FirstName" onChange={handleChange} value={formData.FirstName}  required/>
        </label>
        <br />
        <label htmlFor="lname">
            Last Name: <input type="text" id='lname' name='LastName' onChange={handleChange} value={formData.LastName}  required/>
        </label>
        <br />
        <label htmlFor="email">
            Email: <input type="email" id='email' name='Email' onChange={handleChange} value={formData.Email}  required/>
        </label>
        <br />
        <label htmlFor="age">
            Age: <input type="number" id='age' name='Age' onChange={handleChange} value={formData.Age}  required/>
        </label>
        <br />
        Course: <select onChange={handleChange} name='Course'>
            {courses.map((val, idx) => (
                <option key={idx} value={val}>{val}</option>
            ))}
        </select>
        <br />
        

        <button type='submit'>{isEdit? "Update" : "Submit"}</button>
    </form>

    <div>
        <br /><br /><br />

        <h2>Student Details</h2>
        <table border={2} cellPadding={15} align='center'>
            <thead>
            <tr style={{backgroundColor: "AccentColor"}}>
                <td>S.No</td>
                <td>Name</td>
                <td>Age</td>
                <td>Course</td>
                <td>Delete</td>
                <td>Edit</td>

            </tr>
            </thead>
            <tbody>
                {(data.length === 0 )?
                (
                    <tr><td colSpan={8}>No Data found</td></tr>
                )
            :
            data.map((val, key) => (       
                    <tr key={key}>
                         <td>{key+1}</td>
                         <td>{val.FirstName + " " + val.LastName}</td>
                         <td> {val.Age}</td>
                         <td> {val.Course}</td>
                         <td>
                            <button onClick={(e) => {
                            e.preventDefault();
                            handleDelete(key)
                            }}>
                            🗑️
                            </button>
                        </td>
                        <td>
                            <button onClick={(e) => {
                            e.preventDefault();
                            handleEdit(key);
                            }}>
                            📝
                            </button>
                        </td>
                    </tr>
                        ))
             }
                
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Form;