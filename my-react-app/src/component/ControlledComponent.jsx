import React, { useState } from 'react'

export default function ControlledComponent() {
    const[name,setName]=useState("")
  return (
    <div>
        <h1>Controlled input</h1>
        <input  value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder='Enter Name'/>

        <p>You typed:{name}</p>

    </div>
  )
}
