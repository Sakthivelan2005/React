import React, { useEffect, useLayoutEffect, useState } from 'react'

export const UseLayoutEffectRendering = () => {
    const [width, setWidth] = useState(100);
    useLayoutEffect(()=>{
        setWidth(500);
    },[])
    
  return (
    <div style={{width:`${width}px`, height: '100px', backgroundColor:'AccentColor', color:'white'}}>UseLayoutEffectRendering....!</div>
  )
}
