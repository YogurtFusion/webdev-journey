import React from 'react'

function Navbar() {
  return (
    <div>
        <div className='flex justify-between item-center px-11 py-6' >
            <div className="logo rounded ">
                <img  className='rounded-full max-w-[100px]' src="https://picsum.photos/1000" alt="dawf" />
            </div>
            <ul className='flex '>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
