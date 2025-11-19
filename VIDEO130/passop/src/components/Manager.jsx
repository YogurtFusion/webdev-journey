import Cognito from 'next-auth/providers/cognito'
import React, { useEffect, useRef, useState } from 'react'


function Manager() {
    const ref = useRef()
    const [form, setForm] = useState({ site: "", username: "", pasword: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray = JSON.parse(passwords)
        }
        else {
            passwords = []
        }
    }, [])

    const showPassword = () => {
        alert("show password")
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
        }
        else {
            ref.current.src = "icons/eyecross.png"
        }

        const savePassword = () => {
            Console.log(form)
            setpasswordArray([...passwordArray, form])
        }

        const handleChange = (e) => {
            setForm({ ...form, [e.target.name]: e.target.value })
        }


    }


    return (
        <div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className=" mycontainer ">
                <h1 className='text-4xl text text-center font-bold '>
                    <span className='text-green-500' >&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-500' >OP/&gt;</span>

                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Passwork Manager</p>

                <div className='flex flex-col items-center p-4 text-black gap-8 ' >
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className=' rounded-full border border-green-500 w-full p-4 py-1' type="text" name='site' />

                    <div className='flex w-full  justify-between gap-8' >
                        <input value={form.username} onChange={handleChange} placeholder='Enter username' className=' rounded-full border border-green-500 w-full p-4 py-1' type="url" name='username' />

                        <div className="relative">

                            <input value={form.pasword} onChange={handleChange} placeholder='Enter Password' className=' rounded-full border border-green-500 w-full p-4 py-1' type="text" name='password' />
                            <span className="absolute right-[3px] top-[4px] cursor-pointer ">
                                <img ref={ref} className='p-1' width={26} src="icons/eye.png " alt="eye" onClick={showPassword} />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full gap-2 px-4 py-2 w-fit border border-green-900' >
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Manager
