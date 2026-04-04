import { Route ,Router, Routes} from "react-router-dom";
import React from 'react'

export default function RoutesExample() {
  return (
      <Routes>
        <Route path="/" element={<h1>home page</h1>}/>
        <Route path="/about" element={<h1>about page</h1>}/>
      </Routes>
  )
}
