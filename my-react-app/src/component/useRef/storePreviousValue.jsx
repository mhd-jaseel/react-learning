import { useRef,useState,useEffect} from "react";
import React from 'react'

export default function StorePreviousValue() {
   const[count,setCount]=useState(0);
   const prev=useRef()
  useEffect(()=>{
    prev.current=count
  },[count])
  return (
    <div>
        <h1>Current :{count}</h1>
        <h2>Previous:{prev.current}</h2>
        <button onClick={()=>setCount(count+1)}>click </button>

    </div>
  )
}
