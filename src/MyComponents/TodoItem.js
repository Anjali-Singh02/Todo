import React from "react";

export const TodoItem = ({ todo, onDelete, onEdit }) => {
  return (
    <>
      {/* {props.todo} */}
      <div className="container ">
        <h4>{todo.title}</h4>
        <p className="px-3">{todo.desc}</p>
        <button
          className="btn btn-sm btn-danger px-3"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
        <button
          className="btn btn-sm btn-secondary mx-3 px-4"
          onClick={() => {
            onEdit(todo);
          }}
        >
          Edit
        </button>
      </div>
    </>
  );
};
