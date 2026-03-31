import React from 'react'
import { useState } from 'react'

export default function Name() {
    const[name,setName]=useState("jaseel")
    function changeName(){
        if(name==="jaseel"){
            setName("anzil")
        }else{
            setName("jaseel")
        }
    }
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={changeName}>CLICK</button>
    </div>
  )
}
