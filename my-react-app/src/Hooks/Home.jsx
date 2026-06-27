import useFetch from "./Example";
import React from 'react'

export default function Home() {
    const{data,loading,error}=useFetch("https://jsonplaceholder.typicode.com/posts")
    if(loading)return <h2>Loading...</h2>;
    if(error)return <h2>{error}</h2>
  return (
    <div>
        {data.slice(0,5).map(post=>(
            <p key={post.id}>{post.title}</p>
        ))}
    </div>
  )
}
