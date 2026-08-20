import { Button } from "@mui/material";

function Student({ name, age, message, onClick }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <Button onClick={()=>onClick(message)}>click me</Button>
    </div>
  );
}

export default Student;
