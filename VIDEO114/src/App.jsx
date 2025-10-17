import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLS()
  }


  const handleDelete = (e, id) => {
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()

  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS()
  }


  return (
    <>
      <Navbar />

      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-[#90e0ef] min-h-[80vh] md:max-w-[30vw] ">
        <h1 className='  mx-auto font-semibold leading-tight]  text-center text-[18px] '>MOoCHA LoFt-manage Your Todo's at one place</h1>
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>

          <div className='flex  w-full gap-4 justify-center items-center mt-4'>

            <input onChange={handleChange} value={todo} type="text" className=' rounded-md p-3 py-1 w-full text-[#1C1C1C] outline-none ' />
            <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-[#48cae4] hover:bg-[#00b4d8] p-3 py-1.5 text-white rounded-md mx-1 text-sm font-bold disabled:bg-[#48cae4]  '> Save</button>
          </div>
        </div>

        <div className='flex flex-col'>

          <div className="self-start">

            <label className='flex items-center gap-2 cursor-pointer' >
              <input onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show finished
            </label>
          </div>
          <div className='h-0.5 bg-[#FDFBD4]  w-[90%] mx-auto my-2 ' ></div>

          <h2 className=" self-center inline-block text-lg font-bold  text-center my-[20px] text-white  mx-auto border-b-2 border-white  "> Yours Todos </h2>
        </div>

        <div className="todos">
          {todos.length === 0 && <div className='mx-4'>No Todos to display</div>}
          {todos.map(item => {

            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between  items-start mb-6">

              <div className='flex gap-3'>

                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
              </div>
              <div className="buttons text-center flex flex-col items-center h-full">
                <button className='bg-[#48cae4] hover:bg-[#00b4d8] p-3 py-1 text-white rounded-md mx-1 my-2 text-sm font-bold  ' onClick={(e) => handleEdit(e, item.id)}><EditIcon className="text-white" fontSize="medium" /></button>

                <button className='bg-[#48cae4] hover:bg-[#00b4d8] p-3 py-1 text-white rounded-md mx-1  my-2 text-sm font-bold ' onClick={(e) => { handleDelete(e, item.id) }} ><DeleteIcon className="text-white" fontSize="medium" />
                </button>

              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App



// ask user before deleteing 