import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button
            className="text-white bg-indigo-500 border-0 py-0 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            X
          </button>
        </li>
      ))}
    </>
  );
}

export default Todos;
