import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from 'uuid';



function Manager() {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    const getPasswords = async ()=>{
        let req = await fetch("http://localhost:3000/")
        let passwords = await req.json()
        setpasswordArray(passwords)
    }
    useEffect(() => {
      getPasswords()
    }, [])

    const showPassword = () => {
        passwordRef.current.type = "text"
        alert("show password")
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text"
        }
    }

    const savePassword = async () => {
        if (form.site.length>3 && form.password.length>3 && form.username.length>3) {
            await fetch("http://localhost:3000/", {method: "DELETE", headers: {"Content-Type": "application/json"}, body: JSON.stringify({id: form.id})})
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            await fetch("http://localhost:3000/", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({...form, id: uuidv4()})})

            setForm({ site: "", username: "", password: "" })
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            console.log([...passwordArray, form])
            toast.success(' PASSWORD saved', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }else{
            toast.error('Enter more than 3 charecters in Username, Password and Site ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });

        }
    }

    const deletePassword = async (id) => {
        console.log("Deleting the  password with id ", id)

        const passwordToDelete = passwordArray.find(item => item.id === id)

        let c = confirm(`Do you really wanna delete this password ? \n\nSite: ${passwordToDelete.site}\nUsername: ${passwordToDelete.username} `, )

        if (c) {

            setpasswordArray(passwordArray.filter(item => item.id !== id))
            await fetch("http://localhost:3000/", {method: "DELETE", headers: {"Content-Type": "application/json"}, body: JSON.stringify({id})})

            // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            toast.success("🗑️ Password deleted sucessfully", {
                position: "top-center",
                autoClose: 3000,
                theme: "dark",
                transition: Bounce,
            })
        }

    }

    const editPassword = (id) => {
        console.log("Editing the password with id", id)
        setForm({ ...passwordArray.filter(i => i.id === id)[0], id: id})
        setpasswordArray(passwordArray.filter(item => item.id !== id))
    }

    const copyText = (text) => {
        toast('🦄 PASSWORD Copied ' + text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
        navigator.clipboard.writeText(text)
    }



    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className=" p-3 md:p-0 md:mycontainer min-h-[88.2vh] max-w-6xl ">
                <h1 className='text-4xl text text-center font-bold '>
                    <span className='text-green-500' >&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-500' >OP/&gt;</span>

                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Passwork Manager</p>

                <div className='flex flex-col items-center p-4 text-black gap-8  ' >
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className=' rounded-full border border-green-500 w-full p-4 py-1' type="url" name='site' id='site' />

                    <div className='flex flex-col md:flex-row w-full  justify-between gap-8' >
                        <input value={form.username} onChange={handleChange} placeholder='Enter username' className=' rounded-full border border-green-500 w-full p-4 py-1' type="text" name='username' id='username' />

                        <div className="relative">

                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className=' rounded-full border border-green-500 w-full p-4 py-1' type="password" name='password' id='password' />
                            <span className="absolute right-[3px] top-[4px] cursor-pointer ">
                                <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" onClick={showPassword} />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full gap-2 px-4 py-2 w-fit border border-green-900' >
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                        Save
                    </button>
                </div>
                <div className="passwords ">
                    <h2 className='font-bold text-2xl py-4 ml-4  ' >Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show </div>}
                    {passwordArray.length != 0 && <table className='table-auto w-full rounded-md overflow-hidden mb-2 md:mb-10'>
                        <thead className='bg-green-800 text-white' >
                            <tr>
                                <th className='py-2' >Site</th>
                                <th className='py-2' >User name</th>
                                <th className='py-2' >Password</th>
                                <th className='py-2' >Actions</th>
                            </tr>

                        </thead>

                        <tbody className='bg-green-100' >
                            {passwordArray.map((item, index) => {

                                return <tr key={index}>
                                    <td className=' py-2 border border-white text-center' >
                                        <div className='flex items-center justify-center ' >
                                            <a href={item.site} target='_blank'> {item.site} </a>

                                            <div className=" lordicon-copy size-7 cursor-pointer" onClick={() => { copyText(item.site) }} >

                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>

                                            </div>
                                        </div>

                                    </td>
                                    <td className=' py-2 border border-white text-center' >
                                        <div className='flex items-center justify-center ' >
                                            <span> {item.username}</span>

                                            <div className=" lordicon-copy size-7 cursor-pointer" onClick={() => { copyText(item.username) }} >

                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>

                                            </div>
                                        </div>
                                    </td>

                                    <td className='  py-2 border border-white text-center' >
                                        <div className='flex items-center justify-center ' >
                                            <span> {"•".repeat(item.password.length)}</span>
                                            <div className=" lordicon-copy size-7 cursor-pointer" onClick={() => { copyText(item.password) }} >

                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>

                                            </div>
                                        </div>
                                    </td>

                                    <td className=' py-2 border border-white text-center'>
                                        <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </td>
                                </tr>

                            })}
                        </tbody>
                    </table>

                    }
                </div>
            </div>
        </div>
    )
}

export default Manager
