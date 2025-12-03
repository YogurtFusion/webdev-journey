import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <span>Submit</span>
        <span className="material-symbols-outlined">add</span>
   
      </button>
    </form>
    
  );
};

export default Form;
