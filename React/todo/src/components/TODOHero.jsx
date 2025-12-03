import React from 'react'
const TODOHero = ({todos_completed, total_todos})=>{
    return (
        <section className="">
            <div className="">
                <p>Task Done</p>
                <p>keep it up</p>
            </div>
            <div className="">
                {todos_completed}/{total_todos}
            </div>
        </section>
    )
}

export default TODOHero

