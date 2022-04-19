import React, { useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'


export const Counter = () => {

    const [clicks, setClicks] = useState(0)

    
    
    
    const sumar = () => {
        
        setClicks (clicks + 1)
        console.log(clicks);
    }

  return (
    <>
        <ItemCount click={sumar}>click me</ItemCount>
        <p> clicks: {clicks} </p>
        <p> F y H del último click: {new Date().toLocaleString()} </p>
    </>
  )
}
