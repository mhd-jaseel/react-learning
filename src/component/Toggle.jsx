import { useState } from "react";

import React from 'react'

export default function Toggle() {
    const[show,setShow]=useState(false)

    function handleToggle(){
        setShow(!show)
    }
  return (
    <div>
        <button onClick={handleToggle}>Toggle</button>
        {show && <h1>hello jaseel</h1>}
    </div>
  )
}
