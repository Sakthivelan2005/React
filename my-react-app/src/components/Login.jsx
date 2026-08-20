import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../context/UserContext";
import { Button } from "@mui/material";

function Login() {
  const value = useContext(UserContext);
  console.log("value", value)
  const [name, setName] = useState("");
  console.log("name", name);
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br></br>
      <Button
        variant="outlined"
        onClick={() => {
          value.setUser(name);
          // value.setIsActive(true);
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
