import { useState } from "react";

import React from 'react'

export default function LoginForm() {
    const[username,setUsername]=useState("");
    const[Password,setPassword]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        alert("Username:" +username);
        alert("Password:" +Password)
    }
  return (
    
    <form onSubmit={handleSubmit} >
        <h2>Login</h2>
        <input 
            type="text" 
            placeholder="User Name" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
        <input 
            type="Password" 
            placeholder="Password" 
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
    </form>
  )
}
