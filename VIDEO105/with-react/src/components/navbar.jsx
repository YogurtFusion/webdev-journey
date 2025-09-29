import React from 'react'

const navbar = (props) => {
  return (
    <div>
      <ul>
        <li>{props.logoText}</li>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
  )
}

export default navbar
