import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply,incrementByAmount } from './redux/counter/counterSlice'


function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch  = useDispatch()
  return (
    <>
    <Navbar count={count} />
      <div>
        <button onClick={ ()=> dispatch(decrement())} >-</button>
     so currently the count is {count}
      <button onClick={()=> dispatch(increment())} >+</button>
      <button onClick={()=> dispatch(incrementByAmount(5))} > 5+</button>
      <button onClick={()=> dispatch(multiply())} >X</button>
      </div>

      
    </>
  )
}

export default App
