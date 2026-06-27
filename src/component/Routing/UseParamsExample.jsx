import React from "react";
import { useParams } from "react-router-dom";


export default function UseParamsExample() {
    const {id}=useParams();
  return (
    <h1>User ID:{id}</h1>
  )
}
