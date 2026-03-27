import React from 'react'

function Todo({title, userId, id, completed}) {
  return (
    <div>
      <div>
        <h2> {title}  </h2>
        <p>id: {id}</p>
        {userId && <p>user id :  {userId} </p>}
        <p>status: {completed} </p>
      </div>
    </div>
  )
}

export default Todo
