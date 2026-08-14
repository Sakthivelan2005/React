import React, { useEffect, useRef, useState } from 'react'

export const RenderCount = () => {

    const RenderCount = useRef(0);

    useEffect(() => {
      console.log("Rendering....!");
       RenderCount.current = RenderCount.current + 1;
    })
  return (
    <h1>RenderCount: {RenderCount.current}</h1>
  )
}
