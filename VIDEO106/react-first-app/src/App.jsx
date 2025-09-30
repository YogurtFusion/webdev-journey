import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>      
    <main/>
    <Footer/>
    </>
  )
}

export default App
