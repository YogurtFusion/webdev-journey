import React from "react";

const Form = ({ todos, setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.todo.value;
    const newTodo = {
      title: value,
      id: crypto.randomUUID(),
      is_completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    const updatedTodoList = JSON.stringify([...todos, newTodo]);
    localStorage.setItem("todos", updatedTodoList);
    e.target.reset();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
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
