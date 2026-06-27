import React from 'react'
import { useParams } from 'react-router-dom'


export default function StudentDetails() {
    const {id}=useParams();
  return (
    <div><h1>Student Id:{id}</h1></div>
  )
}
