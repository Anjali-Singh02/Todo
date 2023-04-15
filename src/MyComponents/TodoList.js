import React, { Fragment } from 'react';
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
								{todos.length
									? todos?.map((todo, ind) => {
											console.log(
												'todo and ind = ',
												todo,
												ind,
											);
											return (
												// updated with a <Fragment> instead of <> type to include key,
												// since key always goes to the topmost parent.
												<Fragment key={todo.id}>
													<TodoItem
														todo={todo}
														onDelete={onDelete}
														onEdit={onEdit}
													/>
													<hr />
												</Fragment>
											);
									  })
									: 'No todos to display'}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
