import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])

  return (
    <div>
      <h1>Blog App</h1>
      <p>Welcome to my blog</p>

      <h1>Posts</h1>

      {post.slice(0,5).map(post => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>
            <p>{post.title}</p>
          </Link>
        </div>
      ))}

    </div>
  )
}