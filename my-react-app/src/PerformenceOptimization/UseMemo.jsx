import React, { useMemo, useState } from 'react'


export default function UseMemo() {
    const[count,setCount]=useState(0)
    const double=useMemo(()=>{
        console.log("calculating...")
        return count*2
    },[count])
  return (
    <div>
        
        <h1>{double}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}
