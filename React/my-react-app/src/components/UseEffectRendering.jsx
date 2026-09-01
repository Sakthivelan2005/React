import React, { useEffect, useState } from 'react'

export const UseEffectRendering = () => {
    const [width, setWidth] = useState(100);
    useEffect(()=>{
        setWidth(500);
    },[])
    
  return (
    <div style={{width:`${width}px`, height: '100px', backgroundColor:'AccentColor', color:"white"}}>UseEffectRendering....!</div>
  )
}
