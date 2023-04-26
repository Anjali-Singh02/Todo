import React from 'react';
import './cssComp/style.css';
import { DeleteFilled } from '@ant-design/icons';
import { EditFilled } from '@ant-design/icons';
export const TodoItem = ({ todo, onDelete, onEdit }) => {
	// console.log(todo);
	return (
		<>
			{/* {props.todo} */}
			<div className="container itemContainer">
				<h4>{todo.title}</h4>
				<p className="px-3">{todo.desc}</p>
				<div className="btnContainer">
					<DeleteFilled
						className="btn btn-outline-light px-2 py-1 mx-2"
						onClick={() => {
							onDelete(todo);
						}}
					/>

					<EditFilled
						className="btn btn-outline-light px-2 py-1"
						onClick={() => {
							onEdit(todo);
						}}
					/>
					<span className="checkBox">
						<input type="checkbox" />
					</span>
				</div>
			</div>
		</>
	);
};
