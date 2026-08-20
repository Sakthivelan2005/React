import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Button } from "@mui/material";

function CheckOut() {
  const value = useContext(UserContext);
  console.log("checkout-child ", value.user);
  return (
    <div>
      Checked out as {value.user}
      <Button
        variant="outlined"
        onClick={() => {
          value.setUser("");
        }}
      >
        Logout
      </Button>
    </div>
  );
}

export default CheckOut;
