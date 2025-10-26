import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm,} from "react-hook-form"



function App() {
  const {
    register, 
    handleSubmit,
    watch,
    setError,
    formState: {errors, isSubmitting},

  } = useForm()

  async function delay(d) {
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }


  const onSubmit = async (data) =>{
    await delay(2)
    console.log(data)
    // if(data.username !== "chaplle"){
    //   setError("myform", {message: "your credential are wrong 🎃"})
    // }
    // if (data.username.toLowerCase()==="rohan"){
    //   setError("blocked", {message: "Sorry bruh we blocked you bc you're were a🍆"})
    // }
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}  className='form'  >
          <input className='input' type="text" placeholder='username' {...register("username", {required: {value: true, message: "this feild required "}, maxLength: {value: 8, message: "Max length is 8"}, minLength: {value: 3, message:"Min lenght is 3 "}})} />

         {errors.username && <div className='red'>{errors.username.message} </div>}

          <input className='input' type="password" placeholder='password' {...register("password", {required: {value: true, message: "this feild is required "}, minLength: {value: 8, message: "minimum lenght is 8"}, maxLength: {value: 36, message: "max lenght is 36"} })}  />

          {errors.password && <div className='red' >{errors.password.message} </div>}

          <input disabled = {isSubmitting} className='submit-btn' type="submit" value={"submit"} />
    { isSubmitting && <div>...loading</div>}
    {errors.myform && <div className='red' > {errors.myform.message} </div> }
    {errors.blocked && <div>{errors.blocked.message} </div> }
        </form>
      </div>
    </>
  )
}

export default App
