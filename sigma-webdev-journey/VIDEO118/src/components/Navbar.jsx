import React from 'react'
import { memo } from 'react'

function Navbar({adjective, getAdjective, getAdjective2}) {
    console.log("navbar is rendered")
  return (
    <div>

        I'm a {adjective} navbar
      <button onClick={()=>{getAdjective()}} >{getAdjective()} </button>
      
      <button onClick={()=>{getAdjective2()}} >{getAdjective2()} </button>
    </div>
  )
}

export default memo(Navbar)
