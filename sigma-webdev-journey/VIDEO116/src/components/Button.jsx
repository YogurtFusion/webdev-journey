import React, { useContext } from 'react'
import Componenets1 from './Componenets1'
import { counterContext } from '../../context/context'
function Button() {
    const value = useContext(counterContext)
  return (
    <div>
      <button onClick={()=> value.setCount((count)=> count+1)} ><span><Componenets1/></span>I'm a button </button>
    </div>
  )
}

export default Button
