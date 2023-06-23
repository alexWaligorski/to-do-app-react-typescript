import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./components/model";

import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
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
        setTodos={setTodos}
        handleAdd={handleAdd}
      />
    </div>
  );
};

export default App;
