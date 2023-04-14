import React from 'react';
import { TodoItem } from './TodoItem';
import './cssComp/style.css';

export const TodoList = ({ todos, onDelete, onEdit }) => {
	return (
		<>
			<div className="container todoContainer">
				<p>
					<button
						className="todoBtn"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseWidthExample"
						aria-expanded="false"
						aria-controls="collapseWidthExample"
					>
						Todo List
					</button>
				</p>
				<div>
					<div className="collapse" id="collapseWidthExample">
						<div className="card card-body">
							<div className="container listContainer ">
								{todos.length === 0
									? 'No todos to display'
									: todos.map((todo, ind) => {
											return (
												<>
													<TodoItem
														todo={todo}
														key={ind}
														onDelete={onDelete}
														onEdit={onEdit}
													/>
													<hr />
												</>
											);
									  })}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
