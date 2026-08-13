import React, { useEffect, useState } from 'react'

export const RenderCount = () => {

    const [RenderCount, setRenderCount] = useState(0);

    useEffect(() => {
        setRenderCount(RenderCount + 1);
    })
  return (
    <h1>RenderCount: {RenderCount}</h1>
  )
}
