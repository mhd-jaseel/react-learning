import { useState } from "react";

import React from 'react'

export default function DeleteList() {
    const[users,setUsers]=useState([
        "jaseel","jaseer","rinshad"
    ])
    function deleteUser(index){
        const newList= users.filter((_, i)=>i !== index);
        setUsers(newList)
    }
  return (
    <div>
        {users.map((user,index)=>{
            return (
                <div key={index}>
                    <h1>{user}</h1>
                    <button onClick={()=>deleteUser(index)}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}
