/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState } from 'react';
import  myImage  from "./logo1.png";
import "./cssComp/style.css";
import { PlusOutlined } from '@ant-design/icons';

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
    <div className="addTodoContainer">


     <img src={myImage} alt="My Image"  style={{ display: 'block', margin: '0 auto', width:"20vh"}} />
      <div className="container formContainer my-5">
        <form onSubmit={add} className='form'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Task Title
            </label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="form-control" id="addTitle" />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
             Sub Task
            </label>
            <input type="text" value={desc} onChange={(event) => setDesc(event.target.value)} className="form-control" id="desc" />
          </div>

          <button type="submit" className="addBtn">
         <p><PlusOutlined /></p> 
          </button>
        </form>
      </div>
      </div>
    </>
  );
};
