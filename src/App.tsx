import React from "react";
import InputField from "./components/InputField";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <InputField />
    </div>
  );
};

export default App;
