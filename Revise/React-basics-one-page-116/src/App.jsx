import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Enter Name")
  const [tName, setTname] = useState("Enter title  ")
  const [fruits, setFruit] = useState(["Apple ", "Banana ", "Cheery"])
  const [addFruit, setAddFruit] = useState("")


  function newFruit() {
    if (addFruit.trim() !== "") {
      setFruit([...fruits, addFruit]);
      setAddFruit("")
    }
  }

  function delteFruit(indexToDelete) {
    setFruit(fruits.filter((_, index) => index !== indexToDelete))
  }

  useEffect(() => {
    console.log("name changed to: ", name)
  }, [name])

  useEffect(() => {
    console.log("you chaned title name")
    document.title = tName
  }, [tName])
  return (
    <>
      {/* SO USE state is just a variable for react if it changes then the value in react changes  */}
      <div className='bg-yellow-400 flex justify-center flex-col items-center gap-8 text-white text-xl'>
        <h2>Count: {count} </h2>
        <div className='flex gap-4 '>

          <button className=' border-2  border-solid border-white rounded-full px-4 py-1 my-2' onClick={() => setCount(count + 1)}>Increase</button>
          <button className=' border-2  border-solid border-white rounded-full px-4 py-1 my-2' onClick={() => setCount(count - 1)}>Decrease</button>
          <button className=' border-2  border-solid border-white rounded-full px-4 py-1 my-2' onClick={() => setCount(count * 0)}>Reset</button>

        </div>
      </div>

      {/* use Effect */}
      <div className='my-3 mx-auto w-1/2 bg-[#EEE8AA] px-8 py-10   text-center'>

        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>Hello: {name} </p>

        <div>
          <input type="text" value={tName} onChange={(e) => setTname(e.target.value)} />
          <p>Title namem: {tName} </p>
        </div>

      </div>

      {/* .map  */}

      <ul className='flex flex-col items-center justify-center gap-8 bg-amber-50 py-4 px-2'>
        {
          fruits.map((fruits, index) => (

            <>
              <li className='flex gap-3 text-xl text-gray-700' key={index}> {fruits}
                <button className='text-xs font-bold text-black border-2 border-dotted py-2 px-3 rounded-full' onClick={() => delteFruit(index)}>Delete</button>
              </li>
            </>
          ))
        }

        <div className='flex justify-center items-center'>

          <input type="text" placeholder='Enter your fruit name' value={addFruit} onChange={(e) => setAddFruit(e.target.value)} />

          <button className='text-xs font-bold text-black border-2 border-dotted py-2 px-3 rounded-full' onClick={newFruit} >Add fruit</button>

        </div>
      </ul>

    </>
  )
}

export default App
