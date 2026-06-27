import React from 'react'
import { useRef } from 'react'


export default function Example1() {
    const inputRef=useRef();
    function handleClick(){
        inputRef.current.focus();
    }
  return (
    <div>
        <input ref={inputRef} placeholder='Enter Name' />
        <button onClick={handleClick}>Focus Input</button>
    </div>
  )
}
