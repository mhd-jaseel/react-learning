import { useState } from "react";
import React from 'react'
const Child =React.memo(()=>{
    console.log("child rendered");
    return <h2>Child Compone</h2>
})

export default function ReactMemo() {
    const[count,setCount]=useState(0)
  return (
    <div>
        <h1>Count{count}</h1>
        <button onClick={()=>setCount(count+1)}>Click</button>
        <Child/>
    </div>
  )
}
