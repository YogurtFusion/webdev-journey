import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div>
      <form className="from" onSubmit={handleSubmit}>
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
          <img src="/plus.gif" alt="" />
        </button>
      </form>
    </div>
  );
};

export default Form;
