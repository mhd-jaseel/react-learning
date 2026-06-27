import React from 'react'
import { Link } from 'react-router-dom'


export default function Student() {
  return (
    <div>
        <h1>Student</h1>
     <LInk to ="/students/1">student 1</LInk><br />
     <LInk to ="/students/2">student 2</LInk><br />
     <LInk to ="/students/3">student 3</LInk><br />
    </div>
  )
}
