import React from 'react'

function Footer() {
  return (
    <div>
        <footer className='flex justify-around bg-slate-800 text-white py-4' >
            <div className='text-center' >a copyright © Facebook| All rights reserved </div>
            <ul className='flex gap-2 text-sm' >
                <a className='text-xs' href="/">Home</a>
                <a className='text-xs'href="/about">About</a>
                <a className='text-xs'href="/contact">Contact</a>
            </ul>
        </footer>      
    </div>
  )
}

export default Footer
