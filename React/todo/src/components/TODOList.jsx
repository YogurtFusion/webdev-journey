import React from "react";

const TODOList = ({ todos }) => {
  function Item({ item }) {
    return (
      <li id={item?.id} className="todo_item">
        <button>
          <svg>
            <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
          </svg>
          <p>{item?.title} </p>
        </button>

        <div className="todo_items_right">
          <button>
            <span className="visually-hidden">Edit</span>
            <span class="material-symbols-outlined">edit</span>
          </button>

          <button>
            <span className="visually-hidden">Delete</span>
            <span class="material-symbols-outlined">delete_forever</span>
          </button>
        </div>
      </li>
    );
  }

  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => <Item key={index} item={item} />)
      ) : (
        <p>seems lonley in here , what are you up do ? </p>
      )}
    </ol>
  );
};

export default TODOList;
