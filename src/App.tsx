import React, { useState, useReducer } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import TodoReducer from "./reducer";

import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, dispatch] = useReducer(TodoReducer, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      dispatch({ type: "add", payload: todo });
    }
    setTodo("");
  };
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <InputField
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={dispatch}
        handleAdd={handleAdd}
      />
      <TodoList todos={todos} setTodos={dispatch} />
    </div>
  );
};

export default App;
