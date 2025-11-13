import React from 'react'

function Manager() {
    return (
        <div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className=" mycontainer bg-slate-50">
                <h1 className='text-4xl text text-center font-bold '>
                    <span className='text-green-700' >&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-700' >OP/&gt;</span>
                    
                    </h1>
                <p>Your own Passwork Manager</p>

                <div className='text-white flex flex-col p-4' >
                    <input className=' rounded-full ' type="text" />
                    <div className='flex' >
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manager
