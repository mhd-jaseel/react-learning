import { useState,useEffect } from "react";
import React from 'react'

export default function DependencyValue() {
    const[name,setName]=useState("jaseel")
    useEffect(()=>{
        console.log("name changed :",name)
    },[name])
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=>setName("anzil")}>change name</button>
    </div>
  )
}

