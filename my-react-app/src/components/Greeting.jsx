import React from "react";

function Greeting({name, age}) {
  // console.log(props)
    // const name = 
  return (
    <>
     <h1>{name}-{age ? age : 0}</h1>
     {age? <p> I am qualified</p> : <></>}
    </>
  );
}

export default Greeting;