import { Route,Routes } from "react-router-dom";
import React from 'react'

export default function RouteExample() {

  return (
    
        <Routes>
        <Route path="/home" element={<h1>Home page</h1>}/>
        </Routes>
   
  )
}

