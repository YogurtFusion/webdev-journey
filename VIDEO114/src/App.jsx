import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
const { v4: uuidv4 } = require ('uuid');


function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = () => {

  }


  const handleDelete = () => {

  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todos)

  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) =>{
    let id = e.target.name
    todos.filter()
  }


  return (
    <>
      <Navbar />

      <div className="container mx-auto my-5 rounded-xl p-5 bg-[#90e0ef] min-h-[80vh] max-w-[30vw] ">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2' />
          <button onClick={handleAdd} className='bg-[#48cae4] hover:bg-[#00b4d8] p-3 py-1 text-white rounded-md mx-6 text-sm font-bold '>Add</button>
        </div>
        <h2 className=" inline-block text-lg font-bold  text-center my-[20px] text-white  mx-auto border-b-2 border-white  "> Yours Todos </h2>

        <div className="todos">
          {todos.map(item => {

            return <div key={todo} className="todo flex justify-between  items-start mb-6">

              <input name={todo.id}  onChange={handleCheckbox} type="checkbox" value={todo.isCompleted} />
              <div className={item.isCompleted?"line-through" : ""}>
                {item.todo}
              </div>
              <div className="buttons text-center flex flex-col items-center">
                <button className='bg-[#48cae4] hover:bg-[#00b4d8] p-3 py-1 text-white rounded-md mx-1 my-2 text-sm font-bold  ' onClick={handleEdit}> Edit</button>

                <button className='bg-[#48cae4] hover:bg-[#00b4d8] p-3 py-1 text-white rounded-md mx-1  my-2 text-sm font-bold ' onClick={handleDelete} >Delete</button>

              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
