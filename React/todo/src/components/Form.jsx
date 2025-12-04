import React from "react";

const Form = ({setTodos}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.todo.value;
    setTodos((prevTodos)=>[
      ...prevTodos,
      {title: value, id: crypto.randomUUID(), is_completed: false}
    ])
    e.target.reset();
  };
  return (
    
    <form className="form" onSubmit={handleSubmit}  >
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="write your next task here "
        />
      </label>
      <button>
        {/* <span>Submit</span> */}
        <span className="material-symbols-outlined">add</span>
   
      </button>
    </form>
    
  );
};

export default Form;
