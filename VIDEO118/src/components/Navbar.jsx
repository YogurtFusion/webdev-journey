import React from 'react'
import { memo } from 'react'

function Navbar({adjective, getAdjective}) {
    console.log("navbar is rendered")
  return (
    <div>

        I'm a {adjective} navbar
      <button onClick={()=>{getAdjective()}} >Change me</button>
    </div>
  )
}

export default memo(Navbar)
