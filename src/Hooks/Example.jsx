import React, { use, useEffect, useState } from 'react'
useState

export default function useFetch(url) {
 const[data,setData]=useState([])
 const[loading,setLoding]=useState(true);
 const[error,setError]=useState("");

 useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(result=>{
        setData(result); 
        setLoding(false)
    })
    .catch(()=>{
        setError("Error fetching data");
        setLoding(false)
    })
 },[url])


  return{data ,loading,error}
}
