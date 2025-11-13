import React from 'react'

function Navbar() {
    return (
        <nav className='bg-slate-800  ' >
            <div className="flex justify-between items-center px-4 py-5 h-14 mycontainer">

                <div className='logo font-bold text-white text-2xl'>
                    <span className='text-green-700'>&lt;</span>
                    <span> <a href="/">Passop</a></span>
                    <span className='text-green-700'>OP/&gt;</span>
                </div>
                <ul className='flex gap-4' >
                    <li><a className='hover:font-bold hover:border-b-2 hover:border-black' href="/">Home</a></li>
                    <li><a className='hover:font-bold hover:border-b-2 hover:border-black' href="#">About</a></li>
                    <li><a className='hover:font-bold hover:border-b-2 hover:border-black' href="#">Contact</a></li>
                </ul>

            </div>

        </nav>
    )
}

export default Navbar
