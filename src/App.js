import './App.css';
import { Header } from './MyComponents/Header';
import { TodoList } from './MyComponents/TodoList';
import { AddTodo } from './MyComponents/AddTodo';
import { Features } from './MyComponents/Features';

// import { Footer } from "./MyComponents/Footer";
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { randomNumber } from './MyComponents/lib/lib';

function App() {
	// let initTodo =[]
	// if (localStorage.getItem('todos') === null) {
	// 	initTodo = [];
	// } else {
	// 	initTodo = JSON.parse(localStorage.getItem('todos'));
	// }

	// updated with direct state variable assignment instead of normal variables and conditional if
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem('todos')) ?? [],
	);
	const [todo, setTodo] = useState({ id: randomNumber, title: '', desc: '' });

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const onDelete = (todo) => {
		// console.log('Delete', todo);
		setTodos((reference) => reference.filter((el) => el !== todo));

		// localStorage.setItem('todos', JSON.stringify(todos));
		// since each time todos is updated, a useEffect to update localstorage is already present in line 27
	};

	const addTodo = (id, title, desc) => {
		// console.log('I am adding this todo', id, title, desc);
		// console.log(todos);

		// if item with id already exist then update else add as a new todo item.
		if (todos.some((elem) => elem.id === id)) {
			// const result = todos.find((elem) => elem.id === id);
			// console.log(result);

			setTodos(
				todos.map((elem) => {
					if (elem.id === id) {
						return {
							id: id,
							title: title,
							desc: desc,
						};
					}
					return elem;
				}),
			);
		} else {
			// const myTodo = {
			// 	id: randomNumber,
			// 	title: title,
			// 	desc: desc,
			// };

			// reduced lines of code and variable space.
			setTodos((reference) => [
				...reference,
				{
					id: randomNumber,
					title: title,
					desc: desc,
				},
			]);
		}
	};

	const onEdit = (value) => {
		// console.log(value);

		setTodo({ id: value.id, title: value.title, desc: value.desc });
	};

	return (
		<>
			<BrowserRouter>
				<Header title="Todo List" />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<AddTodo
									addTodo={addTodo}
									todo={todo}
									setTodo={setTodo}
								/>
								<TodoList
									todos={todos}
									onDelete={onDelete}
									onEdit={onEdit}
								/>
							</>
						}
					></Route>

					<Route path="/features" element={<Features />}></Route>
				</Routes>
			</BrowserRouter>
			{/* <Footer /> */}
		</>
	);
}

export default App;
