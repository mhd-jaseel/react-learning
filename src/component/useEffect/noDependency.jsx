import { useState,useEffect } from "react";

import React from 'react'

export default function NoDependency() {
    const[count ,setCount]=useState(0);
    useEffect(()=>{
        console.log("Runs every time")
    })
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}
