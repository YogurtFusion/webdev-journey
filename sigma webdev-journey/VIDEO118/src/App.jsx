import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [adjective, setAdjective] = useState("good")

  const getAdjective2 = useCallback( 
  () =>{
    return "another2: "+ count2
  }, 
  [count2],
  )
  // const getAdjective = 
  //   () => {
  //     return "another"+count
  //   }

  

  // const getAdjective = useCallback(
  //   () => {
  //     return "another"+count
  //   },
  //   [],
  // )
  
  const getAdjective = useCallback(
    () => {
      return "another"+count
    },
    [count],// dependencies array 
  )

  

  return (
    <>
    <Navbar adjective={"good"} getAdjective={getAdjective} getAdjective2 = {getAdjective2} /> 
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          count is {count2}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
