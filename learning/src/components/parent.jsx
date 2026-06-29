import React from 'react'
import Child from './child'


function Parent(data) {
  return (
    <div>
        <Child name={data.name}/>
    </div>
  )
}

export default Parent