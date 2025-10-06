import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)
  const [Todos, setTodos] = useState([])

  // const todo = {
  //   id: 1 ,
  //   title: "finsih",
  //   completed: "complete the dodo",
  //   userId : "23"
  // }


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=12")
    .then((res) =>res.json())
    .then((data) => setTodos(data))
    .catch((err) => console.error("error: ", err))
  }, [])
  

  return (
    <>
      <div>

        {Todos.length > 0 ? (
          Todos.map((todo)=>(
            
            <Todo
            key = {todo.id}
            id = {todo.id}
            title = {todo.title}
            completed = {todo.completed}
            userId={todo.userId}
            />
            
          )) 
           ):(
            <p>loading</p>
        )}

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
