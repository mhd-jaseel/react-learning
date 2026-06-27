import { Link } from "react-router-dom";
import React from 'react'

export default function LinkExample() {
  return (
    <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
    </div>
  )
}
