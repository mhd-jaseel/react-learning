import React from 'react'
import Grandchild from './grandchild'

function Child(data) {
  return (
    <div><Grandchild name={data.name}/></div>
  )
}

export default Child