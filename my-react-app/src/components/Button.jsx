import { Button } from "@mui/material";

function ButtonNew({ onClick, name }) {
  return <Button onClick={() => onClick(name)}>Click</Button>;
}

export default ButtonNew;
