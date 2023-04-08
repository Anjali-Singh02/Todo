import React from "react";
import { TodoItem } from "./TodoItem";
import "./cssComp/style.css";

export const TodoList = (props) => {
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
                {props.todos.length === 0
                  ? "No todos to display"
                  : props.todos.map((todo) => {
                      return (
                        <>
                        <TodoItem
                          todo={todo}
                          key={todo.sno}
                          onDelete={props.onDelete}
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
