import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
  let listContainer = {
    height: "58vh",
  };

  return (
    <>
      <div className="container">
        <p>
          <button
            className="btn btn-info py-2 my-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
            Toggle width collapse
          </button>
        </p>
        <div>
          <div className="collapse" id="collapseWidthExample">
            <div className="card card-body py-4 my-3">
              <div className="container overflow-scroll" style={listContainer}>
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
