import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'



export default function PostDetails() {
    const {id}=useParams();
    const[post,setPost]=useState(null)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[id])
    if(!post)return <h2>Loding...</h2>

    return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
  )
}
