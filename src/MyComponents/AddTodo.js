import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const add = (event) => {
      event.preventDefault();
      if (!title || !desc) {
          alert("Title or Description cannot be blank");
      }
      else {
          addTodo(title, desc);
          setTitle("");
          setDesc("");
      }
  }

  return (
    <>
      <div className="container my-5">
        <form onSubmit={add}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Add Title
            </label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="form-control" id="addTitle" />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input type="text" value={desc} onChange={(event) => setDesc(event.target.value)} className="form-control" id="desc" />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
};
