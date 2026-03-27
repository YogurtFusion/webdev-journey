import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const User = () =>{
    const params = useParams()

  return (
    <div>
        I'm a user: {params.username}      
    </div>
  )
}

export default User
