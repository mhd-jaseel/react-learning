import { useRef } from "react";
import React from 'react'

export default function UncontrolledComponent() {

    const inputRef=useRef();
    const handleClick=()=>{
        alert(inputRef.current.value)
    }
  return (
    <div>
       <h1> UncontrolledComponent </h1>
       <input ref={inputRef} placeholder="Enter name" />
       <button onClick={handleClick}>submit</button>
    </div>
  )
}
