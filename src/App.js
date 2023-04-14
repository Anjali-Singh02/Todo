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
	let initTodo;
	if (localStorage.getItem('todos') === null) {
		initTodo = [];
	} else {
		initTodo = JSON.parse(localStorage.getItem('todos'));
	}

	const onDelete = (todo) => {
		console.log('Delete', todo);
		setTodos(
			todos.filter((e) => {
				return e !== todo;
			}),
		);

		localStorage.setItem('todos', JSON.stringify(todos));
	};
	const addTodo = (id, title, desc) => {
		console.log('I am adding this todo', id, title, desc);
		console.log(todos);
		if (todos.some((elem) => elem.id === id)) {
			const result = todos.find((elem) => elem.id === id);
			console.log(result);

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
			const myTodo = {
				id: randomNumber,
				title: title,
				desc: desc,
			};
			setTodos([...todos, myTodo]);
			// console.log(myTodo);
		}
	};
	const [todos, setTodos] = useState(initTodo);
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const [todo, setTodo] = useState({ id: randomNumber, title: '', desc: '' });

	const onEdit = (value) => {
		console.log(value);
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
						}></Route>

					<Route path="/features" element={<Features />}></Route>
				</Routes>
			</BrowserRouter>
			{/* <Footer /> */}
		</>
	);
}

export default App;
