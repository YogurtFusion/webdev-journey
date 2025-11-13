import React from 'react'

function Navbar() {
  return (
   <nav className='bg-purple-200 flex justify-between items-center px-4 h-14  ' >
    <div className='logo font-bold'> <a href="/">Passop</a> </div>
    <ul className='flex gap-4' >
        <li><a className='hover:font-bold hover:border-b-2 hover:border-black' href="/">Home</a></li>
        <li><a className='hover:font-bold hover:border-b-2 hover:border-black' href="#">About</a></li>
        <li><a className='hover:font-bold hover:border-b-2 hover:border-black' href="#">Contact</a></li>
    </ul>    
   </nav>
  )
}

export default Navbar
