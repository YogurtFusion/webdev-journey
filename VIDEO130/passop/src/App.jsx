import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {


  return (
   <>
   <div className=''>
    <Navbar/>
    <div className='min-h-[calc(100vh-80px)]'>
    <Manager/>
    </div>
    <Footer/>
   </div>
   </>
  )
}

export default App
