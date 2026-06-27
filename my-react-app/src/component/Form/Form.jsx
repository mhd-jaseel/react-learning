import React ,{ useState } from "react";


export default function Form() {
    const[name,setName]=useState("")
    function handleSubmit(e){
        e.preventDefault();
        alert("your name is :" +name);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)} />
          <button type="submit">submit</button>
    </form>
  )
}


