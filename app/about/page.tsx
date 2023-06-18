import React from 'react'
import data from "./links.json"

const items = data.map(d => (<div>{d.link}</div>))

const page = () => {
  return (
    <div>{items}</div>
  )
}

export default page