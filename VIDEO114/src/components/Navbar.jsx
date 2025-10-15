import React from 'react'
import { FaCoffee } from 'react-icons/fa'

function Navbar() {
  return (
    <div>
         <nav className='bg-[#CAF0F8] flex justify-between max-w-[100vw] px-10  py-5 rounded-xl '>

            <div className="logo font-medium tracking-wide 
            bg-gradient-to-r from-[#03045E] to-[#00B4D8] text-transparent bg-clip-text flex justify-center items-center gap-3  max-w-[100%]">
                <span className="material-icons text-[#00B4D8] text-3xl">local_cafe</span>
                MoCHA LoFt
            </div>
            <ul className='flex gap-6 font-semiboldld text-[#00b4d8]'>
                <li className='hover:text-[#48cae4] cursor-pointer transition-all'>HOME</li>
                <li className='hover:text-[#48cae4] cursor-pointer transition-all'>MY TASKS</li>
                <li className='hover:text-[#48cae4] cursor-pointer transition-all'> ABOUT </li>
            </ul>
         </nav>     
    </div>
  )
}

export default Navbar
