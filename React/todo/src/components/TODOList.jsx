import React, { useRef, useState, useEffect } from "react";

function Item({ item, setTodos }) {
  const inputRef = useRef(null);
  const [editing, setEditing] = useState(false);

  const completeTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todos) =>
        todos.id === item.id
          ? { ...todos, is_completed: !todos.is_completed }
          : todos
      )
    );
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleInputChange = (e) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, title: e.target.value } : todo
      )
    );
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  return (
    <li id={item?.id} className="todo_item">
      {editing ? (
        <form className="edit-form" onSubmit={handleInputSubmit}>
          <label htmlFor="edit-todo">
            <input
              type="text"
              ref={inputRef}
              name="edit-todo"
              id="edit-todo"
              defaultValue={item.title}
              onChange={handleInputChange}
            />
          </label>
        </form>
      ) : (
        <>
          <button className="todo-items-left" onClick={completeTodo}>
            <svg
              fill={item.is_completed ? "#22C55E" : "#0d0d0d"}
              width={24}
              height={24}
            >
              <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
            </svg>
            <p className="item-title">{item?.title} </p>
          </button>

          <div className="todo_items_right">
            <button onClick={handleEdit}>
              <span className="visually-hidden">Edit</span>
              <span className="material-symbols-outlined">edit</span>
            </button>

            <button>
              <span className="visually-hidden">Delete</span>
              <span className="material-symbols-outlined">delete_forever</span>
            </button>
          </div>
        </>
      )}
    </li>
  );
}

const TODOList = ({ todos, setTodos }) => {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <Item key={item.id} item={item} setTodos={setTodos} />
        ))
      ) : (
        <p>so lonley here. what do you think ? </p>
      )}
    </ol>
  );
};

export default TODOList;
