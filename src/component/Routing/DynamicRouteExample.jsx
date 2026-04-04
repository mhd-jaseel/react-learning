import { Route, Routes } from "react-router-dom";
import UseParamsExample from "./UseParamsExample"
import React from 'react'

export default function DynamicRouteExample() {
  return (
    <Routes>
        <Route path="/user/:id" element={<UseParamsExample/>}/>
    </Routes>
  )
}
