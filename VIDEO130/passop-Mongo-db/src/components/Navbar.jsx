import React from 'react'

function Navbar() {
    return (
        <nav className='bg-slate-800 text-white ' >
            <div className="flex justify-between items-center md:px-4 md:py-5 h-14 mycontainer">

                <div className='logo font-bold text-white text-2xl'>
                    <span className='text-green-500'>&lt;</span>
                    <span> <a href="/">Passop</a></span>
                    <span className='text-green-700'>OP/&gt;</span>
                </div>
                <button className='text-white bg-green-700 my-5 mx-2 rounded-full flex justify-between items-center ring-1 ring-white' >
                    <img className='invert w-10 p-1 ' src="/icons/github-mark.svg" alt="github" />
                <span className='font-bold px-2' >Github</span>
                </button>

            </div>

        </nav>
    )
}

export default Navbar
