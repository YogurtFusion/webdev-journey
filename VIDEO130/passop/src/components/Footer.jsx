import React from 'react'

function Footer() {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full' >
        <div className='logo font-bold to-white text-2xl' >
            <span className='text-green-500'>&lt;</span>
            <span>Pass</span><span className='text-green-500'>OP&gt;</span>            
        </div>
        <div className='flex justify-center items-center' > created with <img className='w-7 mx-2 ' src="/icons/heart.png" alt="🩷" /> by chapple</div>
    </div>
  )
}

export default Footer
