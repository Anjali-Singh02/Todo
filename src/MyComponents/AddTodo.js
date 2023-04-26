/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState } from 'react';
// import  myImage  from "./logo1.png";
import './cssComp/style.css';


export const AddTodo = ({ addTodo, todo, setTodo }) => {
	const add = (event) => {
		event.preventDefault();
		const { id, title, desc } = todo;
		if (!title || !desc) {
			alert('Title or Description cannot be blank');
		} else {
			addTodo(id, title, desc);
			setTodo({
				title: '',
				desc: '',
			});
		}
	};

	const handleChange = (event) => {
		const { name } = event.target;
		// console.log(name);
		setTodo((elem) => {
			return { ...elem, [name]: event.target.value };


			
		});
	};

	return (
		<>
			<div className="addTodoContainer">
				{/* <img src={myImage} alt="My Image"  style={{ display: 'block', margin: '0 auto', width:"20vh"}} /> */}
				<div className="container formContainer my-5">
					<form onSubmit={add} className="form">
						<div className="mb-3">
							<label htmlFor="title" className="form-label">
								Task Title
							</label>
							<input
								type="text"
								name="title"
								value={todo.title}
								onChange={handleChange}
								className="form-control"
								id="addTitle"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="desc" className="form-label">
								Sub Task
							</label>
							<input
								type="text"
								name="desc"
								value={todo.desc}
								onChange={handleChange}
								className="form-control"
								id="desc"
							/>
						</div>

						<button type="submit" className="addBtn">
							Add
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
