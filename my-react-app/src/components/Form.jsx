import React, { useState } from "react";

function Form() {
  const initialvalues = { firstName: "", lastName: "" }
  const [name, setName] = useState(initialvalues);
  const handleChange = (e) => {
    setName({ ...name, firstName: e.target.value });
  };
  const handleChange1 = (e) => {
    setName({ ...name, lastName: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(initialvalues);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleChange(e)}
          value={name.firstName}
          placeholder="Name"
          required
        ></input>
        <input
          onChange={(e) => handleChange1(e)}
          value={name.lastName}
          placeholder="Name"
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Form;
