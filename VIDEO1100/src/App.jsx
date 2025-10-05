import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      tittle: "I'm a good todo ",
      desc: "I'm a todo description"
    },
    {
      tittle: "I'm a good todo to  ",
      desc: "I'm a todo description"
    },
    {
      tittle: "I'm a groceries todo ",
      desc: "I'm a todo description"
    }
  ])
  // const Todo = ({todo})=> {return(<>
  // <div className="m-4 border border-purple-1">    
  //   <div className="todo">{todo.tittle} </div>
  //   <div className="todo">{todo.desc} </div>
  // </div>
  //   </>
  // )}

  return (
    <>
      <div>


        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {todos.map(todo => {
        // return <Todo key={todo.tittle } todo ={todo} />
        return <div key={todo.tittle} className="m-4 border border-purple-100 p-4 rounded-full">
          <div className="todo">{todo.tittle} </div>
          <div className="todo">{todo.desc} </div>
        </div>
      })}

          {/*  showBtn?<button> this wil only show when show btn will be tur</button>:"thenga"} */ }
          { showBtn && <button>this will only be shown when showBtn is true</button>}
      {/* <button onClick={() => setCount((count) => count + 1)}> */}

      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          count is {count}
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
