import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Yogurt")
  const [tName, setTname] = useState("current title name ")

  useEffect(()=>{
    console.log("name changed to: ", name)
  }, [name])

  useEffect(()=>{
    console.log("you chaned title name")
  document.title = tName
  }, [tName])
  return (
    <>
    {/* SO USE state is just a variable for react if it changes then the value in react changes  */}
    <div className='bg-yellow-400 flex justify-center flex-col items-center gap-8 text-white text-xl'>
    <h2>Count: {count} </h2>
    <div className='flex gap-4 '>

    <button className=' border-2  border-solid border-white rounded-full px-4 py-1 my-2' onClick={()=>setCount(count+1)}>Increase</button>
    <button className=' border-2  border-solid border-white rounded-full px-4 py-1 my-2' onClick={()=> setCount(count-1)}>Decrease</button>
    <button className=' border-2  border-solid border-white rounded-full px-4 py-1 my-2' onClick={()=>setCount(count*0)}>Reset</button>

    </div>
    </div>

{/* use Effect */}
   <div className='my-5 mx-auto w-1/2'>

   <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
   <p>Hello, {name} </p>

<div>
  <input type="text" value={tName} onChange={(e)=> setTname(e.target.value)} />
  <p>Title namem, {tName} </p>
</div>

   </div>
   
    </>
  )
}

export default App
