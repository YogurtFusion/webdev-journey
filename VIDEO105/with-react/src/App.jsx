import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';

function App() {
  const[value, setvalue] = useState(0)
  return (
    <div className="App">
     <Navbar logoText = "ChappleChesse is great" />
      <div className='value'>{value} </div>
      <button className='btn' onClick={()=>{setvalue(value+1)}} >click me</button>
    </div>
  );
}

export default App;
