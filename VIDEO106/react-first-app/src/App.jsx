import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Main Tittle = "This is the card 1 of  random img genrated" img = "https://picsum.photos/800/500" des = " this is the card no. 1 "/>      
    <Main Tittle = "This is the card 2 of  random img genrated" img = "https://picsum.photos/800/500" des = " this is the card no. 2 "/>      
    <Main Tittle = "This is the card 3 of  random img genrated" img = "https://picsum.photos/800/500" des = " this is the card no. 3 "/>      
    <Main Tittle = "This is the card 4 of  random img genrated" img = "https://picsum.photos/800/500" des = " this is the card no. 4 "/>      
    <Main Tittle = "This is the card 5 of  random img genrated" img = "https://picsum.photos/800/500" des = " this is the card no. 5 "/>      
    <Footer/>
    </>
  )
}

export default App
