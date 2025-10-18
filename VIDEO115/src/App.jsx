import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Contact from './components/Contact'
import HomePage from './components/Home'
import { Link } from 'react-router-dom'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar/> <HomePage/></>
    },

    {
      path: "/login",
      element: <> <Navbar/> <Login/></>
    },
    {
      path: "/contact",
      element: <> <Navbar/> <Contact/></>
    },
    {
      path: "/user/:username",
      element: <> <Navbar/> <User/></>
    },

  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
