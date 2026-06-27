import { NavLink } from "react-router-dom";
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/about">About</NavLink> |{" "}
        <NavLink to="/students">Students</NavLink> |{" "}
        
    </div>
  )
}
