import { useCallback, useState } from "react";

import React from 'react'

export default function UseCallback() {
    const[count,setCount]=useState(0);
    const handleClick=useCallback(()=>{
        console.log("Clicked")
    },[])
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}
