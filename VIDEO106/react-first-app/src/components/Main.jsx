import React from 'react'
import "./Main.css"
const Main = (props) => {
  return (
    <div>
        <div className='card'>

        {/* <img src="https://picsum.photos/300/200" alt="Random" /> */}
        <img src={props.img} alt="Random" />


        <p className='pass1'> {props.Tittle} </p>
        <p>card desc:  the image is random gerated google image which i found out first time and loved it </p>
        </div>
      
    </div>
  )
}

export default Main
