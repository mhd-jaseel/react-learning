import { useState } from "react";
import React from 'react'

export default function Form() {
    const [name,setName]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        alert(name)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
        value={name}
        onChange={(e)=>setName(e.target.value)} />
        <button type="submit">submit</button>
    </form>
  )
}
