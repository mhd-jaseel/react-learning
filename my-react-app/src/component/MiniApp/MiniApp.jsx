import { useState } from "react";

import React from 'react'

export default function MiniApp() {
    const[text,setText]=useState("");
    const[lsit,setList]=useState([]);
    function addItem(){
        if(text === "")return;
        setList([...lsit,text])
        setText("")
    }
    function deleteItem(index){
        setList(lsit.filter((_,i)=>i !== index))
    }
  return (
    <div>
        <input value={text}
        onChange={(e)=>setText(e.target.value)} />
        <button onClick={addItem}>Add</button>
        {lsit.length ===0 && <h1>No Items</h1>}
        {lsit.map((item,index)=>(
            <div key={index}>
            <h1>{item}</h1>
            <button onClick={()=>deleteItem(index)}>Delete</button>
            </div>
        ))}
    </div>
  )
}
