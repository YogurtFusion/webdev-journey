import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [form, setForm] = useState({email: "", phone: ""})
  const [form, setForm] = useState({})
  const handle = ()=>{
    alert("🫠🫠")
  }

  const handdleMouse = () =>{
    alert("hey I handle mouse over 🍊🍊 ")
  }

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
  }
  return (
    <>
   <div className="button">
    <button className='' onClick={handle}>click me </button>
   </div>

   {/* <div onMouseOver={handdleMouse} className="red bg-red-300  text-teal-400 h-[233px] w-[344px] ">
    I'm a red div
   </div> */}

   <input type="text" name = "email" value={form.email?form.email:""} onChange={handleChange} />
   <input type="text" name = "phone" value={form.phone?form.phone:""} onChange={handleChange} />
   {/* <input type="text" name = "email" value={form.email} onChange={handleChange} />
   <input type="text" name = "phone" value={form.phone} onChange={handleChange} /> */}

    </>
  )
}

export default App
