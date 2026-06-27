import React from 'react'
import { useEffect } from 'react'
export default function Example() {
    useEffect(()=>{
        console.log("component loaded");
    },[])
  return (
    <div>
        <h1>Hello</h1>
    </div>
  )
}
