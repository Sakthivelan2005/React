import React, { useState } from "react";

function ReactForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
  };
  const [name, setName] = useState(initialValues);
  const handleChange = (e) => {
    console.log(e.target.value);
    setName({ ...name, firstName: e.target.value });
  };
  const handleChange1 = (e) => {
    console.log(e.target.value);
    setName({ ...name, lastName: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div>
      <p>React Form</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={name.firstName}
          placeholder="first Name"
          required
        ></input>
        <input
          onChange={handleChange1}
          value={name.lastName}
          placeholder="last Name"
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default ReactForm;
