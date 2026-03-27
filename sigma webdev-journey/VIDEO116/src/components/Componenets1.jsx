import React, { useContext } from 'react'
import { counterContext } from '../../context/context'

function Componenets1() {
    const value = useContext(counterContext)
  return (
    <div>
        {value.count}      
    </div>
  )
}

export default Componenets1
