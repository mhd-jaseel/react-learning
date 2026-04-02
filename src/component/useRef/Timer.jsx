import { useRef } from "react";
import React from 'react'

export default function Timer() {
    const timerRef=useRef();
  function start(){
    timerRef.current=setInterval(()=>{
        console.log("Running...");
    },1000);
  }
  function stop(){
    clearInterval(timerRef.current);
  }
  return (
    <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
    </div>
  )
}
